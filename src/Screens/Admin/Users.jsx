import React, { useState } from "react";
import PropTypes from "prop-types";
import LayoutAdmin from "../../Layout/LayoutAdmin";
import { FaSearch } from "react-icons/fa";
import CardUsersAdmin from "../../components/Admin/CardUsersAdmin";
import TitleAdmin from "../../common/title";
import { Link } from "react-router-dom";
import ModalAddUserAdmin from "../../components/Admin/ModalAddUserAdmin";
import ModalUserInforAdmin from "../../components/Admin/ModalUserInforAdmin";
import ModalUpdateUserADmin from "../../components/Admin/ModalUpdateUserADmin";
import ButtonAdmin from "../../common/admin/ButtonAdmin";
UsersList.propTypes = {};

function UsersList(props) {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  return (
    <LayoutAdmin>
      {showModalAdd && (
        <ModalAddUserAdmin
          setShowModalAdd={setShowModalAdd}
          showModalAdd={showModalAdd}
        />
      )}
      {showModalInfo && (
        <ModalUserInforAdmin
          setShowModalInfo={setShowModalInfo}
          showModalInfo={showModalInfo}
        />
      )}
      {showModalEdit && (
        <ModalUpdateUserADmin setShowModalEdit={setShowModalEdit} />
      )}
      <div className="w-full flex justify-start mb-4">
        <TitleAdmin title="Danh sách tài khoản" />
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

        <ButtonAdmin
          style="bg-orange-1 border-orange-2 hover:bg-orange-2 hover:border-orange-1   "
          text="Tạo mới"
          onClickButton={() => setShowModalAdd(true)}
        />
      </div>
      <div className="flex w-full flex-wrap pr-12">
        <div className="w-1/4 ">
          <CardUsersAdmin
            setShowModalInfo={setShowModalInfo}
            showModalInfo={showModalInfo}
            setShowModalEdit={setShowModalEdit}
          />
        </div>
        <div className="w-1/4 ">
          <CardUsersAdmin
            setShowModalInfo={setShowModalInfo}
            showModalInfo={showModalInfo}
            setShowModalEdit={setShowModalEdit}
          />
        </div>
        <div className="w-1/4 ">
          <CardUsersAdmin
            setShowModalInfo={setShowModalInfo}
            showModalInfo={showModalInfo}
            setShowModalEdit={setShowModalEdit}
          />
        </div>

        <div className="w-1/4 ">
          <CardUsersAdmin
            setShowModalInfo={setShowModalInfo}
            showModalInfo={showModalInfo}
            setShowModalEdit={setShowModalEdit}
          />
        </div>
        <div className="w-1/4 ">
          <CardUsersAdmin
            setShowModalInfo={setShowModalInfo}
            showModalInfo={showModalInfo}
            setShowModalEdit={setShowModalEdit}
          />
        </div>
        <div className="w-1/4 ">
          <CardUsersAdmin
            setShowModalInfo={setShowModalInfo}
            showModalInfo={showModalInfo}
            setShowModalEdit={setShowModalEdit}
          />
        </div>
        <div className="w-1/4 ">
          <CardUsersAdmin
            setShowModalInfo={setShowModalInfo}
            showModalInfo={showModalInfo}
            setShowModalEdit={setShowModalEdit}
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default UsersList;
