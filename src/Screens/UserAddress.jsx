import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import { FiPlus } from "react-icons/fi";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineHistory,
} from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import ModalAddressUser from "../components/ModalAddressUser";
import { useDispatch, useSelector } from "react-redux";
import {
  addressBookSlide,
  deleteAddressBook,
  getListAddressBook,
} from "../actionSlide/addressBookSlide";
import { HashLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";

UserAddress.propTypes = {};

function UserAddress(props) {
  const [showModalAddAddress, setShowModalAddAddress] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listAddressBook = useSelector(
    (state) => state.addressBook.addressBook.data
  );
  const loadingAddressBook = useSelector(
    (state) => state.addressBook.addressBook.loading
  );

  const loadingDeleteAddressBook = useSelector(
    (state) => state.addressBook.deleteAddressBook.loading
  );
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  useEffect(() => {
    if (userLogin?.id) {
      dispatch(getListAddressBook({ id: userLogin.id }));
      // console.log("listAddressBook");
    } else {
      navigate("/", { replace: true });
    }
  }, [userLogin?.id]);

  const handleDeleteAddressBook = (id) => {
    console.log("id", id);
    dispatch(deleteAddressBook({ id: id }));
  };

  useEffect(() => {
    if (loadingDeleteAddressBook === "success") {
      toast.success("Thêm vào địa chỉ thành công!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(addressBookSlide.actions.setLoadingDeleteAddress("idle"));
      dispatch(getListAddressBook({ id: userLogin.id }));
    }
  }, [loadingDeleteAddressBook]);

  useEffect(() => {
    dispatch(addressBookSlide.actions.getLocationCity());
  }, []);

  return (
    <UserProfile>
      {showModalAddAddress && (
        <ModalAddressUser
          userInfo={userLogin}
          showModalAdd={setShowModalAddAddress}
        />
      )}

      <div className="w-full min-h-haft-screen">
        <div className="w-full mb-4 flex justify-center items-center gap-2">
          <HiOutlineLocationMarker className="w-8 h-8  text-primary-500 " />
          <p className="text-2xl font-semibold text-primary-500">Sổ địa chỉ</p>
        </div>
        <div className="flex flex-col gap-4 flex-wrap">
          <div className="w-full flex justify-end items-center">
            <button
              onClick={() => setShowModalAddAddress(true)}
              className="flex items-center bg-orange-1 hover:bg-orange-2 text-white rounded py-2 px-4"
            >
              <FiPlus className="mr-2" />
              Thêm địa chỉ mới
            </button>
          </div>
          <div className="w-full flex gap-4 flex-col">
            {loadingAddressBook ? (
              <div className="py-20 w-full h-full flex justify-center items-center">
                <HashLoader color="#fa8c16" size={70} />
              </div>
            ) : listAddressBook?.length !== 0 ? (
              listAddressBook?.map((item) => {
                return (
                  <div className="w-full flex  border-b pb-4 border-gray-400">
                    <div className="flex w-5/6">
                      <div className="w-full flex flex-wrap flex-col gap-4">
                        <div className="flex">
                          <p className="font-semibold self-center">
                            {item.name}
                          </p>
                          <div className="w-2 border-l-2 border-orange-1 ml-3 mr-2"></div>
                          <p className="self-center">{item.phone}</p>
                          <div className="w-2 border-l-2 border-orange-1 ml-3 mr-2"></div>
                          <p className="self-center"> {item.email}</p>
                          {/* <p className="ml-4 hidden text-green-600 border border-green-600 p-1">
          Mặc định
        </p> */}
                        </div>
                        <div className="flex flex-col w-1/2">
                          {/* <p className="- text-gray-1">Nhà riêng</p> */}
                          {/* <p className="- text-gray-1">64/69 La Thọ 2</p> */}
                          <p className="- text-gray-1">{item.address}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/6  flex flex-wrap justify-center gap-4 items-center flex-col">
                      <div className="flex text-sm items-center justify-center gap-4 w-full">
                        <a
                          href=""
                          className="text-blue-400 hover:text-blue-800"
                        >
                          Cập Nhật
                        </a>
                        <button
                          onClick={(e) => handleDeleteAddressBook(item.id)}
                          className="text-primary-500 hover:text-red-700"
                        >
                          Xóa
                        </button>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="text-sm text-green-600 hover:text-green-800 ">
                          Thiết lặp mặc định
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-full flex flex-col items-center gap-3 justify-center relative">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3595/3595587.png"
                  alt=""
                  className=" h-40 w-auto"
                />
                <p className="- pl-2  left-96 bottom-0 font-semibold text-lg text-gray-400">
                  Không có địa chỉ nào
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </UserProfile>
  );
}

export default UserAddress;
