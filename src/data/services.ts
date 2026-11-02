import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AppWindow,
  Camera,
  Cloud,
  Fingerprint,
  Monitor,
  Network,
  Presentation,
  Printer,
  Radio,
  Server,
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
    slug: "computer-maintenance-and-amc",
    title: "Computer Maintenance and Annual Maintenance Contracts",
    shortTitle: "Computer maintenance & AMC",
    description:
      "Computer repair and scheduled annual maintenance support across business desktops, laptops, servers and peripherals.",
    introduction:
      "Varun Systems provides both on-demand computer maintenance and planned annual maintenance contracts covering hardware, software, peripherals, servers and related IT infrastructure.",
    capabilities: [
      "Desktop, laptop and server maintenance and repair",
      "Printer, scanner, monitor and UPS repair",
      "Hardware troubleshooting and computer upgrades",
      "Operating system debugging and virus removal",
      "Hard drive data recovery",
      "Remote management and monitoring support",
      "Scheduled preventive maintenance visits",
      "Annual maintenance contracts for organizational IT equipment",
      "Computer, printer, copier and network maintenance coverage",
      "Fault reporting and technical support coordination",
    ],
    icon: Wrench,
    image: "/images/network-support.webp",
    relatedProducts: ["Desktop computers", "Laptops", "Printers", "UPS systems"],
  },
  {
    slug: "network-installation-and-networking-solutions",
    title: "Network Installation and Networking Solutions",
    shortTitle: "Network installation & solutions",
    description:
      "LAN, WAN, structured cabling, wireless access, configuration and ongoing network support.",
    introduction:
      "Varun Systems provides end-to-end networking capabilities covering network design, wired and wireless installation, LAN, MAN and WAN configuration, maintenance and infrastructure support.",
    capabilities: [
      "Wired networks using CAT5e and CAT6 cabling",
      "Wireless networks and Wi-Fi access points",
      "LAN, MAN and WAN configuration",
      "Local Area Network (LAN) solutions",
      "Wide Area Network (WAN) solutions",
      "Network design, installation and configuration",
      "Router, switch and network module troubleshooting",
      "Firewall and proxy server configuration",
      "Remote network management and monitoring",
      "Mail, file and web server installation and configuration",
      "Network maintenance and infrastructure support",
    ],
    icon: Network,
    image: "/images/network-support.webp",
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
    slug: "fire-alarm-systems",
    title: "Fire Alarm Systems",
    shortTitle: "Fire alarm systems",
    description:
      "Fire detection, alarm, evacuation notification and maintenance support for organizational environments.",
    introduction:
      "Varun Systems provides enterprise fire alarm system enquiries covering detection equipment, alarm devices, system configuration, installation coordination and ongoing support.",
    capabilities: [
      "Fire alarm control panels",
      "Smoke and heat detectors",
      "Manual call points and alarm devices",
      "Sounders, horns and evacuation notification",
      "Fire alarm system design and configuration",
      "Equipment installation and system integration",
      "Testing, commissioning and maintenance support",
      "Monitoring and fault-troubleshooting enquiries",
    ],
    icon: Radio,
    image: "/images/fire-alarm-systems.webp",
    relatedProducts: ["Fire alarm equipment"],
  },
  {
    slug: "public-address-systems",
    title: "Public Address Systems",
    shortTitle: "Public address systems",
    description:
      "PA and voice communication systems for announcements, paging and background audio.",
    introduction:
      "Varun Systems supplies and supports public address system requirements for clear communication across offices, institutions, commercial premises and public facilities.",
    capabilities: [
      "Public address and voice communication systems",
      "Amplifiers and speaker selection",
      "Microphones and paging equipment",
      "Zone-based announcements",
      "Background music and scheduled audio",
      "System integration and installation support",
      "Testing, maintenance and troubleshooting",
    ],
    icon: Radio,
    image: "/images/fire-alarm-systems.webp",
    relatedProducts: ["Public address equipment"],
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
      "The newer company profile groups interactive flat panels, video conferencing, professional audio and meeting-room solutions under enterprise AV and collaboration.",
    capabilities: [
      "Interactive flat panel displays",
      "Video conferencing systems",
      "Professional audio systems",
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
    slug: "data-center-solutions",
    title: "Data Center Solutions",
    shortTitle: "Data center solutions",
    description:
      "Planning, infrastructure and support for reliable server-room and data-center environments.",
    introduction:
      "Varun Systems supports data-center requirements with server racks, structured infrastructure, power distribution planning, cooling coordination and equipment organization for dependable operations.",
    capabilities: [
      "Server racks",
      "Rack installation and equipment organization",
      "Power Distribution Units (PDUs)",
      "Data-center infrastructure",
      "Server-room layout and infrastructure planning",
      "Structured cabling and network infrastructure",
      "Cooling and environmental equipment enquiries",
      "Data-center expansion and upgrade support",
    ],
    icon: Server,
    relatedProducts: ["Server racks", "UPS systems", "Power distribution units"],
  },
  {
    slug: "printer-copier-services",
    title: "Printer and Copier Services",
    shortTitle: "Print & copier services",
    description:
      "Supply, service and maintenance support for printers and copiers.",
    introduction:
      "Varun Systems provides printer and copier supply, servicing, repair and maintenance support for organizational environments.",
    capabilities: [
      "Printer supply, repair and maintenance",
      "Copier supply, chip-level servicing and maintenance",
      "Printer servicing, including chip-level work described in the profile",
      "Printer and copier troubleshooting",
      "Preventive maintenance and repair enquiries",
    ],
    icon: Printer,
    image: "/images/copier-support.webp",
    relatedProducts: ["Printers", "Copiers"],
  },
  {
    slug: "ups-systems",
    title: "UPS Systems",
    shortTitle: "UPS systems",
    description:
      "Uninterruptible power supply solutions for backup power, protection and operational continuity.",
    introduction:
      "Varun Systems supports UPS system requirements for IT and organizational environments, including supply, installation, maintenance and repair enquiries for single- and three-phase systems.",
    capabilities: [
      "Online and offline UPS systems",
      "Single-phase UPS supply and support",
      "Three-phase UPS supply and support",
      "UPS installation and commissioning",
      "Battery supply and replacement enquiries",
      "Load assessment and UPS selection",
      "Preventive maintenance and repair",
      "UPS troubleshooting and fault support",
    ],
    icon: Activity,
    image: "/images/network-support.webp",
    relatedProducts: ["UPS systems", "Power distribution units"],
  },
];

export const getService = (slug: string | undefined) =>
  services.find((service) =>
    service.slug === slug ||
    ((slug === "network-installation-and-maintenance" || slug === "networking-solutions") &&
      service.slug === "network-installation-and-networking-solutions") ||
    (slug === "fire-alarm-and-pa-systems" &&
      service.slug === "fire-alarm-systems") ||
    (slug === "printer-copier-ups-services" &&
      service.slug === "ups-systems") ||
    ((slug === "computer-maintenance-and-repair" || slug === "annual-maintenance-contracts") &&
      service.slug === "computer-maintenance-and-amc") ||
    (slug === "data-center-and-power-solutions" &&
      service.slug === "data-center-solutions")
  );

export const serviceDescriptionsBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service.description]),
);
