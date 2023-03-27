import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

Banner.propTypes = {};

function Banner(props) {
  const bannerImage = props.value;

  return (
    <div className={`w-full ${props.class}`}>
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
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
