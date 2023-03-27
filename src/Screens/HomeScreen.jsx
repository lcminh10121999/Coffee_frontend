import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import Card from "../components/Card";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../../src/styles/HomeScreen.css";
import CardCategory from "../components/CardCategory";
import Banner from "../components/Banner";
import { BANNER_ABOUT_US_IMAGE, BANNER_IMAGE } from "../data/bannerIgame";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import ButtonProject from "../common";
import { BsArrowRight } from "react-icons/bs";
import CardInformation from "../components/CardInformation";
import { Link } from "react-router-dom";
HomeScreen.propTypes = {};

function HomeScreen(props) {
  const bannerImage = BANNER_ABOUT_US_IMAGE;
  const classNameBanner = "";
  const classNameBannerImage = "rounded-md";
  const classNameBannerTop =
    "lg:p-8 xs:p-4 bg-gradient-to-r from-orange-2 to-orange-1";

  return (
    <Layout>
      <Banner
        value={BANNER_IMAGE}
        class={classNameBannerTop}
        classNameBannerImage={"xs:h-fit"}
      />
      <div
        className="lg:container w-full h-auto lg:m-auto  text-main
      "
      >
        {/* top sale */}
        <div className="mt-8 mb-4 flex justify-center flex-wrap ">
          {/* title */}
          <h1 className="font-bold w-full text-center text-3xl text-primary-500">
            Sản Phẩm Bán Chạy
          </h1>
          {/* list card */}
          <div className="flex flex-wrap w-full mt-6">
            <div className=" lg:w-2/4 xs:w-full p-4">
              <img
                src="https://file.hstatic.net/1000075078/file/highlight_cc022d45647d43e9bfbe1248b4573788.jpg"
                alt=""
                className=" shadow-image rounded-md "
              />
            </div>
            <div className="lg:w-1/4 xs:w-1/2 ">
              <Card
                class_name=" p-4"
                class_name_top="shadow-image"
                class_name_border="lg:h-96"
                class_name_name_product="font-semibold text-md"
              />
            </div>
            <div className="lg:w-1/4 xs:w-1/2 ">
              <Card
                class_name=" p-4"
                class_name_top="shadow-image"
                class_name_border="lg:h-96"
                class_name_name_product="font-semibold text-md"
              />
            </div>
            <div className="lg:w-1/4 xs:w-1/2 ">
              <Card
                class_name=" p-4"
                class_name_top="shadow-image"
                class_name_border="lg:h-96"
                class_name_name_product="font-semibold text-md"
              />
            </div>
            <div className="lg:w-1/4 xs:w-1/2 ">
              <Card
                class_name=" p-4"
                class_name_top="shadow-image"
                class_name_border="lg:h-96"
                class_name_name_product="font-semibold text-md"
              />
            </div>
            <div className="lg:w-1/4 xs:w-1/2 ">
              <Card
                class_name="p-4"
                class_name_border="lg:h-96"
                class_name_top="shadow-image"
                class_name_name_product="font-semibold text-md"
              />
            </div>
            <div className="lg:w-1/4 xs:w-1/2 ">
              <Card
                class_name=" p-4"
                class_name_top="shadow-image"
                class_name_border="lg:h-96"
                class_name_name_product="font-semibold text-md"
              />
            </div>
          </div>
        </div>
        {/* Us Product */}
        <div className="mb-10 mt-20 flex justify-center flex-wrap ">
          <h1 className="font-bold w-full text-center text-3xl text-primary-500">
            Sản phẩm Từ Nhà
          </h1>
          {/* list category */}
          <div className="flex flex-wrap w-full justify-center">
            <div className="lg:w-1/12 xs:w-1/4">
              <CardCategory />
            </div>
            <div className="lg:w-1/12 xs:w-1/4">
              <CardCategory />
            </div>
            <div className="lg:w-1/12 xs:w-1/4">
              <CardCategory />
            </div>
            <div className="lg:w-1/12 xs:w-1/4">
              <CardCategory />
            </div>
            <div className="lg:w-1/12 xs:w-1/4">
              <CardCategory />
            </div>
            <div className="lg:w-1/12 xs:w-1/4">
              <CardCategory />
            </div>
          </div>
          {/* list card */}
          <div className="mt-5 flex flex-wrap">
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 shadow-image rounded-md"
                class_name_border="p-4 lg:h-auto"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="w-full mt-6">
              <a
                href=""
                className="flex justify-center items-center text-orange-1 hover:text-orange-2"
              >
                <p className="mr-2"> Xem Thêm</p>
                <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
        {/* about us */}
        <div className="about-us_home w-full flex py-10 flex-wrap">
          {/* content */}
          <div className="lg:w-1/3 xs:w-full  flex justify-center items-center">
            <div className="lg:w-2/3 xs:w-full flex flex-col ">
              <h3 className="font-semibold text-2xl text-orange-1 lg:text-left xs:text-center">
                SIGNATURE <br />
                By The Coffee House
              </h3>
              <p className="text-sm mt-2 lg:text-left xs:text-center">
                Nơi cuộc hẹn tròn đầy với Cà phê đặc sản, Món ăn đa bản sắc và
                Không gian cảm hứng.
              </p>
              <div className="my-4 flex lg:justify-start xs:justify-center">
                <ButtonProject
                  className="text-white font-bold py-2 px-4 rounded-lg bg-orange-1 hover:bg-orange-2 flex justify-center items-center"
                  text="Tìm Hiểu Thêm"
                  icon={<BsArrowRight />}
                />
              </div>
            </div>
          </div>
          {/* banner */}
          <div className="lg:w-2/3 xs:w-full">
            {/* <div className="w-full lg:p-8 xs:p-4 bg-gradient-to-r from-orange-2 to-orange-1">
              <Swiper
                direction="horizontal"
                slidesPerView={1}
                loop={true}
                speed={1000}
                modules={[Autoplay]}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                //   className={props.classNameBanner}
                className="bg-star w-full lg:h-100 xs:h-36 lg:container lg:m-auto xs:m-0"
              >
                {bannerImage.map((item) => {
                  return (
                    <SwiperSlide className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full lg:max-h-full xs:max-h-36 object-fill"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div> */}
            <Banner
              value={BANNER_ABOUT_US_IMAGE}
              class={classNameBanner}
              classNameBannerImage={"rounded-md xs:h-48"}
            />
          </div>
        </div>

        {/* tin tuc */}
        <div className="w-full my-8">
          <h1 className="font-bold mb-4 w-full text-center text-3xl text-primary-500">
            Tin Tức
          </h1>
          {/* list tin tuc */}
          <div className="flex flex-wrap">
            <div className="lg:w-1/3 xs:w-full">
              <CardInformation flexCLass="p-6" shadow="shadow-image" />
            </div>
            <div className="lg:w-1/3 xs:w-full">
              <CardInformation flexCLass="p-6" shadow="shadow-image" />
            </div>
            <div className="lg:w-1/3 xs:w-full">
              <CardInformation flexCLass="p-6" shadow="shadow-image" />
            </div>

            <div className="w-full mt-6">
              <Link
                to={`/news`}
                className="flex justify-center items-center text-orange-1 hover:text-orange-2"
              >
                <p className="mr-2"> Xem Thêm</p>
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomeScreen;
