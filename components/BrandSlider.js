"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const BrandSlider = ({ dark }) => {
  return (
    <div className={`brand-area ${dark ? "dark" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="brand_list">
            <Swiper {...sliderProps.brand_list}>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand1.svg" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand2.svg" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand3.svg" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand4.svg" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand5.svg" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand6.svg" alt="image" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandSlider;
