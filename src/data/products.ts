import type { LucideIcon } from "lucide-react";
import {
  Battery,
  Camera,
  CircuitBoard,
  Cpu,
  Fingerprint,
  HardDrive,
  Laptop,
  Monitor,
  Mouse,
  Network,
  PanelTop,
  Printer,
  ScanLine,
  Server,
  Shield,
  Speaker,
  Tablet,
  Workflow,
} from "lucide-react";

export type ProductCategory =
  | "Computing"
  | "Print & scan"
  | "Power & components"
  | "Networking"
  | "Security"
  | "Meeting & learning"
  | "Software & licensing"
  | "Data center & power";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  icon: LucideIcon;
};

export const productCategories: Array<"All categories" | ProductCategory> = [
  "All categories",
  "Computing",
  "Print & scan",
  "Power & components",
  "Networking",
  "Security",
  "Meeting & learning",
  "Software & licensing",
  "Data center & power",
];

export const products: Product[] = [
  {
    slug: "desktop-computers",
    name: "Desktop Computers",
    category: "Computing",
    description: "Desktop systems for office, institutional and operational use.",
    icon: Monitor,
  },
  {
    slug: "laptops",
    name: "Laptops",
    category: "Computing",
    description: "Portable computers for teams and organizational environments.",
    icon: Laptop,
  },
  {
    slug: "servers",
    name: "Servers",
    category: "Computing",
    description: "Server equipment for business infrastructure requirements.",
    icon: Server,
  },
  {
    slug: "workstations",
    name: "Workstations",
    category: "Computing",
    description: "Workstation systems for specialized computing needs.",
    icon: CircuitBoard,
  },
  {
    slug: "printers",
    name: "Printers",
    category: "Print & scan",
    description: "Printer equipment and related supply enquiries.",
    icon: Printer,
  },
  {
    slug: "copiers",
    name: "Copiers",
    category: "Print & scan",
    description: "Copier systems for shared and departmental workflows.",
    icon: Workflow,
  },
  {
    slug: "scanners",
    name: "Scanners",
    category: "Print & scan",
    description: "Scanning equipment for document and office environments.",
    icon: ScanLine,
  },
  {
    slug: "ups-systems",
    name: "UPS Systems",
    category: "Power & components",
    description: "Uninterruptible power systems for equipment and infrastructure.",
    icon: Battery,
  },
  {
    slug: "computer-components",
    name: "Computer Components",
    category: "Power & components",
    description: "Computer parts and components for supported equipment.",
    icon: Cpu,
  },
  {
    slug: "hard-drives-and-storage-accessories",
    name: "Hard Drives and Storage Accessories",
    category: "Power & components",
    description: "Storage components and accessories for computer systems.",
    icon: HardDrive,
  },
  {
    slug: "computer-peripherals",
    name: "Computer Peripherals",
    category: "Power & components",
    description: "Peripherals and accessories for everyday computing.",
    icon: Mouse,
  },
  {
    slug: "network-equipment",
    name: "Network Equipment",
    category: "Networking",
    description: "Network equipment for wired and wireless infrastructure.",
    icon: Network,
  },
  {
    slug: "hd-and-ip-cctv-cameras",
    name: "HD and IP CCTV Cameras",
    category: "Security",
    description: "HD and IP surveillance cameras listed in the company profile.",
    icon: Camera,
  },
  {
    slug: "dvr-and-nvr-systems",
    name: "DVR and NVR Systems",
    category: "Security",
    description: "DVR- and NVR-based CCTV system enquiries.",
    icon: Shield,
  },
  {
    slug: "biometric-attendance-systems",
    name: "Biometric Attendance Systems",
    category: "Security",
    description: "Biometric time and attendance equipment enquiries.",
    icon: Fingerprint,
  },
  {
    slug: "access-control-equipment",
    name: "Access Control Equipment",
    category: "Security",
    description: "Access-control equipment for organizational premises.",
    icon: Shield,
  },
  {
    slug: "fire-alarm-and-pa-equipment",
    name: "Fire Alarm and PA Equipment",
    category: "Security",
    description: "Fire alarm detection and public address system equipment.",
    icon: Speaker,
  },
  {
    slug: "interactive-panels",
    name: "Interactive Panels",
    category: "Meeting & learning",
    description: "Interactive panels for learning, presentation and meeting use.",
    icon: PanelTop,
  },
  {
    slug: "video-conferencing-systems",
    name: "Video Conferencing Systems",
    category: "Meeting & learning",
    description: "Conferencing equipment for organizational meeting spaces.",
    icon: Workflow,
  },
  {
    slug: "professional-audio-systems",
    name: "Professional Audio Systems",
    category: "Meeting & learning",
    description: "Professional audio equipment for meeting and collaboration environments.",
    icon: Speaker,
  },
  {
    slug: "video-door-phones",
    name: "Video Door Phones",
    category: "Security",
    description: "Video door-phone equipment included in the company profile.",
    icon: Camera,
  },
  {
    slug: "server-racks",
    name: "Server Racks",
    category: "Data center & power",
    description: "Rack equipment for server-room and data-center environments.",
    icon: Server,
  },
  {
    slug: "power-distribution-units",
    name: "Power Distribution Units (PDUs)",
    category: "Data center & power",
    description: "Power distribution units for infrastructure environments.",
    icon: Battery,
  },
  {
    slug: "data-center-infrastructure",
    name: "Data Center Infrastructure",
    category: "Data center & power",
    description: "Infrastructure categories for server-room and data-center requirements.",
    icon: Server,
  },
  {
    slug: "software-licensing",
    name: "Software Licensing",
    category: "Software & licensing",
    description: "Software licensing enquiries, as listed in the newer company profile.",
    icon: Cpu,
  },
  {
    slug: "tablets",
    name: "Tablet PCs",
    category: "Computing",
    description: "Tablet PCs included in the company profile's product range.",
    icon: Tablet,
  },
];
