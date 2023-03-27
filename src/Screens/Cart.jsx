import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import { HiPlus, HiMinus, HiOutlineTrash } from "react-icons/hi";
import { MdCardGiftcard } from "react-icons/md";
import { Link } from "react-router-dom";
CartHome.propTypes = {};

function CartHome(props) {
  return (
    <Layout>
      <div className=" w-full bg-gray-20 py-8 text-black">
        {/* table */}
        <table className="lg:container lg:m-auto  flex flex-col ">
          {/* header */}
          <thead>
            <th className="w-full shadow text-base text-gray-600 font-normal lg:flex xs:hidden xs:hi flex-wrap p-4  bg-white">
              <td className="w-1/12">
                <input type="checkbox" />
              </td>
              <td className="w-5/12 text-start">Sản Phẩm</td>
              <td className="w-2/12">Đơn Giá</td>
              <td className="w-1/12">Số Lượng</td>
              <td className="w-2/12">Số Tiền</td>
              <td className="w-1/12">Thao Tác</td>
            </th>
          </thead>
          <tbody className="">
            <tr className="w-full my-2 shadow text-base font-normal flex flex-wrap p-4 text-center bg-white">
              <td className="w-1/12 flex justify-center items-center">
                <input type="checkbox" />
              </td>
              <td className="lg:w-5/12 xs:11/12 text-start flex">
                <img
                  src="https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
                  alt=""
                  className="max-h-20"
                />
                <div className="flex ml-4 flex-col">
                  <Link>
                    <p className="w-full hover:text-orange-1">
                      CloudFee Hạnh Nhân Nướng
                    </p>
                  </Link>
                  <p className="w-full text-gray-1 text-sm">Size: Vừa</p>
                  <p className="w-full text-gray-1 text-sm">Thạch Cà Phê x 1</p>
                  <p className="w-full text-gray-1 text-sm">
                    Shot Espresso x 2
                  </p>
                  <p className="w-full text-gray-1 text-sm">Sốt Caramel x 1</p>
                </div>
              </td>
              <td className="w-2/12 lg:block xs:hidden">
                <p className="w-full"> 30.000đ</p>
                <p className="w-full text-gray-1 text-sm">4.000đ</p>
                <p className="w-full text-gray-1 text-sm">10.000đ</p>
                <p className="w-full text-gray-1 text-sm">10.000đ</p>
                <p className="w-full text-gray-1 text-sm">10.000đ</p>
              </td>
              <td className="lg:w-1/12 xs:w-full flex justify-center items-center gap-4">
                <HiMinus className="w-8 h-8 rounded-full p-1 bg-gray-300 text-white cursor-pointer" />{" "}
                <span className="text-lg">1</span>
                <HiPlus className="w-8 h-8 bg-orange-2 text-white rounded-full p-1 cursor-pointer" />
              </td>
              <td className="lg:w-2/12 xs:w-10/12 flex lg:justify-center xs:justify-end items-center">
                74.000đ
              </td>
              <td className="lg:w-1/12 xs:w-2/12 text-red-600 flex justify-center items-center">
                <Link className="flex justify-center items-center w-full">
                  <HiOutlineTrash className="mr-2" /> Xóa
                </Link>
              </td>
            </tr>
            <tr className="w-full my-2 shadow text-base font-normal flex flex-wrap p-4 text-center bg-white">
              <td className="w-1/12 flex justify-center items-center">
                <input type="checkbox" />
              </td>
              <td className="lg:w-5/12 xs:11/12 text-start flex">
                <img
                  src="https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
                  alt=""
                  className="max-h-20"
                />
                <div className="flex ml-4 flex-col">
                  <Link>
                    <p className="w-full hover:text-orange-1">
                      CloudFee Hạnh Nhân Nướng
                    </p>
                  </Link>
                  <p className="w-full text-gray-1 text-sm">Size: Vừa</p>
                  <p className="w-full text-gray-1 text-sm">Thạch Cà Phê x 1</p>
                  <p className="w-full text-gray-1 text-sm">
                    Shot Espresso x 2
                  </p>
                  <p className="w-full text-gray-1 text-sm">Sốt Caramel x 1</p>
                </div>
              </td>
              <td className="w-2/12 lg:block xs:hidden">
                <p className="w-full"> 30.000đ</p>
                <p className="w-full text-gray-1 text-sm">4.000đ</p>
                <p className="w-full text-gray-1 text-sm">10.000đ</p>
                <p className="w-full text-gray-1 text-sm">10.000đ</p>
                <p className="w-full text-gray-1 text-sm">10.000đ</p>
              </td>
              <td className="lg:w-1/12 xs:w-full flex justify-center items-center gap-4">
                <HiMinus className="w-8 h-8 rounded-full p-1 bg-gray-300 text-white cursor-pointer" />{" "}
                <span className="text-lg">1</span>
                <HiPlus className="w-8 h-8 bg-orange-2 text-white rounded-full p-1 cursor-pointer" />
              </td>
              <td className="lg:w-2/12 xs:w-10/12 flex lg:justify-center xs:justify-end items-center">
                74.000đ
              </td>
              <td className="lg:w-1/12 xs:w-2/12 text-red-600 flex justify-center items-center">
                <Link className="flex justify-center items-center w-full">
                  <HiOutlineTrash className="mr-2" /> Xóa
                </Link>
              </td>
            </tr>
            <tr className="w-full my-2 shadow text-base font-normal flex flex-wrap p-4 text-center bg-white">
              <td className="w-1/12 flex justify-center items-center">
                <input type="checkbox" />
              </td>
              <td className="lg:w-5/12 xs:11/12 text-start flex">
                <img
                  src="https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
                  alt=""
                  className="max-h-20"
                />
                <div className="flex ml-4 flex-col">
                  <Link>
                    <p className="w-full hover:text-orange-1">
                      CloudFee Hạnh Nhân Nướng
                    </p>
                  </Link>
                  <p className="w-full text-gray-1 text-sm">Size: Vừa</p>
                  <p className="w-full text-gray-1 text-sm">Thạch Cà Phê x 1</p>
                  <p className="w-full text-gray-1 text-sm">
                    Shot Espresso x 2
                  </p>
                  <p className="w-full text-gray-1 text-sm">Sốt Caramel x 1</p>
                </div>
              </td>
              <td className="w-2/12 lg:block xs:hidden">
                <p className="w-full"> 30.000đ</p>
                <p className="w-full text-gray-1 text-sm">4.000đ</p>
                <p className="w-full text-gray-1 text-sm">10.000đ</p>
                <p className="w-full text-gray-1 text-sm">10.000đ</p>
                <p className="w-full text-gray-1 text-sm">10.000đ</p>
              </td>
              <td className="lg:w-1/12 xs:w-full flex justify-center items-center gap-4">
                <HiMinus className="w-8 h-8 rounded-full p-1 bg-gray-300 text-white cursor-pointer" />{" "}
                <span className="text-lg">1</span>
                <HiPlus className="w-8 h-8 bg-orange-2 text-white rounded-full p-1 cursor-pointer" />
              </td>
              <td className="lg:w-2/12 xs:w-10/12 flex lg:justify-center xs:justify-end items-center">
                74.000đ
              </td>
              <td className="lg:w-1/12 xs:w-2/12 text-red-600 flex justify-center items-center">
                <Link className="flex justify-center items-center w-full">
                  <HiOutlineTrash className="mr-2" /> Xóa
                </Link>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="w-full shadow text-base text-gray-500 font-normal flex flex-wrap p-4  bg-white">
              <td className="flex w-full lg:gap-4 xs:gap-2 justify-end border-b border-gray-300 pt-2 pb-4">
                <div className="flex justify-center items-center gap-2">
                  <MdCardGiftcard className="w-6 h-6 lg:block xs:hidden" />

                  <p className="lg:text-base xs:text-xs">Mã Voucher</p>
                </div>
                <div>
                  <input
                    className="border border-gray-300  text-sm pl-2 h-10 rounded-sm"
                    type="text"
                    placeholder="Nhập Voucher"
                  />
                </div>
                <div>
                  <button className="h-10 bg-orange-1 hover:bg-orange-2 px-2 py-2 rounded-sm lg:text-base xs:text-xs text-white">
                    Áp Dụng
                  </button>
                </div>
              </td>
              <td className="flex w-full gap-4 justify-center items-center text-center py-4 ">
                <div className="w-1/12 lg:block xs:hidden">
                  <input type="checkbox" />
                </div>
                <div className="w-5/12 text-start flex gap-4 lg:block xs:hidden">
                  <p>Chọn tất cả</p>
                  <p>Xóa</p>
                  <p>Lưu vào yêu thích</p>
                </div>
                <div className="w-2/12 text-end lg:block xs:hidden"></div>
                <div className="lg:w-2/12 xs:w-8/12 text-end flex gap-4">
                  <p>Tổng thanh toán :</p>
                  <p>₫0</p>
                </div>
                <div className="lg:w-2/12 xs:w-4/12 flex justify-center h-10">
                  <Link
                    to={"/checkout"}
                    className="h-10 w-full bg-orange-1 hover:bg-orange-2 px-2 py-2 rounded-sm text-white"
                  >
                    Thanh Toán
                  </Link>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Layout>
  );
}

export default CartHome;
