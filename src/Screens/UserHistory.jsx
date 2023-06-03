import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineHistory,
} from "react-icons/ai";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ORDER_TEST_DATA } from "../data/OrderTestData";
import HistoryCard from "../components/HistoyCard";
import { useDispatch, useSelector } from "react-redux";
import {
  autoCompleteSearch,
  getListOrder,
  orderSlide,
  searchOrder,
} from "../actionSlide/orderSLide";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import { HashLoader } from "react-spinners";
import { DatePicker, Space } from "antd";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { PulseLoader } from "react-spinners";
const { RangePicker } = DatePicker;

UserHistory.propTypes = {};

function UserHistory(props) {
  const orderDataTest = ORDER_TEST_DATA;
  const { t } = useTranslation(["nav", "cart"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listOrder = useSelector((state) => state.order.orderItem.data);
  const hasMore = useSelector((state) => state.order.orderItem.hasMore);
  const offset = useSelector((state) => state.order.orderItem.offset);
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const searchLoading = useSelector(
    (state) => state.order.dataAutoCompleteSearch.loading
  );
  // const autoCompleteSearchData = useSelector(
  //   (state) => state.order.dataAutoCompleteSearch.data
  // );
  const searchResult = useSelector(
    (state) => state.order.dataAutoCompleteSearch.data
  );
  const searchErrorCode = useSelector(
    (state) => state.order.dataAutoCompleteSearch.errCode
  );

  const limit = 4;
  // const [offset, setOffset] = useState(1);
  const [displayOrderList, setDisplayOrderList] = useState("all");
  const [timeSearch, setTimeSearch] = useState([
    {
      startDate: "",
      endDate: "",
    },
  ]);

  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    if (userLogin?.id) {
      dispatch(getListOrder({ id: userLogin.id, limit: limit, page: 1 }));
      dispatch(orderSlide.actions.setOffsetHistoryOrder(2));
    } else {
      navigate("/", { replace: true });
    }
  }, [userLogin?.id]);

  const handleLoadMoreHistoryOrder = () => {
    if (displayOrderList === "all") {
      dispatch(
        getListOrder({
          id: userLogin.id,
          limit: limit,
          page: offset,
          more: true,
        })
      );
      dispatch(orderSlide.actions.setOffsetHistoryOrder(offset + 1));
    } else if (displayOrderList === "search") {
      dispatch(
        searchOrder({
          keySearch: inputSearch,
          startDate: timeSearch.startDate,
          endDate: timeSearch.endDate,
          limit: limit,
          page: offset,
          id: userLogin.id,
          more: true,
        })
      );
      dispatch(orderSlide.actions.setOffsetHistoryOrder(offset + 1));
    }
  };

  const handleChangeTimeSearch = (e) => {
    if (e) {
      setTimeSearch({
        startDate: e[0],
        endDate: e[1],
      });
    } else {
      setTimeSearch({
        startDate: "",
        endDate: "",
      });
    }
  };

  const handleChangeInputSearch = (e) => {
    if (!e.target.value) {
      setInputSearch("");
    } else {
      dispatch(orderSlide.actions.setLoadingSearch(true));
      setInputSearch(e.target.value);
    }
  };

  useEffect(() => {
    if (Object.keys(inputSearch).length !== 0) {
      const search = setTimeout(() => {
        let limit = 4;
        let date = new Date();
        dispatch(
          autoCompleteSearch({
            keySearch: inputSearch,
            startDate: userLogin.createdAt,
            endDate: date,
            limit: limit,
            page: 1,
            id: userLogin.id,
          })
        );
        // console.log("call api");
      }, 500);
      return () => clearTimeout(search);
    } else {
      dispatch(orderSlide.actions.setAutoCompleteSearchData([]));
      let limit = 4;
      let date = new Date();
      dispatch(
        getListOrder({
          id: userLogin.id,
          limit: limit,
          page: 1,
          keySearch: "",
          startDate: userLogin.createdAt,
          endDate: date,
        })
      );
      dispatch(orderSlide.actions.setOffsetHistoryOrder(2));
    }
  }, [inputSearch]);

  const handleSearch = () => {
    if (!inputSearch && !timeSearch.startDate && !timeSearch.endDate) {
      toast.error("Vui lòng nhập ô tìm kiếm hoặc chọn thời gian tìm kiếm", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setDisplayOrderList("search");
      dispatch(
        searchOrder({
          keySearch: inputSearch,
          startDate: timeSearch.startDate,
          endDate: timeSearch.endDate,
          limit: limit,
          page: 1,
          id: userLogin.id,
        })
      );
      dispatch(orderSlide.actions.setOffsetHistoryOrder(2));
    }
  };

  const handleClickInputResultSearch = (e, orderCode) => {
    e.preventDefault();
    let limit = 4;
    let date = new Date();
    dispatch(
      searchOrder({
        keySearch: orderCode,
        startDate: userLogin.createdAt,
        endDate: date,
        limit: limit,
        page: 1,
        id: userLogin.id,
      })
    );
    dispatch(orderSlide.actions.setAutoCompleteSearchData([]));
  };

  return (
    <UserProfile>
      <div className="w-full min-h-haft-screen">
        <div className="w-full mb-4 flex justify-center items-center gap-2">
          <AiOutlineHistory className="w-8 h-8  text-primary-500 " />
          <p className="text-2xl font-semibold text-primary-500">
            Lịch sử giao dịch
          </p>
        </div>
        <div className="flex mt-8 gap-4 h-8 lg:flex-nowrap xs:flex-wrap w-full relative">
          <div className="lg:w-5/12 xs:w-full  justify-center items-center relative">
            <input
              type="text"
              value={inputSearch}
              onChange={handleChangeInputSearch}
              className="w-full text-black h-full border border-gray-400 rounded px-8 text-sm relative"
              placeholder="Tìm kiếm"
            />
            <FaSearch className="h-4 w-4 text-orange-1 absolute top-2 left-3" />
          </div>
          {Object.keys(inputSearch).length !== 0 && (
            <div
              // ref={ref}
              id="searchHome"
              className=" absolute min-h-8 py-1 w-96 gap-2 bg-white border border-slate-300 shadow-lg rounded-md px-1 top-8 left-0"
            >
              <div className="flex flex-col w-full gap-2">
                {searchLoading ? (
                  <div className="flex gap-2 p-1 items-center justify-center rounded-5 cursor-pointer text-gray-400">
                    <PulseLoader size={10} color="#9CA3AF" />
                  </div>
                ) : searchErrorCode === 0 ? (
                  searchResult?.map((item) => {
                    return (
                      <div
                        onClick={(e) =>
                          handleClickInputResultSearch(e, item.order_code)
                        }
                        className="flex gap-2 p-1 rounded-5 cursor-pointer hover:bg-gray-300"
                      >
                        {item.order_code}
                      </div>
                    );
                  })
                ) : (
                  <div className="flex gap-2 p-1 rounded-5  text-xs justify-center items-center  text-gray-400">
                    {t("no-results-found")}
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="lg:w-5/12 xs:w-3/6 flex justify-center lg:m-0 xs:ml-auto">
            <RangePicker onChange={handleChangeTimeSearch} />
          </div>
          <div className="lg:w-2/12 xs:w-2/6 ">
            <button
              onClick={handleSearch}
              className="h-full flex justify-center items-center gap-2  w-full bg-orange-1 hover:bg-orange-2 px-1 py-1 rounded-sm text-white"
            >
              {/* <FaSearch className="h-4 w-4 text-white" /> */}
              <p>Search</p>
            </button>
          </div>
        </div>
        <InfiniteScroll
          dataLength={listOrder?.length}
          next={handleLoadMoreHistoryOrder}
          hasMore={hasMore}
          loader={
            <div className="py-20 w-full h-full flex justify-center items-center">
              <HashLoader color="#fa8c16" size={70} />
            </div>
          }
          className="w-full"
        >
          <div className="flex mt-8 gap-8 flex-wrap w-full ">
            {listOrder.length !== 0 ? (
              listOrder?.map((item, index) => {
                const count = index + 1;
                return (
                  <div className="flex flex-wrap gap-4 w-full border-b border-gray-300">
                    <div className="w-full flex lg:gap-8 xs:gap-2 flex-wrap">
                      <p className="font-medium text-primary-500">{count}</p>
                      <p className="font-medium">{item.order_code}</p>
                      <p>{moment(item?.createdAt).format("DD/MM/YYYY")}</p>
                      <p className="font-medium">{item.name}</p>
                      <p className="font-medium">{item.phone}</p>
                      <p>{item.address}</p>
                      {/* {item.status == 1 && (
                    <p className="- text-green-600">Đang chế biến</p>
                  )}
                  {item.status == 2 && (
                    <p className="- text-blue-600">Đang Giao</p>
                  )}
                  {item.status == 3 && (
                    <p className="- text-blue-600">Đã Giao</p>
                  )}
                  {item.status == 4 && (
                    <p className="- text-primary-500">Đã Hủy</p>
                  )} */}
                    </div>

                    <div className="flex w-full  flex-col flex-wrap">
                      <HistoryCard historyCardData={item?.orderDetail} />

                      <div className="flex gap-2 text-primary-500 items-end justify-end">
                        <p>Tổng tiền: </p>
                        <p className="text-2xl">
                          {item.total?.toLocaleString()} ₫
                        </p>
                      </div>
                    </div>
                    <div className="w-full "></div>
                  </div>
                );
              })
            ) : (
              <div className="w-full flex justify-center relative">
                <img
                  src="https://cdn.dribbble.com/users/357929/screenshots/2276751/media/678caef6068a976e4a0d94bbdba6b660.png?compress=1&resize=400x300&vertical=top"
                  alt=""
                />
                <p className="- pl-2 absolute left-96 bottom-6 font-semibold text-lg text-gray-400">
                  Không có đơn hàng
                </p>
              </div>
            )}
          </div>
        </InfiniteScroll>
      </div>
    </UserProfile>
  );
}

export default UserHistory;
