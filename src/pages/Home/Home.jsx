import AboutUs from "@/components/about-us/AboutUs";
import Hero from "@/components/hero/Hero";
import Services from "@/components/our-services/Services";
import SEO from "@/components/seo/SEO";
import Testimonials from "@/components/testimonials/Testimonials";
import { useRef } from "react";
import { useSwiper } from "swiper/react";

function Home() {
  const swiper = useSwiper();
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);
  return (
    <div>
      <SEO title={"Home"} />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
    </div>
  );
}

export default Home;
