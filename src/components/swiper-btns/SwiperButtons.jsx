import { forwardRef } from "react";
import { useSwiper } from "swiper/react";
import { Button } from "../ui/button";
const SwiperButtons = forwardRef(function SwiperButtons({ nextRef, prevRef }) {
  const swiper = useSwiper();
  return (
    <div className="hidden">
      <Button ref={prevRef} onClick={() => swiper.slidePrev()}>
        Prev
      </Button>
      <Button ref={nextRef} onClick={() => swiper.slideNext()}>
        Next
      </Button>
    </div>
  );
});

export default SwiperButtons;
