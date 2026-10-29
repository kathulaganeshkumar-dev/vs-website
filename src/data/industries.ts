import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Factory,
  Landmark,
  Truck,
} from "lucide-react";

export type IndustryGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  sectors: string[];
};

export const industries: IndustryGroup[] = [
  {
    title: "Government and Public Sector",
    description:
      "Technology supply and service categories for public organizations and civic environments.",
    icon: Landmark,
    sectors: [
      "State Government Departments",
      "Central Government Departments",
      "Public Sector Undertakings (PSUs)",
      "Educational Institutions",
      "Smart City Projects",
    ],
  },
  {
    title: "Corporate and Private Sectors",
    description:
      "IT products and infrastructure support for offices, healthcare and commercial environments.",
    icon: Building2,
    sectors: [
      "Corporate Offices",
      "Industrial Parks and Special Economic Zones",
      "Hospitals and Healthcare Facilities",
      "IT and Software Companies",
      "Commercial Buildings",
    ],
  },
  {
    title: "Manufacturing and Industrial",
    description:
      "Equipment and service requirements across production and industrial operations.",
    icon: Factory,
    sectors: [
      "Manufacturing Industries",
      "Assembly Units",
      "Bottling Plants",
      "Pharmaceutical Industries",
      "Warehouses and Logistics Centers",
    ],
  },
  {
    title: "Infrastructure and Service Sectors",
    description:
      "Technology, maintenance and operational support for service-focused environments.",
    icon: Truck,
    sectors: [
      "Transport and Logistics Companies",
      "Construction and Infrastructure Companies",
      "Hotels and Hospitality",
      "Clubs and Recreational Centers",
      "Resorts and Convention Centers",
      "Catering and Event Management Companies",
    ],
  },
];
