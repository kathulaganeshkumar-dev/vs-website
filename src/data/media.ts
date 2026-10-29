import type { Service } from "./services";
import type { IndustryGroup } from "./industries";
import type { Product } from "./products";

const infrastructureImage = "/images/network-support.webp";
const teamImage = "/images/team-workspace.webp";

export function serviceImage(service: Service) {
  if (service.slug === "it-products-and-supply") return "/images/hero-workspace.webp";
  if (service.slug === "computer-maintenance-and-repair" || service.slug === "annual-maintenance-contracts") {
    return "/images/copier-support.webp";
  }
  if (service.slug === "fire-alarm-and-pa-systems") return "/images/fire-alarm-systems.webp";
  if (["cloud-managed-services", "server-and-storage-solutions", "networking-solutions", "network-installation-and-maintenance", "data-center-and-power-solutions"].includes(service.slug)) {
    return "/images/network-support.webp";
  }
  if (service.image) return service.image;
  if (["it-products-and-supply", "server-and-storage-solutions", "cloud-managed-services", "data-center-and-power-solutions"].includes(service.slug)) {
    return infrastructureImage;
  }
  if (["cctv-and-surveillance", "biometric-attendance-and-access-control", "fire-alarm-and-pa-systems"].includes(service.slug)) {
    return "/images/cctv-systems.webp";
  }
  if (["interactive-panels", "enterprise-av-and-collaboration"].includes(service.slug)) {
    return teamImage;
  }
  if (["printer-copier-ups-services"].includes(service.slug)) return "/images/copier-support.webp";
  return "/images/network-support.webp";
}

export function industryImage(group: IndustryGroup) {
  const title = group.title.toLowerCase();
  if (title.includes("government")) return "/images/hero-workspace.webp";
  if (title.includes("manufacturing")) return "/images/copier-support.webp";
  if (title.includes("infrastructure") || title.includes("service")) return "/images/cctv-systems.webp";
  if (title.includes("corporate")) return infrastructureImage;
  return "/images/team-workspace.webp";
}

export function productImage(product: Product) {
  const images: Record<string, string> = {
    "desktop-computers": "/images/team-workspace.webp",
    laptops: "/images/hero-workspace.webp",
    servers: "/images/network-support.webp",
    workstations: "/images/team-workspace.webp",
    printers: "/images/copier-support.webp",
    copiers: "/images/copier-support.webp",
    scanners: "/images/copier-support.webp",
    "ups-systems": "/images/fire-alarm-systems.webp",
    "computer-components": "/images/hero-workspace.webp",
    "hard-drives-and-storage-accessories": "/images/network-support.webp",
    "computer-peripherals": "/images/hero-workspace.webp",
    "network-equipment": "/images/network-support.webp",
    "hd-and-ip-cctv-cameras": "/images/cctv-systems.webp",
    "dvr-and-nvr-systems": "/images/cctv-systems.webp",
    "biometric-attendance-systems": "/images/fire-alarm-systems.webp",
    "access-control-equipment": "/images/cctv-systems.webp",
    "fire-alarm-and-pa-equipment": "/images/fire-alarm-systems.webp",
    "interactive-panels": "/images/team-workspace.webp",
    "video-conferencing-systems": "/images/network-support.webp",
    "professional-audio-systems": "/images/team-workspace.webp",
    "video-door-phones": "/images/cctv-systems.webp",
    "server-racks": "/images/network-support.webp",
    "power-distribution-units": "/images/fire-alarm-systems.webp",
    "data-center-infrastructure": "/images/network-support.webp",
    "software-licensing": "/images/hero-workspace.webp",
    tablets: "/images/team-workspace.webp",
  };
  if (images[product.slug]) return images[product.slug];
  switch (product.category) {
    case "Print & scan": return "/images/copier-support.webp";
    case "Networking":
    case "Data center & power": return infrastructureImage;
    case "Security": return "/images/cctv-systems.webp";
    case "Meeting & learning":
    case "Software & licensing": return teamImage;
    default: return "/images/hero-workspace.webp";
  }
}
