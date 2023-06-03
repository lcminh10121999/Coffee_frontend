import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
Banner.propTypes = {};

function Banner(props) {
  const bannerImage = props.value;

  return (
    <div className={`w-full ${props.class}`}>
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "4px",
        }}
        speed={2500}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        //   className={props.classNameBanner}
        className={`w-full lg:h-100  lg:container lg:m-auto xs:m-0 ${props.classNameBannerImage}`}
      >
        {bannerImage.map((item) => {
          return (
            <SwiperSlide className="relative">
              {/* <img src={`../../assets/${item.image}`} alt={item.name} /> */}
              <img
                src={item.image}
                alt={item.name}
                className={`w-full lg:max-h-full xs:max-h-48  object-fill `}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Banner;
