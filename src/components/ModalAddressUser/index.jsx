import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addressBookSlide,
  createAddressBook,
  getListAddressBook,
} from "../../actionSlide/addressBookSlide";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
ModalAddressUser.propTypes = {};

function ModalAddressUser(props) {
  const dispatch = useDispatch();
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const locationCityList = useSelector(
    (state) => state.addressBook.locationAddressCity.data
  );
  const locationDistrictsList = useSelector(
    (state) => state.addressBook.locationAddressDistricts.data
  );
  const locationDWardsList = useSelector(
    (state) => state.addressBook.locationAddressWards.data
  );

  const loadingCreate = useSelector(
    (state) => state.addressBook.newAddressBook.loading
  );
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const [locationAddress, setLOcationAddress] = useState({
    city: locationCityList,
    districts: locationDistrictsList,
    wards: locationDWardsList,
  });
  const [locationAddressValue, setLOcationAddressValue] = useState({
    city: null,
    districts: null,
    wards: null,
  });

  const [inputCreateAddressValue, setInputCreateAddressValue] = useState({
    phone: null,
    name: null,
    email: null,
    specific_address: null,
  });

  const errCode = useSelector(
    (state) => state.addressBook.newAddressBook.errCode
  );

  useEffect(() => {
    setLOcationAddress({
      city: locationCityList,
      districts: locationDistrictsList,
      wards: locationDWardsList,
    });
  }, [locationCityList, locationDistrictsList, locationDWardsList]);

  const handleCreateAddressBook = () => {
    let cityName = locationAddress.city.find(
      (item) => item.code === locationAddressValue.city
    );
    let districtsName = locationAddress.districts.find(
      (item) => item.code === locationAddressValue.districts
    );
    let wardsName = locationAddress.wards.find(
      (item) => item.code === locationAddressValue.wards
    );

    let data = {
      name: inputCreateAddressValue.name,
      phone: inputCreateAddressValue.phone,
      email: inputCreateAddressValue.email,
      user_id: props.userInfo?.id,
      address:
        inputCreateAddressValue.specific_address +
        " " +
        wardsName.name +
        " " +
        districtsName.name +
        " " +
        cityName.name,
      city_code: locationAddressValue.city,
      city_name: cityName.name,
      districts_code: locationAddressValue.districts,
      districts_name: districtsName.name,
      wards_code: locationAddressValue.wards,
      wards_name: wardsName.name,
      specific_address: inputCreateAddressValue.specific_address,
    };

    dispatch(createAddressBook(data));
  };

  console.log("locationAddress", locationAddress);

  const handleChangeInput = (e) => {
    setInputCreateAddressValue({
      ...inputCreateAddressValue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (errCode === 0) {
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
      setInputCreateAddressValue({
        phone: null,
        name: null,
        email: null,
        specific_address: null,
      });
      setLOcationAddressValue({
        city: null,
        districts: null,
        wards: null,
      });
      dispatch(addressBookSlide.actions.setErrorCreate());
      dispatch(getListAddressBook({ id: props.userInfo?.id }));
      props.showModalAdd(false);
    }
  }, [errCode]);
  return (
    <>
      <div
        onClick={() => props.showModalAdd(false)}
        className="flex bg-gray-300 opacity-70  justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"
      ></div>
      <div className="flex  justify-center items-center overflow-x-hidden  m-auto w-fit h-fit overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col gap-4 w-full max-w-xl bg-white outline-none focus:outline-none pt-6 pb-4 px-4">
          <div
            className="- absolute z-50 top-5 right-5 hover:text-orange-2 cursor-pointer"
            onClick={() => props.showModalAdd(false)}
          >
            <AiOutlineClose className="w-5 h-5" />
          </div>
          <div className="flex gap-4 mb-4 justify-center">
            <HiOutlineLocationMarker className="w-8 h-8  text-primary-500 " />
            <h3 className="text-2xl font-semibold text-primary-500">
              Thêm địa chỉ mới
            </h3>
          </div>
          <div className="w-full flex gap-4 flex-col">
            <div className="flex gap-4 text-right">
              <div className="flex w-1/2 flex-col gap-2 ">
                <label className="w-full flex" htmlFor="">
                  Họ Tên <span className="pl-1 text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  value={inputCreateAddressValue.name}
                  name="name"
                  onChange={handleChangeInput}
                  className="border w-full border-gray-300 py-1 px-2 rounded"
                  placeholder="tên"
                />
              </div>
              <div className="flex w-1/2 flex-col gap-2 ">
                <label className="w-1/4 flex" htmlFor="">
                  SDT <span className="pl-1 text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  value={inputCreateAddressValue.phone}
                  name="phone"
                  onChange={handleChangeInput}
                  className="border w-full border-gray-300 py-1 px-2 rounded"
                  placeholder="SDT"
                />
              </div>
            </div>
            <div className="flex gap-4 text-right">
              <div className="flex w-1/2 flex-col gap-2 ">
                <label className="w-full flex" htmlFor="">
                  Email <span className="pl-1 text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  value={inputCreateAddressValue.email}
                  name="email"
                  onChange={handleChangeInput}
                  className="border w-full border-gray-300 py-1 px-2 rounded"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex gap-4 text-right">
              <div className="flex w-1/2 flex-col gap-2 ">
                <label className=" flex" htmlFor="">
                  Tỉnh/ Thành phố{" "}
                  <span className="pl-1 text-primary-500">*</span>
                </label>
                <Select
                  // showSearch
                  placeholder="Select a person"
                  optionFilterProp="children"
                  value={locationAddressValue.city}
                  onChange={(value) => {
                    setLOcationAddressValue({ city: value, districts: null });
                    setLOcationAddress({
                      ...locationAddress,
                      wards: [],
                    });
                    dispatch(
                      addressBookSlide.actions.getLocationDistricts({
                        cityCode: value,
                      })
                    );
                    dispatch(
                      addressBookSlide.actions.getLocationWards({
                        districtsCode: null,
                      })
                    );
                  }}
                  // onSearch={onSearch}
                  // filterOption={(input, option) =>
                  //   option.props.value
                  //     .toLowerCase()
                  //     .indexOf(input.toLowerCase()) >= 0
                  // }
                >
                  {locationAddress.city?.map((item) => (
                    <Select.Option key={item.id} value={item.code}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div className="flex w-1/2 flex-col gap-2 ">
                <label className=" flex" htmlFor="">
                  Quận/ Huyện <span className="pl-1 text-primary-500">*</span>
                </label>
                <Select
                  // showSearch
                  value={locationAddressValue.districts}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  disabled={
                    locationAddress.districts.length !== 0 ? false : true
                  }
                  onChange={(value) => {
                    setLOcationAddressValue({
                      ...locationAddressValue,
                      districts: value,
                      wards: null,
                    });
                    // setLOcationAddress({ ...locationAddress, districts: [] });
                    dispatch(
                      addressBookSlide.actions.getLocationWards({
                        districtsCode: value,
                      })
                    );
                  }}
                  // onSearch={onSearch}
                  // filterOption={(input, option) =>
                  //   option.props.value
                  //     .toLowerCase()
                  //     .indexOf(input.toLowerCase()) >= 0
                  // }
                >
                  {locationAddress.districts?.map((item) => (
                    <Select.Option key={item.id} value={item.code}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="flex gap-4 text-right">
              <div className="flex w-1/2 flex-col gap-2 ">
                <label className="flex" htmlFor="">
                  Xã/ Phường <span className="pl-1 text-primary-500">*</span>
                </label>
                <Select
                  // showSearch
                  value={locationAddressValue.wards}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  disabled={locationAddress.wards.length !== 0 ? false : true}
                  onChange={(value) => {
                    setLOcationAddressValue({
                      ...locationAddressValue,
                      wards: value,
                    });
                    // setLOcationAddress({ ...locationAddress, districts: [] });
                  }}
                  // onSearch={onSearch}
                  // filterOption={(input, option) =>
                  //   option.props.value
                  //     .toLowerCase()
                  //     .indexOf(input.toLowerCase()) >= 0
                  // }
                >
                  {locationAddress.wards?.map((item) => (
                    <Select.Option key={item.id} value={item.code}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex gap-4 text-right">
              <div className="flex w-full flex-col gap-2 ">
                <label className=" flex" htmlFor="">
                  Địa chỉ cụ thể{" "}
                  <span className="pl-1 text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  value={inputCreateAddressValue.specific_address}
                  name="specific_address"
                  onChange={handleChangeInput}
                  className="border w-full border-gray-300 py-1 px-2 rounded"
                  placeholder="Địa chỉ cụ thể"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 justify-center text-white">
            <button
              onClick={handleCreateAddressBook}
              className="px-4 py-2 rounded bg-orange-1 hover:bg-orange-2 flex justify-center items-center"
            >
              {loadingCreate ? (
                <PulseLoader size={14} color="#ffff" />
              ) : (
                "Tạo mới"
              )}
            </button>
            <button
              className="px-4 py-2 rounded bg-primary-500 hover:bg-red-500"
              onClick={() => props.showModalAdd(false)}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalAddressUser;
