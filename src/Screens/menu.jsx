import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import CardCategory from "../components/CardCategory";
import Card from "../components/Card";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper";
import CardInformation from "../components/CardInformation";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../actionSlide/categorySlide";
import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { getListProductSlide, productSlide } from "../actionSlide/productSlide";
import {
  LIMIT_LIST_PRODUCT,
  OFFSET_LIST_PRODUCT,
} from "../constant/constantListProduct";
import { HashLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";

Menu.propTypes = {};

function Menu(props) {
  const dispatch = useDispatch();
  const loadingCategory = useSelector((state) => state.category.loading);
  const listCategory = useSelector((state) => state.category.listCategory);
  const [categoryId, setCategoryId] = useState("ALL");
  const limit = LIMIT_LIST_PRODUCT;
  const offsetProduct = useSelector(
    (state) => state.product.productList.offset
  );
  const [offset, setOffset] = useState(offsetProduct);
  const listProductByCategoryId = useSelector(
    (state) => state.product.productList.data
  );

  const loadingListProduct = useSelector(
    (state) => state.product.productList.loading
  );

  const hasMore = useSelector((state) => state.product.productList.hasMore);
  console.log("offsetProduct", offsetProduct, "offset", offset);
  const handleGetListProductByCategoryID = (e, categoryId) => {
    // e.preventdefault();
    setCategoryId(categoryId);
    dispatch(
      getListProductSlide({
        id: categoryId,
        limit: limit,
        page: 1,
      })
    );
    setOffset(2);
    dispatch(productSlide.actions.setOffSetProduct(2));
  };

  const handleLoadMoreProduct = () => {
    if (hasMore) {
      dispatch(
        getListProductSlide({
          id: categoryId,
          limit: limit,
          page: offset,
          more: true,
        })
      );
      setOffset(offset + 1);
      dispatch(productSlide.actions.setOffSetProduct(offset + 1));
    }
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
        })
      );
      setOffset(offset + 1);
      dispatch(productSlide.actions.setOffSetProduct(offset + 1));
    }
  }, [loadingCategory]);

  return (
    <Layout>
      <div className="w-full lg:container lg:m-auto text-black">
        {/* Us Product */}
        <div className="mb-10 lg:mt-10 xs:mt-5 flex justify-center flex-wrap ">
          <h1 className="font-bold w-full text-center text-3xl text-primary-500">
            Sản phẩm Từ Nhà
          </h1>
          {/* list category */}
          <div className="flex flex-wrap w-full justify-center">
            <Swiper
              slidesPerView={5}
              modules={[Autoplay]}
              // loop={true}
              speed={2000}
              scrollbar={true}
              slidesPerGroup={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                waitForTransition: true,
                pauseOnMouseEnter: true,
              }}
              className="mySwiper w-6/12 flex justify-center"
            >
              <SwiperSlide style={{ margin: "0px" }}>
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
                        />
                      </SwiperSlide>
                    );
                  })
                : ""}
            </Swiper>
          </div>
          {/* list card */}

          <InfiniteScroll
            dataLength={listProductByCategoryId.length}
            next={handleLoadMoreProduct}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            className="w-full"
          >
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
              {!loadingListProduct && hasMore && (
                <div className="py-20 w-full h-full flex justify-center items-center">
                  <HashLoader color="#fa8c16" size={70} />
                </div>
              )}

              {/* <div className="w-full mt-6">
                <a
                  href=""
                  className="flex justify-center items-center text-orange-1 hover:text-orange-2"
                >
                  <p className="mr-2"> Xem Thêm</p>
                  <BsArrowRight />
                </a>
              </div> */}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
