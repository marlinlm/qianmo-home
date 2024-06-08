import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/zoom";
import {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
  Parallax,
  Zoom,
} from "swiper/modules";
SwiperCore.use([
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  Parallax,

  Zoom,
]);

export const sliderProps = {
  hero1: {
    slidesPerView: 1,
    effect: "fade",
    parallax: true,
    autoplay: true,
    speed: 1400,
    pagination: {
      el: ".owl-nav",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<div class="owl-prev ' + className + '">' + (index + 1) + "</div>"
        );
      },
    },
  },
  hero2: {
    slidesPerView: 1,
    autoplay: true,
    speed: 1400,
  },
  testimonial: {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: true,
    speed: 1400,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  },
  testimonial2: {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: true,
    speed: 1400,
    navigation: {
      nextEl: ".testimonial-2-next",
      prevEl: ".testimonial-2-prev",
    },
  },
  brand_list: {
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: true,
    speed: 1400,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  },
};
