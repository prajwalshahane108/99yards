"use client";
import "../../globals.css";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import PlanContainer2 from "../../components/planContainer2";
import PlanContainer3 from "../../components/planContainer3";
import Footer from "../../components/Footer";

export default function LandingPage() {
  // Shared state for billing cycle
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Handler function to update billing cycle
  const handleBillingChange = (newCycle) => {
    setBillingCycle(newCycle);
  };

  return (
    <>
      <Navbar />
      <PlanContainer2 
        billingCycle={billingCycle} 
        onBillingChange={handleBillingChange} 
      />
      <PlanContainer3 
        billingCycle={billingCycle} 
      />
      <Footer />
    </>
  );
}