import React from "react";
import PropTypes from "prop-types";
import LayoutAdmin from "../../Layout/LayoutAdmin";
import TitleAdmin from "../../common/title";

AddCategoryAdmin.propTypes = {};

function AddCategoryAdmin(props) {
  return (
    <LayoutAdmin>
      <div className="flex flex-col w-full">
        <div className="w-full flex justify-start mb-4">
          <TitleAdmin title="Thêm danh mục" />
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default AddCategoryAdmin;
