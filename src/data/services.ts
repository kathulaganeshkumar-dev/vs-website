import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AppWindow,
  BatteryCharging,
  Camera,
  Cloud,
  Fingerprint,
  Monitor,
  Network,
  Presentation,
  Printer,
  Radio,
  Server,
  Users,
  Wrench,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  introduction: string;
  capabilities: string[];
  icon: LucideIcon;
  image?: string;
  relatedProducts?: string[];
};

export const services: Service[] = [
  {
    slug: "it-products-and-supply",
    title: "IT Products and Supply",
    shortTitle: "IT products & supply",
    description:
      "Computing, print, power, network and interactive equipment for organizational environments.",
    introduction:
      "Varun Systems supplies a broad range of IT equipment described in the company profile. Enquiries can be tailored to the products and quantities an organization needs.",
    capabilities: [
      "Desktop computers, laptops, servers and workstations",
      "Printers, copiers and scanners",
      "UPS systems and network equipment",
      "Computer parts, storage accessories and peripherals",
      "Interactive panels",
    ],
    icon: Monitor,
    relatedProducts: ["Desktop computers", "Servers", "Network equipment"],
  },
  {
    slug: "computer-maintenance-and-repair",
    title: "Computer Maintenance and Repair",
    shortTitle: "Computer maintenance",
    description:
      "Hardware maintenance, troubleshooting and repair support across common business equipment.",
    introduction:
      "The company profile describes maintenance and repair for computers and related equipment, together with software troubleshooting and remote support.",
    capabilities: [
      "Desktop, laptop and server maintenance and repair",
      "Printer, scanner, monitor and UPS repair",
      "Hardware troubleshooting and computer upgrades",
      "Operating system debugging and virus removal",
      "Hard drive data recovery",
      "Remote management and monitoring support",
    ],
    icon: Wrench,
    image: "/images/network-support.webp",
    relatedProducts: ["Desktop computers", "Laptops", "Printers"],
  },
  {
    slug: "network-installation-and-maintenance",
    title: "Network Installation and Maintenance",
    shortTitle: "Network installation",
    description:
      "Structured cabling, wireless access, configuration and ongoing network support.",
    introduction:
      "Varun Systems' profile outlines wired and wireless network installations, LAN, MAN and WAN configuration, and support for network infrastructure.",
    capabilities: [
      "Wired networks using CAT5e and CAT6 cabling",
      "Wireless networks and Wi-Fi access points",
      "LAN, MAN and WAN configuration",
      "Router, switch and network module troubleshooting",
      "Firewall and proxy server configuration",
      "Remote network management and monitoring",
      "Mail, file and web server installation and configuration",
    ],
    icon: Network,
    image: "/images/network-support.webp",
    relatedProducts: ["Network equipment", "Servers"],
  },
  {
    slug: "annual-maintenance-contracts",
    title: "Annual Maintenance Contracts (AMC)",
    shortTitle: "Annual maintenance",
    description:
      "Ongoing technical maintenance across computer, network, print and power equipment.",
    introduction:
      "The company profile describes AMC support for organizational environments, with maintenance across computer systems and selected IT infrastructure.",
    capabilities: [
      "Computer, desktop and laptop maintenance",
      "Server and LAN maintenance",
      "Printer and copier maintenance",
      "UPS and network maintenance",
      "Related technical support",
    ],
    icon: Activity,
    relatedProducts: ["Computers", "Printers", "UPS systems"],
  },
  {
    slug: "networking-solutions",
    title: "Networking Solutions",
    shortTitle: "Networking solutions",
    description:
      "LAN and WAN solutions to connect devices and locations within an organization.",
    introduction:
      "Varun Systems describes experience in the design, installation and maintenance of LAN and WAN networks, with support for connected devices and infrastructure.",
    capabilities: [
      "Local Area Network (LAN) solutions",
      "Wide Area Network (WAN) solutions",
      "Network design, installation and configuration",
      "Network maintenance and troubleshooting",
      "Network infrastructure support",
    ],
    icon: Network,
    relatedProducts: ["Network equipment", "Servers"],
  },
  {
    slug: "cctv-and-surveillance",
    title: "CCTV and Surveillance Systems",
    shortTitle: "CCTV & surveillance",
    description:
      "Surveillance equipment and installation support for business environments.",
    introduction:
      "The company profile includes CCTV solutions built around HD and IP cameras, with DVR- and NVR-based systems.",
    capabilities: [
      "HD CCTV cameras",
      "IP CCTV cameras",
      "DVR-based CCTV systems",
      "NVR-based CCTV systems",
      "Installation, troubleshooting and maintenance enquiries",
    ],
    icon: Camera,
    image: "/images/cctv-systems.webp",
    relatedProducts: ["HD and IP CCTV cameras", "DVR and NVR systems"],
  },
  {
    slug: "fire-alarm-and-pa-systems",
    title: "Fire Alarm Detection and Public Address",
    shortTitle: "Fire alarm & PA",
    description:
      "Enterprise fire detection and public address equipment for safety and communication needs.",
    introduction:
      "Varun Systems' profile lists enterprise fire alarm detection and public address systems as part of its service offering.",
    capabilities: [
      "Enterprise fire alarm detection systems",
      "Public Address (PA) systems",
      "Related installation and support enquiries",
    ],
    icon: Radio,
    image: "/images/fire-alarm-systems.webp",
    relatedProducts: ["Fire alarm and PA equipment"],
  },
  {
    slug: "biometric-attendance-and-access-control",
    title: "Biometric Attendance and Access Control",
    shortTitle: "Biometric & access",
    description:
      "Attendance and access-control equipment for managing access to organizational premises.",
    introduction:
      "The company profile describes biometric time and attendance systems and related access-control equipment.",
    capabilities: [
      "Biometric attendance systems",
      "Access-control systems",
      "Attendance and security equipment enquiries",
    ],
    icon: Fingerprint,
    relatedProducts: ["Biometric attendance systems", "Access-control equipment"],
  },
  {
    slug: "cloud-managed-services",
    title: "Cloud Managed Services",
    shortTitle: "Cloud managed services",
    description:
      "Cloud assessment, migration and infrastructure management support.",
    introduction:
      "The company profile describes cloud services that help organizations plan, migrate and manage cloud infrastructure.",
    capabilities: [
      "Cloud infrastructure assessment",
      "Cloud migration support",
      "Cloud infrastructure management",
      "Cloud optimization and automation",
      "Hybrid and virtual infrastructure planning",
    ],
    icon: Cloud,
    relatedProducts: ["Servers", "Storage accessories", "Network equipment"],
  },
  {
    slug: "server-and-storage-solutions",
    title: "Server and Storage Solutions",
    shortTitle: "Server & storage",
    description:
      "Server infrastructure and storage support for organizational IT environments.",
    introduction:
      "Varun Systems' profile outlines server management and storage solutions, alongside related networking and infrastructure capabilities.",
    capabilities: [
      "Server infrastructure and server management",
      "Storage solutions and storage consolidation",
      "Cloud networking and network security",
      "Thin-client solutions",
      "Virtualization and VPN-related solutions",
      "Infrastructure optimization",
    ],
    icon: Server,
    relatedProducts: ["Servers", "Workstations", "Hard drives and storage accessories"],
  },
  {
    slug: "interactive-panels",
    title: "Interactive Panels",
    shortTitle: "Interactive panels",
    description:
      "Interactive display equipment for learning, presentations and meetings.",
    introduction:
      "The company profile presents interactive panels for classroom and professional environments, including learning and presentation use cases.",
    capabilities: [
      "Interactive panel supply enquiries",
      "Educational and classroom applications",
      "Presentation and meeting applications",
    ],
    icon: AppWindow,
    relatedProducts: ["Interactive panels"],
  },
  {
    slug: "enterprise-av-and-collaboration",
    title: "Enterprise AV and Collaboration Solutions",
    shortTitle: "AV & collaboration",
    description:
      "Display, audio and conferencing systems for learning, meetings and collaboration.",
    introduction:
      "The newer company profile groups interactive flat panels, video conferencing, professional audio, public address and meeting-room solutions under enterprise AV and collaboration.",
    capabilities: [
      "Interactive flat panel displays",
      "Video conferencing systems",
      "Professional audio systems",
      "Public Address (PA) systems",
      "Meeting-room solutions",
    ],
    icon: Presentation,
    relatedProducts: [
      "Interactive panels",
      "Video conferencing systems",
      "Professional audio systems",
    ],
  },
  {
    slug: "data-center-and-power-solutions",
    title: "Data Center and Power Solutions",
    shortTitle: "Data center & power",
    description:
      "Server-room infrastructure and power equipment for organizational environments.",
    introduction:
      "The newer company profile lists server racks, UPS systems, power distribution units and data-center infrastructure alongside its server and storage capabilities.",
    capabilities: [
      "Server racks",
      "UPS systems",
      "Power Distribution Units (PDUs)",
      "Data-center infrastructure",
      "Related server and storage requirements",
    ],
    icon: Server,
    relatedProducts: ["Server racks", "UPS systems", "Power distribution units"],
  },
  {
    slug: "facility-management",
    title: "Facility Management Services",
    shortTitle: "Facility management",
    description:
      "Engineering and non-engineering facility support for organizational operations.",
    introduction:
      "Varun Systems' profile describes facility management across engineering and non-engineering requirements.",
    capabilities: [
      "Facility maintenance support",
      "Engineering-related facility services",
      "Non-engineering facility services",
      "Maintenance and operational coordination",
    ],
    icon: BatteryCharging,
  },
  {
    slug: "manpower-supply",
    title: "Manpower Supply",
    shortTitle: "Manpower supply",
    description:
      "Skilled workforce supply enquiries shaped around an organization's requirements.",
    introduction:
      "The company profile describes manpower supply and screening for skilled workforce requirements.",
    capabilities: [
      "Manpower supply enquiries",
      "Skilled workforce requirements",
      "Role and organizational requirement discussions",
    ],
    icon: Users,
  },
  {
    slug: "printer-copier-ups-services",
    title: "Printer, Copier and UPS Services",
    shortTitle: "Print, copier & UPS",
    description:
      "Supply, service and maintenance support for printers, copiers and UPS systems.",
    introduction:
      "Varun Systems' company profile includes printer and copier supply and services, alongside UPS supply, installation, troubleshooting and repair support.",
    capabilities: [
      "Printer supply, repair and maintenance",
      "Copier supply, chip-level servicing and maintenance",
      "Printer servicing, including chip-level work described in the profile",
      "UPS supply, installation and repair enquiries",
      "Support for single- and three-phase UPS systems",
    ],
    icon: Printer,
    image: "/images/copier-support.webp",
    relatedProducts: ["Printers", "Copiers", "UPS systems"],
  },
];

export const getService = (slug: string | undefined) =>
  services.find((service) => service.slug === slug);

export const serviceDescriptionsBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service.description]),
);
