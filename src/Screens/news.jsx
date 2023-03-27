import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import CardInformation from "../components/CardInformation";
import { BsArrowRight } from "react-icons/bs";

News.propTypes = {};

function News(props) {
  return (
    <Layout>
      <div className="- lg:container lg:m-auto lg:my-10 xs:my-5 text-black">
        <div className="mb-10   lg:px-0 xs:px-4 flex justify-center flex-wrap ">
          <div className="w-full flex flex-col items-center"></div>
          <h1 className="font-bold w-full text-center text-3xl text-primary-500">
            Tin Tức
          </h1>
          <p className="lg:w-1/2 xs:w-full text-xs text-center leading-6">
            The Coffee House sẽ là nơi mọi người xích lại gần nhau, đề cao giá
            trị kết nối con người và sẻ chia thân tình bên những tách cà phê, ly
            trà đượm hương, truyền cảm hứng về lối sống hiện đại.
          </p>
        </div>
        <div className="flex lg:flex-row xs:flex-col w-full">
          <div className="lg:w-2/5 xs:w-full">
            <CardInformation
              maxHeightImg="lg:max-h-96 xs:max-h-80"
              flexCLass="lg:block xs:flex gap-4 p-0"
            />
          </div>
          <div className="lg:w-3/5 xs:w-full">
            <CardInformation />
          </div>
        </div>
        <div className="mt-10 w-full flex lg:flex-row xs:flex-col gap-4">
          <div className="- lg:w-5/12 xs:w-9/12 ">
            <img
              src="https://file.hstatic.net/1000075078/file/sig-01_2c5b08d6b9294c82ac64901e12ae6106_master.png"
              alt=""
              className=""
            />
          </div>
          <div className="lg:w-7/12 xs:w-full">
            <div className="flex gap-2 pl-4">
              <div className="w-2 border-l-4 border-orange-1 mr-2"></div>
              <h3 className="font-semibold w-full  text-xl text-primary-500">
                Coffeeholic
              </h3>
            </div>

            <CardInformation
              maxHeightImg="max-h-96 "
              flexCLass="flex lg:flex-row xs:flex-col gap-4 p-0"
            />
            <CardInformation
              maxHeightImg="max-h-96 "
              flexCLass="flex lg:flex-row xs:flex-col gap-4 p-0"
            />
            <CardInformation
              maxHeightImg="max-h-96 "
              flexCLass="flex lg:flex-row xs:flex-col gap-4 p-0"
            />
            <div className="w-full mt-2">
              <a
                href=""
                className="flex justify-center items-center text-orange-1 hover:text-orange-2"
              >
                <p className="mr-2"> Xem Thêm</p>
                <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full flex lg:flex-row xs:flex-col gap-4">
          <div className="lg:w-7/12 xs:w-full lg:order-first xs:order-last">
            <div className="flex gap-2 pl-4">
              <div className="w-2 border-l-4 border-orange-1 mr-2"></div>
              <h3 className="font-semibold w-full  text-xl text-primary-500">
                Teaholic
              </h3>
            </div>

            <CardInformation
              maxHeightImg="max-h-96 "
              flexCLass="flex lg:flex-row xs:flex-col gap-4 p-0"
            />
            <CardInformation
              maxHeightImg="max-h-96 "
              flexCLass="flex lg:flex-row xs:flex-col gap-4 p-0"
            />
            <CardInformation
              maxHeightImg="max-h-96 "
              flexCLass="flex lg:flex-row xs:flex-col gap-4 p-0"
            />
            <div className="w-full mt-2">
              <a
                href=""
                className="flex justify-center items-center text-orange-1 hover:text-orange-2"
              >
                <p className="mr-2"> Xem Thêm</p>
                <BsArrowRight />
              </a>
            </div>
          </div>
          <div className="- lg:w-5/12 xs:w-9/12 lg:self-start xs:self-end lg:order-last xs:order-first">
            <img
              src="https://file.hstatic.net/1000075078/file/sig-01_2c5b08d6b9294c82ac64901e12ae6106_master.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default News;
