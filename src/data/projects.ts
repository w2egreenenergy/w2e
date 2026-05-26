/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShowcaseProject } from "../types";

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "proj_punjab",
    name: "Mega Paddy Straw Bio-CNG Plant",
    location: "Sangrur, Punjab, India",
    capacity: "45 Tons/Day Bio-CNG Capacity",
    feedstock: "Agricultural Rice Paddy Straw & Cattle Slurry",
    energyOutput: "18,000 kg Transport Fuel / Day",
    co2Savings: "54,000 Tons/Year Carbon Reduction",
    status: "Operational",
    featured: true,
    imageAlt: "Futuristic biogas dome refinery"
  },
  {
    id: "proj_maharashtra",
    name: "Sugar Mill Filter Cake Project",
    location: "Kolhapur, Maharashtra, India",
    capacity: "25 Tons/Day Bio-CNG Capacity",
    feedstock: "Press Mud (Filter Cake) & Distillery Spent Wash",
    energyOutput: "10,000 kg Fuel + 80 Tons Organic Fertilizer / Day",
    co2Savings: "32,000 Tons/Year Carbon Reduction",
    status: "Operational",
    featured: true,
    imageAlt: "Stainless steel gas purification columns"
  },
  {
    id: "proj_haryana",
    name: "Integrated Crop Residue Bioenergy Hub",
    location: "Karnal, Haryana, India",
    capacity: "35 Tons/Day Capacity",
    feedstock: "Wheat Straw, Corn Stalks, and Poultry Droppings",
    energyOutput: "14,000 kg Bio-CNG / Day",
    co2Savings: "44,500 Tons/Year Carbon Reduction",
    status: "Commissioning",
    featured: false,
    imageAlt: "Advanced pre-treatment hydrolysis skids"
  },
  {
    id: "proj_gujarat",
    name: "Municipal Organic Waste Energy Yard",
    location: "Ahmedabad, Gujarat, India",
    capacity: "50 Tons/Day Solid Waste Digest",
    feedstock: "Segregated Municipal Solid Liquid Organic Waste",
    energyOutput: "2.5 Megawatts continuous clean power grid sync",
    co2Savings: "61,000 Tons/Year Carbon Reduction",
    status: "Under Construction",
    featured: false,
    imageAlt: "Central municipal waste anaerobic digestion yards"
  }
];
