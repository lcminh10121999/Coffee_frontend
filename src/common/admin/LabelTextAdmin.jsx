import React from "react";
import PropTypes from "prop-types";

LabelTextAdmin.propTypes = {};

function LabelTextAdmin(props) {
  return (
    <div className="w-full mb-4 pb-2 border-b border-gray-200 flex gap-2">
      <div className="w-full flex gap-2 items-center">
        <label htmlFor="" className="- font-medium">
          {props.label}:
        </label>
        <p className="text-sm">{props.text}</p>
      </div>
    </div>
  );
}

export default LabelTextAdmin;
