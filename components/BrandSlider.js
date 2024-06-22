"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Path from "@/layouts/Path";
const BrandSlider = ({ dark }) => {
  return (
    <div className={`brand-area ${dark ? "dark" : ""}`}>

      <div className="container">
          <div className="brand-area-title">
            <h3>合作伙伴</h3>
          </div>
        <div className="row">
          <div className="brand_list col-lg-12">
            <Swiper {...sliderProps.brand_list}>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src={Path("assets/images/brand/icon_hkust.png")} alt="image" />
                  <p></p>
                  <p>香港科技大学（广州）</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src={Path("assets/images/brand/icon_baidu_4.png")} alt="image" />
                  <p></p>
                  <p>百度研究院</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src={Path("assets/images/brand/icon_didi2.png")} alt="image" />
                  <p></p>
                  <p>滴滴出行</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src={Path("assets/images/brand/icon_aliyun.png")} alt="image" />
                  <p></p>
                  <p>阿里云</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 ">
                <div className="brand-thumb">
                  <img src={Path("assets/images/brand/icon_baidu.png")} alt="image" />
                  <p></p>
                  <p>百度地图</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 ">
                <div className="brand-thumb">
                  <img src={Path("assets/images/brand/icon_baidu_cloud.png")} alt="image" />
                  <p></p>
                  <p>百度云</p>
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
