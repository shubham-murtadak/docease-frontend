import slide2 from "@/assets/slides-2.jpg";
import slide1 from "@/assets/slides-1.jpg";
import slide3 from "@/assets/slides-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import "swiper/css/effect-fade";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import Slider from "./Slider";

const Sliders = () => {
  return (
    <Swiper
      effect="Creative"
      navigation={true}
      modules={[Navigation, Autoplay, EffectCreative]}
      className="mySwiper"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      scrollbar={{
        draggable: true,
      }}
    >
      <SwiperSlide className="!w-full">
        <Slider
          title={"Chat with Your Documents, "}
          bold={"Get Instant Insights"}
          desc={
            "Easily upload PDFs, Word files, or PowerPoint presentations and get quick, accurate answers to your queries."
          }
          btnText={"Start Chatting"}
          btnIcon={"💬"}
          imgUrl={slide2}
        />
      </SwiperSlide>
      <SwiperSlide className="!w-full">
        <Slider
          title={"Optimized for Marathi Documents, "}
          bold={"Accurate Understanding"}
          desc={
            "Seamlessly interact with Marathi documents and extract precise insights tailored to your needs."
          }
          btnText={"Explore Now"}
          imgUrl={slide1}
          btnIcon={"🇮🇳"}
        />
      </SwiperSlide>
      <SwiperSlide className="!w-full">
        <Slider
          title={"Save Time, "}
          bold={"Optimize Your Reading"}
          desc={
            "Our platform saves time by summarizing lengthy documents, helping you focus on key insights instantly."
          }
          btnText={"Get Started"}
          imgUrl={slide3}
          btnIcon={"⏱️"}
        />
      </SwiperSlide>

    </Swiper>
  );
};

export default Sliders;
