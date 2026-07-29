"use client";

import { motion } from "framer-motion";
import { PieChart, BarChart3 } from "lucide-react";

import { RestaurantsCafes } from "./illustrations/RestaurantsCafes";
import { HotelsHospitality } from "./illustrations/HotelsHospitality";
import { HealthcareWellness } from "./illustrations/HealthcareWellness";
import { DentalMedicalClinics } from "./illustrations/DentalMedicalClinics";
import { RetailEcommerce } from "./illustrations/RetailEcommerce";
import { EducationTraining } from "./illustrations/EducationTraining";
import { RealEstateProperty } from "./illustrations/RealEstateProperty";
import { ConstructionTrades } from "./illustrations/ConstructionTrades";
import { HomeServices } from "./illustrations/HomeServices";
import { ProfessionalServices } from "./illustrations/ProfessionalServices";
import { FinanceAccounting } from "./illustrations/FinanceAccounting";
import { LegalServices } from "./illustrations/LegalServices";
import { BeautyPersonalCare } from "./illustrations/BeautyPersonalCare";
import { FitnessSports } from "./illustrations/FitnessSports";
import { Automotive } from "./illustrations/Automotive";
import { TravelTourism } from "./illustrations/TravelTourism";
import { EventsEntertainment } from "./illustrations/EventsEntertainment";
import { NonprofitsCommunity } from "./illustrations/NonprofitsCommunity";
import { ManufacturingWholesale } from "./illustrations/ManufacturingWholesale";
import { LogisticsTransport } from "./illustrations/LogisticsTransport";
import { TechnologySaas } from "./illustrations/TechnologySaas";
import { Startups } from "./illustrations/Startups";
import { AgricultureFoodProduction } from "./illustrations/AgricultureFoodProduction";
import { FranchisesMultiLocation } from "./illustrations/FranchisesMultiLocation";

type Props = {
  slug: string;
};

// Common Card Style for generic fallback
const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

export function IndustryIllustration({ slug }: Props) {
  const renderMockup = () => {
    switch (slug) {
      case "restaurants-cafes":
        return <RestaurantsCafes />;
      case "hotels-hospitality":
        return <HotelsHospitality />;
      case "healthcare-wellness":
        return <HealthcareWellness />;
      case "dental-medical-clinics":
        return <DentalMedicalClinics />;
      case "retail-ecommerce":
        return <RetailEcommerce />;
      case "education-training":
        return <EducationTraining />;
      case "real-estate-property":
        return <RealEstateProperty />;
      case "construction-trades":
        return <ConstructionTrades />;
      case "home-services":
        return <HomeServices />;
      case "professional-services":
        return <ProfessionalServices />;
      case "finance-accounting":
        return <FinanceAccounting />;
      case "legal-services":
        return <LegalServices />;
      case "beauty-personal-care":
        return <BeautyPersonalCare />;
      case "fitness-sports":
        return <FitnessSports />;
      case "automotive":
        return <Automotive />;
      case "travel-tourism":
        return <TravelTourism />;
      case "events-entertainment":
        return <EventsEntertainment />;
      case "nonprofits-community":
        return <NonprofitsCommunity />;
      case "manufacturing-wholesale":
        return <ManufacturingWholesale />;
      case "logistics-transport":
        return <LogisticsTransport />;
      case "technology-saas":
        return <TechnologySaas />;
      case "startups":
        return <Startups />;
      case "agriculture-food-production":
        return <AgricultureFoodProduction />;
      case "e-learning-creators":
      case "franchises-multi-location":
        return <FranchisesMultiLocation />;

      default:
        // Generic fallback dashboard
        return (
          <div className="relative flex h-full w-full items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={cardClass}
            >
              <div className="flex gap-4">
                <PieChart className="h-10 w-10 text-[#4B5563]" />
                <BarChart3 className="h-10 w-10 text-[#4B5563]" />
              </div>
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-[2rem] border border-foreground/10 bg-gradient-to-br from-[oklch(0.98_0.005_90)] to-[oklch(0.94_0.02_220)] shadow-inner">
      {/* Background Grid Pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]" aria-hidden="true">
        <defs>
          <pattern id="hero-pattern-illustration" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#111827" strokeWidth="0.5"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-pattern-illustration)"></rect>
      </svg>
      
      {/* The Dynamic Mockup */}
      {renderMockup()}
    </div>
  );
}
