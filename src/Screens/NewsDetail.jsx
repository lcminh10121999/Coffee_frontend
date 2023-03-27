import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import CardInformation from "../components/CardInformation";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

NewsDetail.propTypes = {};

function NewsDetail(props) {
  return (
    <Layout>
      <div>
        <img
          src="https://file.hstatic.net/1000075078/article/3__1__2b67342f4db64bb082944cf078afd910_master.jpg"
          alt=""
          className="lg:max-h-100 xs:max-h-52  object-cover w-full"
        />
      </div>
      <div className="lg:container lg:mx-auto lg:my-16  xs:my-10 xs:mx-8 text-black ">
        <div className="flex flex-col lg:mx-60 gap-10 border-b pb-16 border-gray-400">
          <h2 className="- font-semibold text-3xl">
            SIGNATURE - BIỂU TƯỢNG VĂN HOÁ CÀ PHÊ CỦA THE COFFEE HOUSE ĐÃ QUAY
            TRỞ LẠI
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-sm">
              Vừa qua, Fanpage Nhà đã hé mở những thông tin đầu tiên về
              "SIGNATURE by The Coffee House" kèm lời hẹn "Hôm nay bạn có hẹn
              chưa? Mình cà phê nhé!".
            </p>
            <p className="text-sm">
              Theo đó, SIGNATURE by The Coffee House sẽ gửi đến các thành viên
              của Nhà những Cuộc hẹn tròn đầy với 3 trải nghiệm: Tách cà phê đặc
              sản với những mẻ rang mới mỗi ngày, chiều lòng mọi tâm hồn yêu cà
              phê hay những ai đang tò mò về loại trái cây đặc biệt này; Món ăn
              đa bản sắc, mang phong vị giao thoa từ nhiều nơi cho cuộc hẹn dài
              hơn, rôm rả hơn; Một không gian đầy cảm hứng, nơi hạt cà phê kể về
              hành trình tuyệt vời của mình theo cách gần gũi nhất. Bạn sẽ có cơ
              hội thưởng thức cà phê bằng đủ những giác quan - ngửi hương, lắng
              nghe, ngắm nhìn và nếm vị.
            </p>
            <img
              src="https://file.hstatic.net/1000075078/file/_dsc2358_820aba0fa2c146578565ead25a3c05ec_grande.jpg"
              alt=""
              className="- max-h-100 w-2/3 object-cover self-center"
            />
            <p className="text-xs italic text-center self-center">
              Sự trở lại của mô hình Signature với cái tên mới SIGNATURE by The
              Coffee House
            </p>
            <p className="text-sm">
              Vừa qua, Fanpage Nhà đã hé mở những thông tin đầu tiên về
              "SIGNATURE by The Coffee House" kèm lời hẹn "Hôm nay bạn có hẹn
              chưa? Mình cà phê nhé!".
            </p>
            <p className="text-sm">
              Theo đó, SIGNATURE by The Coffee House sẽ gửi đến các thành viên
              của Nhà những Cuộc hẹn tròn đầy với 3 trải nghiệm: Tách cà phê đặc
              sản với những mẻ rang mới mỗi ngày, chiều lòng mọi tâm hồn yêu cà
              phê hay những ai đang tò mò về loại trái cây đặc biệt này; Món ăn
              đa bản sắc, mang phong vị giao thoa từ nhiều nơi cho cuộc hẹn dài
              hơn, rôm rả hơn; Một không gian đầy cảm hứng, nơi hạt cà phê kể về
              hành trình tuyệt vời của mình theo cách gần gũi nhất. Bạn sẽ có cơ
              hội thưởng thức cà phê bằng đủ những giác quan - ngửi hương, lắng
              nghe, ngắm nhìn và nếm vị.
            </p>
            <img
              src="https://file.hstatic.net/1000075078/file/_dsc2358_820aba0fa2c146578565ead25a3c05ec_grande.jpg"
              alt=""
              className="- max-h-100 w-2/3 object-cover self-center"
            />
            <p className="text-xs text-center italic self-center">
              Sự trở lại của mô hình Signature với cái tên mới SIGNATURE by The
              Coffee House
            </p>
            <p className="text-sm">
              Theo đó, SIGNATURE by The Coffee House sẽ gửi đến các thành viên
              của Nhà những Cuộc hẹn tròn đầy với 3 trải nghiệm: Tách cà phê đặc
              sản với những mẻ rang mới mỗi ngày, chiều lòng mọi tâm hồn yêu cà
              phê hay những ai đang tò mò về loại trái cây đặc biệt này; Món ăn
              đa bản sắc, mang phong vị giao thoa từ nhiều nơi cho cuộc hẹn dài
              hơn, rôm rả hơn; Một không gian đầy cảm hứng, nơi hạt cà phê kể về
              hành trình tuyệt vời của mình theo cách gần gũi nhất. Bạn sẽ có cơ
              hội thưởng thức cà phê bằng đủ những giác quan - ngửi hương, lắng
              nghe, ngắm nhìn và nếm vị.
            </p>
          </div>
        </div>
        <div className="w-full my-10">
          <h1 className="font-semibold  w-full text-center text-2xl text-primary-500">
            Tin Tức Khac
          </h1>
          {/* list tin tuc */}
          <div className="flex flex-wrap">
            <div className="lg:w-1/3 xs:w-full">
              <CardInformation flexCLass="lg:px-6 xs:p-0" />
            </div>
            <div className="lg:w-1/3 xs:w-full">
              <CardInformation flexCLass="lg:px-6 xs:p-0" />
            </div>
            <div className="lg:w-1/3 xs:w-full">
              <CardInformation flexCLass="lg:px-6 xs:p-0" />
            </div>
            <div className="w-full">
              <Link
                to={`/news`}
                className="flex justify-center items-center text-orange-1 hover:text-orange-2"
              >
                <p className="mr-2"> Xem Thêm</p>
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NewsDetail;
