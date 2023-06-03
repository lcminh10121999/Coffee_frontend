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
import { useTranslation } from "react-i18next";

Menu.propTypes = {};

function Menu(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation("home");
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
  const loadingListProductChangeCategoryId = useSelector(
    (state) => state.product.productList.loadingChangeCategory
  );

  const [sort, setSort] = useState({
    column: "id",
    type: "DESC",
  });
  const hasMore = useSelector((state) => state.product.productList.hasMore);
  console.log("offsetProduct", offsetProduct, "offset", offset);
  const handleGetListProductByCategoryID = (e, categoryId) => {
    // e.preventdefault();
    setCategoryId(categoryId);
    dispatch(
      getListProductSlide({
        id: categoryId,
        limit: limit,
        sortColumn: sort.column,
        sortType: sort.type,
        page: 1,
      })
    );
    setOffset(2);
    dispatch(productSlide.actions.setOffSetProduct(2));
    dispatch(productSlide.actions.setGetProductBiCategoryIdLoading(true));
  };

  let handleOnChangeSort = (e) => {
    let obj = JSON.parse(e.target.value);
    // let obj2 = JSON.parse(JSON.stringify(e.target.value));
    console.log("e.target.value", obj);
    setSort(obj);

    dispatch(
      getListProductSlide({
        id: categoryId,
        limit: limit,
        page: 1,
        sortColumn: obj.column,
        sortType: obj.type,
      })
    );
    setOffset(2);
    dispatch(productSlide.actions.setOffSetProduct(2));
  };
  console.log("sort", sort);
  const handleLoadMoreProduct = () => {
    if (hasMore) {
      dispatch(
        getListProductSlide({
          id: categoryId,
          limit: limit,
          page: offset,
          sortColumn: sort.column,
          sortType: sort.type,
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
          sortColumn: sort.column,
          sortType: sort.type,
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
              slidesPerGroup={1}
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
          <div className="w-full flex justify-center items-center gap-1">
            <p className=" text-lg font-semibold">Danh mục:</p>
            <p className=" text-primary-500 text-lg">
              {categoryId === "ALL"
                ? " Tất cả sản phẩm"
                : listCategory.map((item) => {
                    if (item.id === categoryId) {
                      console.log("item.name", item.name);
                      return item.name;
                    }
                  })}
            </p>
          </div>
          <div className="w-full flex justify-end px-4">
            <select
              name="sort"
              className="change-arrow border w-fit h-8 border-gray-400 rounded pl-3 pr-5 appearance-none"
              onChange={handleOnChangeSort}
              id=""
            >
              <option value={JSON.stringify({ column: "id", type: "DESC" })}>
                Sản phẩm mới
              </option>
              <option value={JSON.stringify({ column: "id", type: "ASC" })}>
                Sản phẩm cũ
              </option>
              <option value={JSON.stringify({ column: "price", type: "ASC" })}>
                Giá tăng dần
              </option>
              <option value={JSON.stringify({ column: "price", type: "DESC" })}>
                Giá giảm dần
              </option>
              <option
                value={JSON.stringify({ column: "count_sell", type: "DESC" })}
              >
                Sản phẩm bán chạy
              </option>
            </select>
          </div>

          <InfiniteScroll
            dataLength={listProductByCategoryId.length}
            next={handleLoadMoreProduct}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            className="w-full"
          >
            <div className="mt-5 w-full flex flex-wrap">
              {loadingListProductChangeCategoryId ? (
                <div className="py-20 w-full h-full flex justify-center items-center">
                  <HashLoader color="#fa8c16" size={70} />
                </div>
              ) : listProductByCategoryId.length !== 0 ? (
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
                })
              ) : (
                <div className="py-20 w-full h-full flex justify-center items-center">
                  <HashLoader color="#fa8c16" size={70} />
                </div>
              )}
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
