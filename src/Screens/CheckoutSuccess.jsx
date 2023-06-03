import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderSlide, getListOrder } from "../actionSlide/orderSLide";
import { toast } from "react-toastify";
import { handleGetProductSellCount } from "../actionSlide/productSlide";

CheckoutSuccess.propTypes = {};

function CheckoutSuccess(props) {
  const dispatch = useDispatch();
  const loadingOrder = useSelector((state) => state.order.loading);
  const userLogin = useSelector((state) => state.userLogin.userInfo);

  useEffect(() => {
    if (loadingOrder === "success") {
      toast.success("Đặc hàng thành công!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(handleGetProductSellCount());

      dispatch(orderSlide.actions.setLoading("idle"));
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
  }, [loadingOrder]);

  return (
    <Layout>
      <div className="container text-black mx-auto my-10">
        <div className="w-full flex flex-col items-center ">
          <div>
            <img
              className="- max-h-80 w-auto"
              src="https://thumbs.dreamstime.com/b/confirmation-approval-order-operation-payment-successful-completion-girl-confirms-business-success-man-hand-shows-class-239104068.jpg"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="- font-semibold text-4xl text-green-500">
              Đặt Hàng Thành Công!
            </h2>
            <p>Cảm ơn quý khách đã đặt hàng thành công tại The Coffee House</p>
            <p>Các thông tin của đơn hàng sẽ được gửi tới mail của quý khách</p>
            <p>
              Quý khác óc thể tra cuux lại thông thông tin đơn hàng tại{" "}
              <Link to={"/user-info/history"} className=" text-blue-500">
                {" "}
                đơn hàng The Coffee House{" "}
              </Link>
            </p>
            <p>
              Quý khách có thể liên hệ đến Hotline:{" "}
              <span className="- text-red-400">1900500</span> để nhận hỗ trợ
            </p>
            <Link
              to={"/"}
              className="rounded px-3 flex w-28 h-12 justify-center items-center py-2 m-1 border-b-4 border-l-2 text-white shadow-lg bg-orange-1 border-orange-3 hover:bg-orange-3 hover:border-orange-1 "
            >
              Mua Thêm
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CheckoutSuccess;
