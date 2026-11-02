import type { Service } from "./services";
import type { IndustryGroup } from "./industries";
import type { Product } from "./products";

const infrastructureImage = "/images/network-support.webp";
const teamImage = "/images/team-workspace.webp";

export function serviceImage(service: Service) {
  const expertiseImages: Record<string, string> = {
    "it-products-and-supply": "/images/expertise/it-products-and-supply.jpg",
    "computer-maintenance-and-repair": "/images/expertise/computer-maintenance-and-repair.jpg",
    "network-installation-and-maintenance": "/images/expertise/network-installation-and-maintenance.jpg",
    "annual-maintenance-contracts": "/images/expertise/annual-maintenance-contracts.jpg",
    "networking-solutions": "/images/expertise/networking-solutions.jpg",
    "cctv-and-surveillance": "/images/expertise/cctv-and-surveillance.jpg",
    "fire-alarm-and-pa-systems": "/images/expertise/fire-alarm-and-pa-systems.jpg",
    "biometric-attendance-and-access-control": "/images/expertise/biometric-attendance-and-access-control.jpg",
    "cloud-managed-services": "/images/expertise/cloud-managed-services.jpg",
    "server-and-storage-solutions": "/images/expertise/server-and-storage-solutions.jpg",
    "interactive-panels": "/images/expertise/interactive-panels.jpg",
    "enterprise-av-and-collaboration": "/images/expertise/enterprise-av-and-collaboration.jpg",
    "data-center-and-power-solutions": "/images/expertise/data-center-and-power-solutions.jpg",
    "facility-management": "/images/expertise/facility-management.jpg",
    "manpower-supply": "/images/expertise/manpower-supply.jpg",
    "printer-copier-ups-services": "/images/expertise/printer-copier-ups-services.jpg",
  };
  if (expertiseImages[service.slug]) return expertiseImages[service.slug];
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
    "desktop-computers": "/images/products/desktop-computers.jpg",
    laptops: "/images/products/laptops.jpg",
    servers: "/images/products/servers.jpg",
    workstations: "/images/products/workstations.jpg",
    printers: "/images/products/printers.jpg",
    copiers: "/images/products/copiers.jpg",
    scanners: "/images/products/scanners.jpg",
    "ups-systems": "/images/products/ups-systems.jpg",
    "computer-components": "/images/products/computer-components.jpg",
    "hard-drives-and-storage-accessories": "/images/products/hard-drives-and-storage-accessories.jpg",
    "computer-peripherals": "/images/products/computer-peripherals.jpg",
    "network-equipment": "/images/products/network-equipment.jpg",
    "hd-and-ip-cctv-cameras": "/images/cctv-systems.webp",
    "dvr-and-nvr-systems": "/images/cctv-systems.webp",
    "biometric-attendance-systems": "/images/products/biometric-attendance-systems.jpg",
    "access-control-equipment": "/images/products/access-control-equipment.jpg",
    "fire-alarm-and-pa-equipment": "/images/products/fire-alarm-and-pa-equipment.jpg",
    "interactive-panels": "/images/products/interactive-panels.jpg",
    "video-conferencing-systems": "/images/products/video-conferencing-systems.jpg",
    "professional-audio-systems": "/images/products/professional-audio-systems.jpg",
    "video-door-phones": "/images/products/video-door-phones.jpg",
    "server-racks": "/images/products/server-racks.jpg",
    "power-distribution-units": "/images/products/power-distribution-units.jpg",
    "data-center-infrastructure": "/images/products/data-center-infrastructure.jpg",
    "software-licensing": "/images/products/software-licensing.jpg",
    tablets: "/images/products/tablets.jpg",
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
