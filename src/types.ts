/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Solution {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  technicalSpecs: string[];
  benefits: string[];
  systemParameters: { label: string; value: string }[];
}

export interface Metric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
  iconName: string;
}

export interface ShowcaseProject {
  id: string;
  name: string;
  location: string;
  capacity: string;
  feedstock: string;
  energyOutput: string;
  co2Savings: string;
  status: "Operational" | "Under Construction" | "Commissioning";
  featured: boolean;
  imageAlt: string;
}

export interface IndustryServed {
  id: string;
  title: string;
  description: string;
  iconName: string;
  potentialFeedstock: string;
  byproductValue: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export interface CalculatorInputs {
  feedstockType: string;
  wasteQuantity: number; // tons/day
  landAvailable: number; // acres
  automationLevel: "Standard" | "Smart Enterprise" | "Autonomous AI";
}

export interface CalculatorOutputs {
  bioCngProd: number; // kg/day
  organicFertilizer: number; // tons/day
  co2Offset: number; // tons/year
  estimatedRevenue: number; // USD/year or INR equivalent (we'll format cleanly in presentation)
  capexEstimation: number; // Million INR
  roiTimeline: number; // years
}
