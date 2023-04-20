import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import { CgGlassAlt } from "react-icons/cg";
import { BsCart2, BsTranslate, BsPlusCircle } from "react-icons/bs";
import { HiPlus, HiMinus } from "react-icons/hi";
import { MdEditNote } from "react-icons/md";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../actionSlide/productSlide";

ProductDetail.propTypes = {};

function ProductDetail(props) {
  const location = useLocation();
  const id = location.state.id;
  const dispatch = useDispatch();
  const productDetail = useSelector(
    (state) => state.product.productDetail.data
  );
  const loading = useSelector((state) => state.product.productDetail.loading);
  const [checkedItem, setCheckedItem] = useState({
    size: [],
    topping: [],
  });
  const [count, setCount] = useState(1);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
      console.log("abc");
    } else {
      console.log("cba");
    }
  }, [id]);

  const handleOnchangeCheckbox = (e, index, data) => {
    const checked = e.target.checked;
    const name = e.target.name;
    const oldArr = checkedItem[name];
    if (checked && name === "size") {
      const newArr = [data];
      setCheckedItem({
        ...checkedItem,
        [name]: newArr,
      });
    } else if (checked && name !== "size") {
      const newArr = [...oldArr, data];
      setCheckedItem({
        ...checkedItem,
        [name]: newArr,
      });
    } else {
      const newArr = oldArr.filter((item) => item.id !== data.id);

      setCheckedItem({
        ...checkedItem,
        [name]: newArr,
      });
    }
  };

  const handleAddItemToCart = () => {
    if (checkedItem.size.length === 0) {
      console.log("err");
    } else {
      const data = {
        product_id: productDetail.id,
        quantity: count,
        note: note,
        size: checkedItem.size,
        topping: checkedItem.topping,
      };
      console.log(data);
    }
  };
  return (
    <Layout>
      {!loading && Object.keys(productDetail).length !== 0 ? (
        <div className="flex flex-wrap lg:flex-row xs:flex-col lg:container lg:mx-auto my-10 xs:mx-5 text-black">
          <div className="lg:w-1/2 xs:w-full  flex justify-center items-start">
            <img
              src={productDetail.image}
              alt=""
              className="- max-h-100 w-auto"
            />
          </div>
          <div className="lg:w-1/2 xs:w-full ">
            <h2 className="font-semibold text-2xl text-orange-2">
              {productDetail.name}
            </h2>
            <div className="mt-4  flex  items-end gap-2 lg:pr-52 xs:pr-20">
              <p>Danh Mục:</p>
              <h3 className="font-medium text-xl text-primary-300">
                {productDetail.Category.name}
              </h3>
            </div>
            <div className="mt-4  flex justify-between items-center lg:pr-52 xs:pr-20">
              <h3 className="font-semibold text-xl text-primary-300">
                {productDetail.price.toLocaleString()} đ
              </h3>
              <div className="flex justify-center items-center gap-4 ">
                <button
                  disabled={count === 1 ? true : false}
                  onClick={() => setCount(count - 1)}
                  className={`w-8 h-8 rounded-full ${
                    count === 1
                      ? "bg-gray-300 text-white"
                      : "bg-orange-2 text-white cursor-pointer"
                  }`}
                >
                  <HiMinus className="w-8 h-8 rounded-full p-1" />
                </button>
                <span className="text-lg w-4 text-center">{count}</span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="w-8 h-8 rounded-full bg-orange-2 text-white cursor-pointer"
                >
                  <HiPlus className="w-8 h-8  rounded-full p-1 cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="w-full rounded-md  h-10 mt-8 flex justify-center items-center">
              <div className="h-10 w-10 p-2 border bg-gray-300 border-gray-300 rounded-l-md ">
                <MdEditNote className="h-6 w-6 text-white" />
              </div>
              <input
                onChange={(e) => setNote(e.target.value)}
                value={note}
                className="w-full border border-gray-300  text-sm pl-2 h-10 rounded-r-md"
                type="text"
                placeholder="Ghi chú thêm cho món này"
              />
            </div>
            <p className="mt-8">Chọn size (bắt buộc)</p>

            <div className="flex flex-wrap items-start gap-6 my-2">
              {productDetail.productSizeData.map((item, index) => {
                const data = {
                  id: item.id,
                  name: item.name,
                  price: item.price,
                };
                return (
                  <div className=" border border-gray-300 rounded-md cursor-pointer">
                    <input
                      name="size"
                      id={`size_${item.id}`}
                      type="checkbox"
                      className="hidden"
                      onChange={(e) => handleOnchangeCheckbox(e, index, data)}
                      value={item.id}
                    />
                    <label
                      for={`size_${item.id}`}
                      className={`p-2 flex text-border ${
                        checkedItem.size &&
                        checkedItem.size.map((item) => {
                          if (item.id === data.id) {
                            let color = " bg-orange-2 text-white ";
                            return color;
                          }
                        })
                      }`}
                    >
                      {item.name} + {item.price.toLocaleString()}đ
                    </label>
                  </div>
                );
              })}
            </div>
            <p className="mt-8">Chọn Topping</p>
            <div className="flex flex-wrap items-start gap-6 my-2 cursor-pointer">
              {productDetail.productToppingData.map((item, index) => {
                const data = {
                  id: item.id,
                  name: item.name,
                  price: item.price,
                };
                return (
                  <div className=" border border-gray-300 rounded-md">
                    <input
                      name="topping"
                      id={`topping_${item.id}`}
                      type="checkbox"
                      className="hidden"
                      onChange={(e) => handleOnchangeCheckbox(e, index, data)}
                      value={item.id}
                    />
                    <label
                      for={`topping_${item.id}`}
                      className={`p-2 flex text-border ${
                        checkedItem.topping &&
                        checkedItem.topping.map((item) => {
                          if (item.id === data.id) {
                            let color = " bg-orange-2 text-white ";
                            return color;
                          }
                        })
                      }`}
                    >
                      {item.name} + {item.price.toLocaleString()}đ
                    </label>
                  </div>
                );
              })}
            </div>
            <button
              onClick={handleAddItemToCart}
              className="w-full bg-orange-1 mt-6 hover:bg-orange-2 p-2 rounded-md text-white flex justify-center items-center"
            >
              <BsCart2 className="mr-1 w-5 h-5 pb-1" />
              Thêm Vào giỏ hàng
            </button>
          </div>
          <div className="w-full mt-10 ">
            <div className="flex">
              <div className="w-2 border-l-4 border-orange-1 mr-2"></div>
              <h3 className="font-semibold text-xl">Mô tả sản phẩm</h3>
            </div>
            <p className="mt-2 text-sm">{productDetail.description}</p>
          </div>
          <div className="w-full my-10 ">
            <div className="flex">
              <div className="w-2 border-l-4 border-orange-1 mr-2"></div>
              <h3 className="font-semibold text-xl">Sản phẩm liên quan</h3>
            </div>
            <div className="w-full flex flex-wrap">
              <div className="lg:w-1/6 xs:w-1/2">
                <Card
                  class_name=" p-4 rounded-md"
                  class_name_name_product="text-sm"
                  data={{
                    id: 2,
                    name: "Hồng Trà Sữa Nóng",
                    price: 100000,
                    image:
                      "https://minio.thecoffeehouse.com/image/admin/1681368048_kombucha-yuzu-new_400x400.jpg",
                  }}
                />
              </div>
              <div className="lg:w-1/6 xs:w-1/2">
                <Card
                  class_name=" p-4 rounded-md"
                  class_name_name_product="text-sm"
                  data={{
                    id: 2,
                    name: "Hồng Trà Sữa Nóng",
                    price: 100000,
                    image:
                      "https://minio.thecoffeehouse.com/image/admin/1681368048_kombucha-yuzu-new_400x400.jpg",
                  }}
                />
              </div>
              <div className="lg:w-1/6 xs:w-1/2">
                <Card
                  class_name=" p-4 rounded-md"
                  class_name_name_product="text-sm"
                  data={{
                    id: 2,
                    name: "Hồng Trà Sữa Nóng",
                    price: 100000,
                    image:
                      "https://minio.thecoffeehouse.com/image/admin/1681368048_kombucha-yuzu-new_400x400.jpg",
                  }}
                />
              </div>
              <div className="lg:w-1/6 xs:w-1/2">
                <Card
                  class_name=" p-4 rounded-md"
                  class_name_name_product="text-sm"
                  data={{
                    id: 2,
                    name: "Hồng Trà Sữa Nóng",
                    price: 100000,
                    image:
                      "https://minio.thecoffeehouse.com/image/admin/1681368048_kombucha-yuzu-new_400x400.jpg",
                  }}
                />
              </div>
              <div className="lg:w-1/6 xs:w-1/2">
                <Card
                  class_name=" p-4 rounded-md"
                  class_name_name_product="text-sm"
                  data={{
                    id: 2,
                    name: "Hồng Trà Sữa Nóng",
                    price: 100000,
                    image:
                      "https://minio.thecoffeehouse.com/image/admin/1681368048_kombucha-yuzu-new_400x400.jpg",
                  }}
                />
              </div>
              <div className="lg:w-1/6 xs:w-1/2">
                <Card
                  class_name=" p-4 rounded-md"
                  class_name_name_product="text-sm"
                  data={{
                    id: 2,
                    name: "Hồng Trà Sữa Nóng",
                    price: 100000,
                    image:
                      "https://minio.thecoffeehouse.com/image/admin/1681368048_kombucha-yuzu-new_400x400.jpg",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export default ProductDetail;
