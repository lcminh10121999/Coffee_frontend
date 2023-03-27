import React, { useState } from "react";
import PropTypes from "prop-types";
import LayoutAdmin from "../../Layout/LayoutAdmin";
import { FaSearch } from "react-icons/fa";
import CardCategoryAdmin from "../../components/Admin/CardCategoryAdmin";
import TitleAdmin from "../../common/title";
import { Link } from "react-router-dom";
import ModalAddCategoryAdmin from "../../components/Admin/ModalAddCategoryAdmin";
import ButtonAdmin from "../../common/admin/ButtonAdmin";

CategoryList.propTypes = {};

function CategoryList(props) {
  const [showModalAdd, setShowModalAdd] = useState(false);
  return (
    <LayoutAdmin>
      {showModalAdd && (
        <ModalAddCategoryAdmin
          setShowModalAdd={setShowModalAdd}
          showModalAdd={showModalAdd}
        />
      )}

      <div className="w-full flex justify-start mb-4">
        <TitleAdmin title="Danh sách danh mục" />
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
        {/* <div
          onClick={() => setShowModalAdd(true)}
          className="py-2 px-3  bg-orange-1 hover:bg-orange-2 shadow-md cursor-pointer rounded-5 text-white"
        >
          Thêm mới
        </div> */}

        <ButtonAdmin
          style="bg-orange-1 border-orange-2 hover:bg-orange-2 hover:border-orange-1   "
          text="Tạo mới"
          onClickButton={() => setShowModalAdd(true)}
        />
      </div>
      <div className="flex w-full flex-wrap pr-12">
        <div className="w-1/4">
          <CardCategoryAdmin />
        </div>
        <div className="w-1/4">
          <CardCategoryAdmin />
        </div>
        <div className="w-1/4">
          <CardCategoryAdmin />
        </div>
        <div className="w-1/4">
          <CardCategoryAdmin />
        </div>
        <div className="w-1/4">
          <CardCategoryAdmin />
        </div>

        <div className="w-1/4">
          <CardCategoryAdmin />
        </div>
        <div className="w-1/4">
          <CardCategoryAdmin />
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default CategoryList;
