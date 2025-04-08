import Navbar from "../../components/Navbar";
import PlanHero from "../../components/PlanHero";
import PlanContainer2 from "../../components/planContainer2";
import PlanContainer3 from "../../components/planContainer3";
import PlanContainer4 from "../../components/planContainer4";
// import PlanContainer4 from "../../components/planContainer4";
// import PlanContainer4 from "../../components/planContainer4";
// import PlanContainer4 from "../../components/planContainer4";
// import PlanContainer4 from "../../components/planContainer4";
import Footer from "../../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <PlanHero />
      <PlanContainer2 />
      <PlanContainer3 />
      <Footer />

      {/* <PlanContainer5 />
      <PlanContainer4 />
      <PlanContainer4 />
      <PlanContainer4 /> */}
    </>
  );
}
