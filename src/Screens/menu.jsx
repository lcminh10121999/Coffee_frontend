import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import CardCategory from "../components/CardCategory";
import Card from "../components/Card";
import { BsArrowRight } from "react-icons/bs";

Menu.propTypes = {};

function Menu(props) {
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
      </div>
    </Layout>
  );
}

export default Menu;
