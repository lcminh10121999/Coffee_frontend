import React, { useState } from "react";
import PropTypes from "prop-types";
import InputAdmin from "../../common/admin/InputAdmin";
import { AiOutlineClose } from "react-icons/ai";
import ButtonAdmin from "../../common/admin/ButtonAdmin";
ModalAddUserAdmin.propTypes = {};

function ModalAddUserAdmin(props) {

  const [selectedImage, setSelectedImage] = useState();

  return (
    <>
      <div
        onClick={() => props.setShowModalAdd(false)}
        className="flex bg-gray-300 opacity-70 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      ></div>
      <div className="flex  justify-center items-center m-auto  h-fit overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col gap-4 w-2/3 bg-white outline-none focus:outline-none pt-4 pb-4 px-4">
          <div
            className="- absolute z-50 top-5 right-5 hover:text-orange-2 cursor-pointer"
            onClick={() => props.setShowModalAdd(false)}
          >
            <AiOutlineClose className="w-5 h-5" />
          </div>
          <div className="flex gap-4 mb-2 justify-center">
            <h3 className="text-2xl font-semibold text-primary-500">
              Thêm tài khoản
            </h3>
          </div>
          <div className="w-full flex gap-4 flex-col mb-4">
            <div className="flex gap-4 flex-row ">
              <div className="w-1/4 flex items-start justify-center">
                <div class="personal-image ">
                  <label class="label">
                    <input type="file" className="upload-avatar" />
                    <figure class="personal-figure w-40 h-40">
                      {selectedImage ? "" :  <img
                        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                        class="personal-avatar  w-40 h-40"
                        alt="avatar"
                      />}
                     
                      <figcaption class="personal-figcaption flex justify-center items-center">
                        <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" />
                      </figcaption>
                    </figure>
                  </label>
                </div>
              </div>
              <div className="w-3/4 flex flex-col gap4">
                <div className="w-full mb-4 flex gap-2">
                  <div className="w-1/2">
                    <InputAdmin
                      name="name"
                      type="text"
                      placeholder="Nhập Họ và tên"
                      label="Họ và tên"
                      requireSpan="*"
                    />
                  </div>
                  <div className="w-1/2">
                    <InputAdmin
                      name="phone"
                      type="text"
                      placeholder="Nhập số điện thoại"
                      label="Số điện thoại"
                      requireSpan="*"
                    />
                  </div>
                </div>

                <div className="w-full mb-4 flex gap-2">
                  <div className="w-1/2">
                    <InputAdmin
                      name="name"
                      type="email"
                      placeholder="Email đăng nhập"
                      label="Email"
                      classSpan="text-xs"
                      requireSpan="* (Email đăng nhập)"
                    />
                  </div>
                  <div className="w-1/2">
                    <InputAdmin
                      name="name"
                      type="password"
                      placeholder="Nhập nhập mật khẩu"
                      label="Mật khẩu"
                      requireSpan="*"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full  flex gap-2">
                    <div className="w-1/2">
                      <label className=" flex mb-2" htmlFor="">
                        Tỉnh/ Thành phố{" "}
                        <span className="pl-1 text-primary-500">*</span>
                      </label>
                      <select
                        className="border w-full shadow-md text-sm border-gray-300  rounded-5 py-2 px-2 "
                        name=""
                        id=""
                      >
                        <option className="py-4 px-2" value="">
                          Đà Nẳng
                        </option>
                        <option value="">Quản Nam</option>
                        <option value="">HCM</option>
                      </select>
                    </div>
                    <div className="w-1/2">
                      <label className=" flex mb-2" htmlFor="">
                        Quận/ Huyện{" "}
                        <span className="pl-1 text-primary-500">*</span>
                      </label>
                      <select
                        className="border w-full shadow-md text-sm border-gray-300  rounded-5 py-2 px-2 "
                        name=""
                        id=""
                      >
                        <option className="py-4 px-2" value="">
                          Đà Nẳng
                        </option>
                        <option value="">Quản Nam</option>
                        <option value="">HCM</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full  flex gap-2">
                    <div className="w-1/2">
                      <label className=" flex mb-2" htmlFor="">
                        Quận/ Huyện{" "}
                        <span className="pl-1 text-primary-500">*</span>
                      </label>
                      <select
                        className="border w-full shadow-md text-sm border-gray-300  rounded-5 py-2 px-2 "
                        name=""
                        id=""
                      >
                        <option className="py-4 px-2" value="">
                          Đà Nẳng
                        </option>
                        <option value="">Quản Nam</option>
                        <option value="">HCM</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full ">
                    <InputAdmin
                      name="name"
                      type="text"
                      placeholder="Nhập địa chỉ cụ thể"
                      label="Địa chỉ cụ thể"
                      requireSpan="*"
                    />
                  </div>
                  <div className="w-full flex gap-2">
                    <div className="w-1/2">
                      <label className=" flex mb-2" htmlFor="">
                        Chức vụ <span className="pl-1 text-primary-500">*</span>
                      </label>
                      <select
                        className="border w-full shadow-md text-sm border-gray-300  rounded-5 py-2 px-2 "
                        name=""
                        id=""
                      >
                        <option className="py-4 px-2" value="">
                          Admin
                        </option>
                        <option value="">Content</option>
                        <option value="">Customer</option>
                      </select>
                    </div>
                    <div className="w-1/2 pl-4">
                      <p className="mb-4">
                        Giới tính<span className="text-red-500"> *</span>
                      </p>
                      <div className="w-full flex gap-8">
                        <div>
                          <input
                            type="radio"
                            checked
                            name="sex"
                            className="mr-1"
                          />
                          <span>Nam</span>
                        </div>
                        <div>
                          <input type="radio" name="sex" className="mr-1" />
                          <span>Nữ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 justify-center text-white">
            <ButtonAdmin
              style="bg-orange-1 border-orange-2 hover:bg-orange-2 hover:border-orange-1   "
              text="Tạo mới"
            />
            <ButtonAdmin
              style="bg-primary-500 border-red-500 hover:bg-red-500 hover:border-primary-500 "
              text=" Hủy"
              onClickButton={() => props.setShowModalAdd(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalAddUserAdmin;
