import { Routes, Route } from "react-router-dom";
import Banner from "../component/Banner"
import GrowthBusiness from "../component/GrowthBusiness";
import WhyChooseUs from "../component/WhyChooseUs";
import ServiceOfferings from "../component/ServiceOfferings";
// import ClientSuccessStories from "../component/ClientSuccessStories";
import GetStartedSection from "../component/GetStartedSection";
import BusinessGrowth from "../component/BusinessGrowth";
import Empowering from "../component/Empowering";
import Contact from "../pages/Contact ";
import BusinessPotential from "../component/BusinessPotential";
import AboutUs from "./Aboutus";
import BlogPage from "./Blogs";

function HomePage() {
  return (
    <>
      <Banner />
      <GrowthBusiness />
      <BusinessPotential/>
      <WhyChooseUs />
      <ServiceOfferings />
      {/* <ClientSuccessStories/> */}
      <GetStartedSection />
      <BusinessGrowth />
      <Empowering/>
      <BlogPage />
      <AboutUs/>
      <Contact />
    </>
  );
}

export default HomePage;   // ✅ added export
