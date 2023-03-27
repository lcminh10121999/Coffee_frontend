import React, { useState } from "react";
import PropTypes from "prop-types";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { STORE_DATA } from "../../data/storeData";
import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
ModalStore.propTypes = {};

function ModalStore(props) {
  const storeData = STORE_DATA;
  const [select, setSelect] = useState(props.storeSelect);
  const [selected, setSelected] = useState(props.storeSelected);
  console.log(select);
  const handleChangeSelect = (e) => {
    setSelect(e.target.value);
    if (e.target.value == "all") {
      setSelected([
        {
          id: "all",
          name: "Chọn Cửa Hàng",
          address: "Chọn Cửa Hàng",
        },
      ]);
    } else {
      const selected = storeData.filter((item) => item.id == e.target.value);

      setSelected(selected);
    }
  };
  const handleApplySelect = () => {
    props.setStoreSelect(select);
    props.setStoreSelected(selected);
    props.setShowModalStore(false);
    localStorage.setItem("storeSeleted", JSON.stringify(selected));
    localStorage.setItem("idStoreSeleted", JSON.stringify(select));

    // if (select == "all") {
    //   props.setStoreSelect(select);
    //   props.setStoreSelected([
    //     {
    //       id: "all",
    //       name: "Chọn Cửa Hàng",
    //       address: "Chọn Cửa Hàng",
    //     },
    //   ]);
    // } else {
    //   props.setStoreSelect(select);
    //   props.setStoreSelected(selected);
    // }
  };

  return (
    <>
      <div className="flex  bg-gray-300 opacity-70 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"></div>
      <div className="flex text-black justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col gap-4 w-full max-w-xl bg-white outline-none focus:outline-none pt-6 pb-4 px-4">
          <div
            className="- absolute z-50 top-5 right-5 text-black hover:text-orange-2 cursor-pointer"
            onClick={() => props.setShowModalStore(false)}
          >
            <AiOutlineClose className="w-5 h-5" />
          </div>
          <div className="flex gap-4 mb-4 justify-center">
            <HiOutlineLocationMarker className="w-8 h-8  text-primary-500 " />
            <h3 className="text-2xl font-semibold text-primary-500">
              Chọn Cửa Hàng
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center gap-4">
            <div className="w-full">
              <select
                name=""
                className="w-full border border-gray-300 rounded py-2 px-4 change-arrow appearance-none"
                onChange={handleChangeSelect}
                id=""
              >
                <option selected={select == "all"} value="all">
                  Chọn Cửa Hàng
                </option>
                {storeData.map((item) => {
                  return (
                    <option selected={select == item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-full flex flex-col gap-1 px-4">
              {selected.map((item) => {
                return (
                  <>
                    <p className="- font-semibold">{item.name}</p>
                    <p className="- text-gray-1">{item.address}</p>
                  </>
                );
              })}
            </div>
            <div className="w-full  flex gap-4 justify-center text-white">
              <button
                onClick={handleApplySelect}
                className="px-4 py-2 rounded bg-orange-1 hover:bg-orange-2"
              >
                Chọn
              </button>
              <button
                className="px-4 py-2 rounded bg-primary-500 hover:bg-red-500"
                onClick={() => props.setShowModalStore(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalStore;
