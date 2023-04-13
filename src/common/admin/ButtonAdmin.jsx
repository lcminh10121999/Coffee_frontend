import React from "react";
import PropTypes from "prop-types";

ButtonAdmin.propTypes = {};

function ButtonAdmin(props) {
  //   const handleClick = () => {
  //     props.onClickButton();
  //     console.log("bdf");
  //   };
  return (
    <button
      onClick={props.onClickButton}
      className={`rounded px-3 py-2 m-1 border-b-4 border-l-2 text-white shadow-lg ${props.style}`}
      type={props.type}
    >
      {props.text}
    </button>
  );
}

export default ButtonAdmin;
