import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import { CgGlassAlt } from "react-icons/cg";
import { BsCart2, BsTranslate, BsPlusCircle } from "react-icons/bs";
import { HiPlus, HiMinus } from "react-icons/hi";
import { MdEditNote } from "react-icons/md";
import Card from "../components/Card";

ProductDetail.propTypes = {};

function ProductDetail(props) {
  return (
    <Layout>
      <div className="flex flex-wrap lg:flex-row xs:flex-col lg:container lg:mx-auto my-10 xs:mx-5 text-black">
        <div className="lg:w-1/2 xs:w-full  flex justify-center items-center">
          <img
            src="https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
            alt=""
            className=""
          />
        </div>
        <div className="lg:w-1/2 xs:w-full ">
          <h2 className="font-semibold text-2xl text-orange-2">
            CloudTea Oolong Nướng Kem Cheese
          </h2>
          <div className="mt-4  flex justify-between items-center lg:pr-52 xs:pr-20">
            <h3 className="font-semibold text-xl text-primary-300">55.000 đ</h3>
            <div className="flex justify-center items-center gap-4 ">
              <HiMinus className="w-8 h-8 rounded-full p-1 bg-gray-300 text-white cursor-pointer" />{" "}
              <span className="text-lg">1</span>{" "}
              <HiPlus className="w-8 h-8 bg-orange-2 text-white rounded-full p-1 cursor-pointer" />
            </div>
          </div>
          <div className="w-full rounded-md  h-10 mt-8 flex justify-center items-center">
            <div className="h-10 w-10 p-2 border bg-gray-300 border-gray-300 rounded-l-md ">
              <MdEditNote className="h-6 w-6 text-white" />
            </div>
            <input
              className="w-full border border-gray-300  text-sm pl-2 h-10 rounded-r-md"
              type="text"
              placeholder="Ghi chú thêm cho món này"
            />
          </div>
          <p className="mt-8">Chọn size (bắt buộc)</p>

          <div className="flex flex-wrap items-start gap-6 my-2">
            <div className=" border border-gray-300 rounded-md">
              <input id="1" type="checkbox" className="hidden" />
              <label for="1" className="p-2 flex text-border">
                Nhỏ + 0đ
              </label>
            </div>
            <div className=" border border-gray-300 rounded-md">
              <input id="1" type="checkbox" className="hidden" />
              <label for="1" className="p-2 flex text-border">
                Vừa + 4.000đ
              </label>
            </div>
            <div className=" border border-gray-300 rounded-md">
              <input id="1" type="checkbox" className="hidden" />
              <label for="1" className="p-2 flex text-border">
                Lớn + 10.000đ
              </label>
            </div>
          </div>
          <p className="mt-8">Chọn Topping</p>
          <div className="flex flex-wrap items-start gap-6 my-2">
            <div className=" border border-gray-300 rounded-md">
              <input id="1" type="checkbox" className="hidden" />
              <label for="1" className="p-2 flex text-border">
                Kem Phô Mai Macchiato + 10.000đ
              </label>
            </div>
            <div className=" border border-gray-300 rounded-md">
              <input id="1" type="checkbox" className="hidden" />
              <label for="1" className="p-2 flex text-border">
                Shot Espresso + 4.000đ
              </label>
            </div>
            <div className=" border border-gray-300 rounded-md">
              <input id="1" type="checkbox" className="hidden" />
              <label for="1" className="p-2 flex text-border">
                Trân châu trắng + 10.000đ
              </label>
            </div>
            <button className="w-full bg-orange-1 hover:bg-orange-2 p-2 rounded-md text-white flex justify-center items-center">
              <BsCart2 className="mr-1 w-5 h-5 pb-1" />
              Thêm Vào giỏ hàng
            </button>
          </div>
        </div>
        <div className="w-full mt-10 ">
          <div className="flex">
            <div className="w-2 border-l-4 border-orange-1 mr-2"></div>
            <h3 className="font-semibold text-xl">Mô tả sản phẩm</h3>
          </div>
          <p className="mt-2 text-sm">
            Hội mê cheese sao có thể bỏ lỡ chiếc trà sữa siêu mlem này. Món đậm
            vị Oolong nướng - nền trà được yêu thích nhất hiện nay, quyện thêm
            kem sữa thơm béo. Đặc biệt, chinh phục ngay fan ghiền cheese bởi lớp
            foam phô mai mềm tan mằn mặn. Càng ngon cực với thạch Oolong nướng
            nguyên chất giòn dai nhai siêu thích.
          </p>
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
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 rounded-md"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 rounded-md"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 rounded-md"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 rounded-md"
                class_name_name_product="text-sm"
              />
            </div>
            <div className="lg:w-1/6 xs:w-1/2">
              <Card
                class_name=" p-4 rounded-md"
                class_name_name_product="text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;
