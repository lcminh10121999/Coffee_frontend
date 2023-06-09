import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import Card from "../components/Card";
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
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../actionSlide/categorySlide";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  LIMIT_LIST_PRODUCT,
  OFFSET_LIST_PRODUCT,
} from "../constant/constantListProduct";
import {
  getListProductSlide,
  handleGetProductSellCount,
  productSlide,
} from "../actionSlide/productSlide";
import { HashLoader } from "react-spinners";
import { ROUTER_URL } from "../data/ruotersUrl";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import { getListOrder, orderSlide } from "../actionSlide/orderSLide";
HomeScreen.propTypes = {};

function HomeScreen(props) {
  const { t } = useTranslation("home");

  const bannerImage = BANNER_ABOUT_US_IMAGE;
  const classNameBanner = "";
  const classNameBannerImage = "rounded-md";
  const classNameBannerTop =
    "lg:p-8 xs:p-4 bg-gradient-to-r from-orange-2 to-orange-1";
  const dispatch = useDispatch();
  const url = ROUTER_URL;
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const loadingCategory = useSelector((state) => state.category.loading);
  const listCategory = useSelector((state) => state.category.listCategory);
  const loadingOrder = useSelector((state) => state.order.loading);

  const [categoryId, setCategoryId] = useState("ALL");
  const limit = LIMIT_LIST_PRODUCT;
  const offsetProduct = useSelector(
    (state) => state.product.productList.offset
  );
  const listProductSellCount = useSelector(
    (state) => state.product.productSellCount.data
  );
  const [offset, setOffset] = useState(offsetProduct);
  const listProductByCategoryId = useSelector(
    (state) => state.product.productList.data
  );
  const loadingListProduct = useSelector(
    (state) => state.product.productList.loading
  );
  const hasMore = useSelector((state) => state.product.productList.hasMore);

  const handleGetListProductByCategoryID = (e, categoryId) => {
    // e.preventdefault();
    setCategoryId(categoryId);
    dispatch(
      getListProductSlide({
        id: categoryId,
        limit: limit,
        page: 1,
        sortColumn: "id",
        sortType: "DESC",
      })
    );
    setOffset(2);
    dispatch(productSlide.actions.setOffSetProduct(2));
  };

  useEffect(() => {
    if (loadingCategory === "idle") {
      dispatch(getCategory());
    }
    if (
      categoryId === "ALL" &&
      listProductByCategoryId.length === 0 &&
      !loadingListProduct
    ) {
      dispatch(
        getListProductSlide({
          id: "ALL",
          limit: limit,
          page: 1,
          sortColumn: "id",
          sortType: "DESC",
        })
      );
      setOffset(offset + 1);
      dispatch(productSlide.actions.setOffSetProduct(offset + 1));
    }
    if (
      categoryId === "ALL" &&
      listProductByCategoryId.length === 0 &&
      !loadingListProduct
    ) {
      dispatch(
        getListProductSlide({
          id: "ALL",
          limit: limit,
          page: 1,
          sortColumn: "id",
          sortType: "DESC",
        })
      );
      setOffset(offset + 1);
      dispatch(productSlide.actions.setOffSetProduct(offset + 1));
    }
    if (
      categoryId === "ALL" &&
      listProductByCategoryId.length > limit &&
      !loadingListProduct
    ) {
      dispatch(
        getListProductSlide({
          id: "ALL",
          limit: limit,
          page: 1,
          sortColumn: "id",
          sortType: "DESC",
        })
      );
      setOffset(2);
      dispatch(productSlide.actions.setOffSetProduct(2));
    }
  }, [loadingCategory]);
  useEffect(() => {
    if (loadingOrder === "success") {
      toast.success("Đặc hàng thành công!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(handleGetProductSellCount());
      dispatch(orderSlide.actions.setLoading("idle"));
      let limit = 4;
      let date = new Date();
      dispatch(
        getListOrder({
          id: userLogin.id,
          limit: limit,
          page: 1,
          keySearch: "",
          startDate: userLogin.createdAt,
          endDate: date,
        })
      );
      dispatch(orderSlide.actions.setOffsetHistoryOrder(2));
    }
  }, [loadingOrder]);

  useEffect(() => {
    dispatch(handleGetProductSellCount());
  }, []);
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
            {t("best-seller")}
          </h1>
          {/* list card */}
          <div className="flex flex-wrap w-full mt-6">
            <div className=" lg:w-2/4 xs:w-full p-4">
              <img
                src="https://file.hstatic.net/1000075078/file/banner_app_73261cd5c5e04d5284928a7cb1a052a9.jpg"
                alt=""
                className=" shadow-image rounded-md "
              />
            </div>
            {listProductSellCount?.map((item) => {
              return (
                <div className="lg:w-1/4 xs:w-1/2 ">
                  <Card
                    class_name=" p-4"
                    class_name_top="shadow-image"
                    class_name_border="lg:h-96"
                    class_name_name_product="font-semibold text-md"
                    data={item}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* Us Product */}
        <div className="mb-10 mt-20 flex justify-center flex-wrap ">
          <h1 className="font-bold w-full text-center text-3xl text-primary-500">
            {t("our-products")}
          </h1>
          {/* list category */}
          <div className="flex flex-wrap w-full justify-center">
            <Swiper
              // slidesPerView={5}
              modules={[Autoplay]}
              // loop={true}
              speed={2000}
              scrollbar={true}
              // slidesPerGroup={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                waitForTransition: true,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={10}
              // Responsive breakpoints
              breakpoints={{
                1024: {
                  slidesPerView: 5,
                  spaceBetweenSlides: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetweenSlides: 10,
                },
              }}
              className="mySwiper lg:w-6/12 xs:w-10/12 flex justify-center"
            >
              <SwiperSlide
                // className=" lg:w-auto xs:w-1/2"
                style={{ margin: "0px" }}
              >
                <CardCategory
                  handleGetListProductByCategoryID={
                    handleGetListProductByCategoryID
                  }
                  data={{
                    name: "Tất cả",
                    id: "ALL",
                    image:
                      "https://minio.thecoffeehouse.com/image/admin/1677724557_thuc-uong-khac.png",
                  }}
                  itemSelected={categoryId}
                />
              </SwiperSlide>
              {listCategory.length !== 0
                ? listCategory.map((item, index) => {
                    return (
                      <SwiperSlide style={{ margin: "0px" }}>
                        <CardCategory
                          handleGetListProductByCategoryID={
                            handleGetListProductByCategoryID
                          }
                          data={item}
                          itemSelected={categoryId}
                        />
                      </SwiperSlide>
                    );
                  })
                : ""}
            </Swiper>
          </div>
          {/* list card */}
          <div className="mt-5 w-full flex flex-wrap">
            {listProductByCategoryId.length !== 0 &&
              listProductByCategoryId.map((item, index) => {
                return (
                  <>
                    <div className="lg:w-1/6 xs:w-1/2">
                      <Card
                        data={item}
                        class_name=" p-4 shadow-image rounded-md"
                        class_name_border="p-4"
                        class_name_name_product="text-sm"
                      />
                    </div>
                  </>
                );
              })}
            <div className="w-full mt-6">
              <Link
                to={url.product}
                className="flex justify-center items-center text-orange-1 hover:text-orange-2"
              >
                <p className="mr-2"> {t("see-more")}</p>
                <BsArrowRight />
              </Link>
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
                {t("banner-second-detail")}
              </p>
              <div className="my-4 flex lg:justify-start xs:justify-center">
                <ButtonProject
                  className="text-white font-bold py-2 px-4 rounded-lg bg-orange-1 hover:bg-orange-2 flex justify-center items-center"
                  text={t("banner-second-see-more")}
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
            {t("new")}
          </h1>
          {/* list tin tuc */}
          <div className="flex flex-wrap">
            <div className="lg:w-1/3 xs:w-full">
              <CardInformation
                cartImage="https://file.hstatic.net/1000075078/article/dscf6292_d784e8350a0942c1965127ecf57587ee_grande.jpg"
                flexCLass="p-6"
                shadow="shadow-image"
              />
            </div>
            <div className="lg:w-1/3 xs:w-full">
              <CardInformation
                cartImage="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_7_db8def55acbf426ea725921529f6f01e_grande.jpg"
                flexCLass="p-6"
                shadow="shadow-image"
              />
            </div>
            <div className="lg:w-1/3 xs:w-full">
              <CardInformation
                cartImage="https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg"
                flexCLass="p-6"
                shadow="shadow-image"
              />
            </div>

            <div className="w-full mt-6">
              <Link
                to={`/news`}
                className="flex justify-center items-center text-orange-1 hover:text-orange-2"
              >
                <p className="mr-2">{t("see-more")}</p>
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
