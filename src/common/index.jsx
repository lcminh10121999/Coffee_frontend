import React from "react";
import PropTypes from "prop-types";

ButtonProject.propTypes = {};

function ButtonProject(props) {
  return (
    <button className={props.className}>
      {props.text} <span className="ml-4">{props.icon}</span>
    </button>
  );
}

export default ButtonProject;
