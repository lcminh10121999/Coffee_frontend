import React from "react";
import PropTypes from "prop-types";
import LayoutAdmin from "../../Layout/LayoutAdmin";
import CardAdmin from "../../components/Admin/CardAdmin";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import TitleAdmin from "../../common/title";

ProductList.propTypes = {};

function ProductList(props) {
  return (
    <LayoutAdmin>
      <div className="w-full flex justify-start mb-4">
        <TitleAdmin title="Danh sách sản phẩm" />
      </div>
      <div className="flex w-full mb-4 justify-between pr-14">
        <div className="w-2/3 flex items-center gap-3 relative">
          <input
            type="text"
            className="w-full text-black shadow-md border  border-gray-300 h-2/3 py-2 rounded-5  px-8 text-sm relative "
            placeholder="Tìm kiếm"
          />
          <FaSearch className="h-4 w-4  text-orange-1 absolute left-2" />
          <select
            className="change-arrow border w-full  focus:shadow-md py-1 h-2/3  border-gray-300 rounded-5 shadow-md px-3 appearance-none"
            name=""
            id=""
          >
            <option value="">Trạng Thái</option>
            <option value="">Chờ chế biến</option>
            <option value="">Đang Giao</option>
            <option value="">Đã Giao</option>
            <option value="">Đã Hủy</option>
          </select>
        </div>
        <Link
          to={`/admin/product/create`}
          className="rounded px-3 py-2 m-1 border-b-4 border-l-2 text-white shadow-lg bg-orange-1 border-orange-2 hover:bg-orange-2 hover:border-orange-1"
        >
          Thêm mới
        </Link>
      </div>
      <div className="flex w-full flex-wrap pr-12">
        <div className="w-1/4">
          <CardAdmin
            class_name_border="px-4 pb-4 lg:h-auto"
            class_name=" p-4 shadow-image rounded-md"
            class_name_name_product="text-sm"
          />
        </div>
        <div className="w-1/4">
          <CardAdmin
            class_name_border="px-4 pb-4 lg:h-auto"
            class_name=" p-4 shadow-image rounded-md"
            class_name_name_product="text-sm"
          />
        </div>
        <div className="w-1/4">
          <CardAdmin
            class_name_border="px-4 pb-4 lg:h-auto"
            class_name=" p-4 shadow-image rounded-md"
            class_name_name_product="text-sm"
          />
        </div>
        <div className="w-1/4">
          <CardAdmin
            class_name_border="px-4 pb-8 lg:h-auto"
            class_name=" p-4 shadow-image rounded-md"
            class_name_name_product="text-sm"
          />
        </div>
        <div className="w-1/4">
          <CardAdmin
            class_name_border="px-4 pb-4 lg:h-auto"
            class_name=" p-4 shadow-image rounded-md"
            class_name_name_product="text-sm"
          />
        </div>
        <div className="w-1/4">
          <CardAdmin
            class_name_border="px-4 pb-4 lg:h-auto"
            class_name=" p-4 shadow-image rounded-md"
            class_name_name_product="text-sm"
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default ProductList;
