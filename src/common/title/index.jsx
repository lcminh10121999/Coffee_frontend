import React from "react";
import PropTypes from "prop-types";

TitleAdmin.propTypes = {};

function TitleAdmin(props) {
  return (
    <div className="flex">
      <div className="w-2 border-l-4 border-orange-1 mr-2"></div>
      <h3 className="font-semibold text-primary-500 text-2xl">{props.title}</h3>
    </div>
  );
}

export default TitleAdmin;
