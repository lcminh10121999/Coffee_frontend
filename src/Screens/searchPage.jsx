import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSlide } from "../actionSlide/productSlide";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";

SearchPage.propTypes = {};

function SearchPage(props) {
  const location = useLocation();
  console.log("location", location);
  const dispatch = useDispatch();
  const { t } = useTranslation("cart");
  const pageSearchLoading = useSelector(
    (state) => state.product.searchProduct.loadingPageSearch
  );
  const itemSearch = useSelector(
    (state) => state.product.searchProduct.dataPageSearch
  );

  useEffect(() => {
    if (pageSearchLoading === "success") {
      dispatch(productSlide.actions.setPageSearchLoading("idle"));
    }
  }, [pageSearchLoading]);
  useEffect(() => {
    if (pageSearchLoading === "success") {
      dispatch(productSlide.actions.setPageSearchLoading("idle"));
    }
  }, [pageSearchLoading]);
  return (
    <Layout>
      <div className="w-full lg:container lg:m-auto text-black">
        {/* Us Product */}
        <div className="mb-10 lg:mt-10 xs:mt-5 flex justify-center flex-wrap ">
          <h1 className="font-bold w-full text-center text-3xl text-primary-500">
            Kết quả tìm kiểm: {location.state?.keySearch}
          </h1>

          {/* list card */}
          <div className="mt-5 w-full flex flex-wrap">
            {itemSearch?.length !== 0 ? (
              itemSearch?.map((item, index) => {
                return (
                  <>
                    <div className="lg:w-1/6 xs:w-1/2">
                      <Card
                        data={item}
                        class_name=" p-4 shadow-image rounded-md"
                        class_name_border="p-4"
                        class_name_name_product="text-sm"
                      />
                    </div>
                  </>
                );
              })
            ) : (
              <idv className="w-full flex justify-center items-center">
                <p className="- font-semibold text-lg text-gray-400">
                  {t("empty-product")}
                </p>
              </idv>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SearchPage;
