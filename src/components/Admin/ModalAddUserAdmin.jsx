import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import InputAdmin from "../../common/admin/InputAdmin";
import { AiOutlineClose } from "react-icons/ai";
import ButtonAdmin from "../../common/admin/ButtonAdmin";
ModalAddUserAdmin.propTypes = {};

function ModalAddUserAdmin(props) {
  const [selectedImage, setSelectedImage] = useState();

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [userDataCreate, setUserDataCreate] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    role: "1",
    status: "1",
    gender: "1",
    image: selectedFile,
    birthday: "",
  });

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const onchangeInputCreateUser = (e) => {
    setUserDataCreate({ ...userDataCreate, [e.target.name]: e.target.value });
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    let abc = selectedFile;

    console.log(abc);
  };

  
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
          <form
            action=""
            method=""
            enctype="multipart/form-data"
            onSubmit={handleCreateUser}
          >
            <div className="w-full flex gap-4 flex-col mb-4">
              <div className="flex gap-4 flex-row ">
                <div className="w-1/4 flex items-start justify-center">
                  <div class="personal-image ">
                    <label class="label">
                      <input
                        type="file"
                        name="image"
                        onChange={onSelectFile}
                        value={selectedFile}
                        className="upload-avatar"
                      />
                      <figure class="personal-figure w-40 h-40">
                        {preview ? (
                          <img
                            src={preview}
                            class="personal-avatar  w-40 h-40"
                            alt="avatar"
                          />
                        ) : (
                          <img
                            src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                            class="personal-avatar  w-40 h-40"
                            alt="avatar"
                          />
                        )}

                        <figcaption class="personal-figcaption flex justify-center items-center">
                          <img
                            src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"
                            alt="logo"
                          />
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
                        onchange={(e) => onchangeInputCreateUser(e)}
                        type="text"
                        value={userDataCreate.name}
                        placeholder="Nhập Họ và tên"
                        label="Họ và tên"
                        requireSpan="*"
                      />
                    </div>
                    <div className="w-1/2">
                      <InputAdmin
                        name="phone"
                        value={userDataCreate.phone}
                        onchange={(e) => onchangeInputCreateUser(e)}
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
                        name="email"
                        type="email"
                        onchange={(e) => onchangeInputCreateUser(e)}
                        placeholder="Email đăng nhập"
                        value={userDataCreate.email}
                        label="Email"
                        classSpan="text-xs"
                        requireSpan="* (Email đăng nhập)"
                      />
                    </div>
                    <div className="w-1/2">
                      <InputAdmin
                        name="password"
                        onchange={(e) => onchangeInputCreateUser(e)}
                        type="password"
                        value={userDataCreate.password}
                        placeholder="Nhập nhập mật khẩu"
                        label="Mật khẩu"
                        requireSpan="*"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <div className="w-full  flex gap-2">
                      <div className="w-1/2">
                        <InputAdmin
                          name="birthday"
                          value={userDataCreate.birthday}
                          onchange={(e) => onchangeInputCreateUser(e)}
                          type="date"
                          placeholder="Nhập mật khẩu"
                          label="  Sinh nhật"
                          requireSpan="*"
                        />
                      </div>
                      <div className="w-1/2">
                        <label className=" flex mb-2" htmlFor="">
                          Trạng thái
                          <span className="pl-1 text-primary-500">*</span>
                        </label>
                        <select
                          className="border w-full shadow-md text-sm border-gray-300  rounded-5 py-2 px-2 "
                          name="status"
                          onChange={(e) => onchangeInputCreateUser(e)}
                          value={userDataCreate.status}
                          id=""
                        >
                          <option value="1">Kích hoạt</option>
                          <option className="2" value="2">
                            Không Kich Hoạt
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full ">
                      <InputAdmin
                        name="address"
                        type="text"
                        onchange={(e) => onchangeInputCreateUser(e)}
                        placeholder="Nhập địa chỉ"
                        label="Địa chỉ"
                        value={userDataCreate.address}
                        requireSpan="*"
                      />
                    </div>
                    <div className="w-full flex gap-2">
                      <div className="w-1/2">
                        <label className=" flex mb-2" htmlFor="">
                          Chức vụ
                          <span className="pl-1 text-primary-500">*</span>
                        </label>
                        <select
                          className="border w-full shadow-md text-sm border-gray-300  rounded-5 py-2 px-2 "
                          onChange={(e) => onchangeInputCreateUser(e)}
                          value={userDataCreate.role}
                          name="role"
                          id=""
                        >
                          <option className="py-4 px-2" value="1">
                            Admin
                          </option>
                          <option value="2">Content</option>
                          <option value="3">Customer</option>
                        </select>
                      </div>
                      <div className="w-1/2 pl-4">
                        <label className=" flex mb-2" htmlFor="">
                          Giới tính{" "}
                          <span className="pl-1 text-primary-500">*</span>
                        </label>
                        <select
                          className="border w-full shadow-md text-sm border-gray-300  rounded-5 py-2 px-2 "
                          name="gender"
                          onChange={(e) => onchangeInputCreateUser(e)}
                          value={userDataCreate.gender}
                          id=""
                        >
                          <option className="py-4 px-2" value="1">
                            Nam
                          </option>
                          <option value="2">Nữ</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex gap-4 justify-center text-white">
              <ButtonAdmin
                style={
                  "bg-orange-1 border-orange-2 hover:bg-orange-2 hover:border-orange-1"
                }
                type="submit"
                text="Tạo mới"
              />
              <ButtonAdmin
                style={
                  "bg-primary-500 border-red-500 hover:bg-red-500 hover:border-primary-500 "
                }
                text=" Hủy"
                type="button"
                onClickButton={() => props.setShowModalAdd(false)}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalAddUserAdmin;
