import React, { useState } from "react";
import PropTypes from "prop-types";
import LayoutAdmin from "../../Layout/LayoutAdmin";
import { FaSearch } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import TitleAdmin from "../../common/title";
import ModalAddSizeAdmin from "../../components/Admin/ModalAddSizeAdmin";
import ButtonAdmin from "../../common/admin/ButtonAdmin";
SizeTopinList.propTypes = {};

function SizeTopinList(props) {
  const [showModalAddSize, setShowModalAddSize] = useState(false);

  const handleModal = (value) => {
    setShowModalAddSize(value);
    console.log("acb");
  };
  return (
    <LayoutAdmin>
      {showModalAddSize && (
        <ModalAddSizeAdmin setShowModalAddSize={setShowModalAddSize} />
      )}
      <div className="w-full flex justify-start mb-4">
        <TitleAdmin title="Danh sách Size và Topping" />
      </div>

      <div className="flex flex-col  pr-14">
        <div className="w-full mb-4">
          <h3 className="- font-medium text-xl text-primary-500">Size</h3>
        </div>
        <div className="w-full flex justify-between items-center mb-4">
          <div className="w-1/3 flex justify-self-start items-center gap-3 relative">
            <input
              type="text"
              className="w-full text-black shadow-md border focus:shadow-md h-full border-gray-300 rounded-5 py-2 px-8 text-sm relative"
              placeholder="Tìm kiếm"
            />
            <FaSearch className="h-4 w-4  text-orange-1 absolute left-2" />
          </div>

          <ButtonAdmin
            style="bg-orange-1 border-orange-2 hover:bg-orange-2 hover:border-orange-1   "
            text="Tạo mới"
            onClickButton={() => setShowModalAddSize(true)}
          />
        </div>
        <div className="flex flex-wrap items-start gap-6 my-2">
          <div className=" border p-2 flex justify-center gap-4 items-center border-gray-300 rounded-md">
            <p className="text-border">#1</p>
            <input id="1" type="checkbox" className="hidden" />
            <label for="1" className="  text-border">
              Nhỏ + 0đ
            </label>
            <div className="flex   gap-2">
              <FaRegEdit className="  h-4 w-4 text-blue-500 hover:text-blue-800 " />
              <AiOutlineDelete className=" h-4 w-4 text-red-500 hover:text-red-800 " />
            </div>
          </div>
          <div className=" border p-2 flex justify-center gap-4 items-center border-gray-300 rounded-md">
            <p className="text-border">#1</p>
            <input id="1" type="checkbox" className="hidden" />
            <label for="1" className="  text-border">
              Nhỏ + 0đ
            </label>
            <div className="flex   gap-2">
              <FaRegEdit className="  h-4 w-4 text-blue-500 hover:text-blue-800 " />
              <AiOutlineDelete className=" h-4 w-4 text-red-500 hover:text-red-800 " />
            </div>
          </div>
          <div className=" border p-2 flex justify-center gap-4 items-center border-gray-300 rounded-md">
            <p className="text-border">#1</p>
            <input id="1" type="checkbox" className="hidden" />
            <label for="1" className="  text-border">
              Nhỏ + 0đ
            </label>
            <div className="flex   gap-2">
              <FaRegEdit className="  h-4 w-4 text-blue-500 hover:text-blue-800 " />
              <AiOutlineDelete className=" h-4 w-4 text-red-500 hover:text-red-800 " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 pr-14">
        <div className="w-full mb-4">
          <h3 className="- font-medium text-xl text-primary-500">Topping</h3>
        </div>
        <div className="w-full flex justify-between items-center mb-4">
          <div className="w-1/3 flex justify-self-start items-center gap-3 relative">
            <input
              type="text"
              className="w-full text-black shadow-md border focus:shadow-md h-full border-gray-300 rounded-5 py-2 px-8 text-sm relative"
              placeholder="Tìm kiếm"
            />
            <FaSearch className="h-4 w-4  text-orange-1 absolute left-2" />
          </div>
          <ButtonAdmin
            style="bg-orange-1 border-orange-2 hover:bg-orange-2 hover:border-orange-1   "
            text="Tạo mới"
            onClickButton={() => setShowModalAddSize(true)}
          />
        </div>

        <div className="flex flex-wrap items-start gap-6 my-2">
          <div className=" border p-2 flex justify-center gap-4 items-center border-gray-300 rounded-md">
            <p className="text-border">#1</p>
            <input id="1" type="checkbox" className="hidden" />
            <label for="1" className="  text-border">
              Nhỏ + 0đ
            </label>
            <div className="flex   gap-2">
              <FaRegEdit className="  h-4 w-4 text-blue-500 hover:text-blue-800 " />
              <AiOutlineDelete className=" h-4 w-4 text-red-500 hover:text-red-800 " />
            </div>
          </div>
          <div className=" border p-2 flex justify-center gap-4 items-center border-gray-300 rounded-md">
            <p className="text-border">#1</p>
            <input id="1" type="checkbox" className="hidden" />
            <label for="1" className="  text-border">
              Nhỏ + 0đ
            </label>
            <div className="flex   gap-2">
              <FaRegEdit className="  h-4 w-4 text-blue-500 hover:text-blue-800 " />
              <AiOutlineDelete className=" h-4 w-4 text-red-500 hover:text-red-800 " />
            </div>
          </div>
          <div className=" border p-2 flex justify-center gap-4 items-center border-gray-300 rounded-md">
            <p className="text-border">#1</p>
            <input id="1" type="checkbox" className="hidden" />
            <label for="1" className="  text-border">
              Nhỏ + 0đ
            </label>
            <div className="flex   gap-2">
              <FaRegEdit className="  h-4 w-4 text-blue-500 hover:text-blue-800 " />
              <AiOutlineDelete className=" h-4 w-4 text-red-500 hover:text-red-800 " />
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default SizeTopinList;
