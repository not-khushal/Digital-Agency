import React, { useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";


// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/BrandLogo/BrandLogo";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonials/Testimonials";
import BlogsComp from "./components/Blogs/BlogsComp";
import Footer from "./components/Footer/Footer";




const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandsLogo />
      <Services />
      <Testimonial />
      <BlogsComp />
      <Footer />
    </div>
  );
};

export default App;