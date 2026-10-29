import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocation } from "react-router";

type CarouselProps = {
  label: string;
  children: ReactNode[];
  autoPlayMs?: number;
};

export default function Carousel({ label, children, autoPlayMs }: CarouselProps) {
  const location = useLocation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapTimerRef = useRef<number | undefined>(undefined);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const [isVisible, setIsVisible] = useState(false);
  const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false);
  const cloneCount = children.length > 3 ? 3 : 0;

  const normalizePosition = useCallback((track = trackRef.current) => {
    if (!track || !cloneCount) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const nearest = slides.reduce((best, slide, index) => {
      const bestDistance = Math.abs(slides[best].offsetLeft - track.scrollLeft);
      const distance = Math.abs(slide.offsetLeft - track.scrollLeft);
      return distance < bestDistance ? index : best;
    }, 0);
    const firstOriginal = cloneCount;
    const lastOriginal = cloneCount + children.length - 1;
    if (nearest < firstOriginal) {
      track.scrollLeft = slides[nearest + children.length].offsetLeft;
    } else if (nearest > lastOriginal) {
      track.scrollLeft = slides[nearest - children.length].offsetLeft;
    }
  }, [children.length, cloneCount]);

  const move = useCallback((direction: number) => {
    const track = trackRef.current;
    if (!track || children.length < 2) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const nearest = slides.reduce((best, slide, index) => {
      const bestDistance = Math.abs(slides[best].offsetLeft - track.scrollLeft);
      const distance = Math.abs(slide.offsetLeft - track.scrollLeft);
      return distance < bestDistance ? index : best;
    }, 0);
    const firstOriginal = cloneCount;
    const lastOriginal = cloneCount + children.length - 1;
    const next = nearest + direction;
    const target = Math.max(0, Math.min(slides.length - 1, next));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (wrapTimerRef.current !== undefined) window.clearTimeout(wrapTimerRef.current);
    if (animationFrameRef.current !== undefined) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = undefined;
    }

    const from = track.scrollLeft;
    const to = slides[target].offsetLeft;
    if (reducedMotion || Math.abs(to - from) < 1) {
      track.scrollLeft = to;
    } else {
      const startedAt = performance.now();
      const duration = 1100;
      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        track.scrollLeft = from + (to - from) * eased;
        if (progress < 1) {
          animationFrameRef.current = window.requestAnimationFrame(animate);
        } else {
          animationFrameRef.current = undefined;
        }
      };
      animationFrameRef.current = window.requestAnimationFrame(animate);
    }

    const wrapsForward = cloneCount > 0 && next > lastOriginal;
    const wrapsBackward = cloneCount > 0 && next < firstOriginal;
    if (wrapsForward || wrapsBackward) {
      if (reducedMotion) {
        normalizePosition(track);
      } else {
        wrapTimerRef.current = window.setTimeout(() => normalizePosition(track), 1200);
      }
    }
  }, [children.length, cloneCount, normalizePosition]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (animationFrameRef.current !== undefined) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = undefined;
    }
    if (wrapTimerRef.current !== undefined) {
      window.clearTimeout(wrapTimerRef.current);
      wrapTimerRef.current = undefined;
    }
    const firstOriginal = cloneCount;
    const slides = Array.from(track.children) as HTMLElement[];
    track.scrollLeft = 0;
    track.scrollLeft = slides[firstOriginal]?.offsetLeft ?? 0;
  }, [children.length, cloneCount, location.pathname]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !autoPlayMs || children.length < 2) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.15 });
    observer.observe(carousel);
    return () => observer.disconnect();
  }, [autoPlayMs, children.length]);

  useEffect(() => {
    if (
      !autoPlayMs ||
      !isVisible ||
      hasKeyboardFocus ||
      children.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) move(1);
    }, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [autoPlayMs, children.length, hasKeyboardFocus, isVisible, move]);

  useEffect(() => () => {
    if (wrapTimerRef.current !== undefined) window.clearTimeout(wrapTimerRef.current);
    if (animationFrameRef.current !== undefined) window.cancelAnimationFrame(animationFrameRef.current);
  }, []);

  const slides = [
    ...children.slice(-cloneCount).map((child, index) => ({
      child,
      index: children.length - cloneCount + index,
      key: `leading-${index}`,
      clone: true,
    })),
    ...children.map((child, index) => ({ child, index, key: `original-${index}`, clone: false })),
    ...children.slice(0, cloneCount).map((child, index) => ({ child, index, key: `trailing-${index}`, clone: true })),
  ];

  return (
    <div
      ref={carouselRef}
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onFocusCapture={() => setHasKeyboardFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHasKeyboardFocus(false);
        }
      }}
    >
      <div className="carousel__arrows">
        <button className="carousel__control" type="button" onClick={() => move(-1)} aria-label={`Previous ${label} slide`}>
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button className="carousel__control" type="button" onClick={() => move(1)} aria-label={`Next ${label} slide`}>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
      <div className="carousel__track" ref={trackRef}>
        {slides.map(({ child, index, key, clone }) => (
          <div
            className="carousel__slide"
            key={key}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${children.length}`}
            aria-hidden={clone || undefined}
            inert={clone || undefined}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
