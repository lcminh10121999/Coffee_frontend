import React from "react";
import PropTypes from "prop-types";

InputAdmin.propTypes = {};

function InputAdmin({
  label,
  name,
  placeholder,
  type,
  onchange,
  value,
  onKeyDown,
  style,
  register,
  requireSpan,
  classSpan,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label>
        {label}
        <span className={`text-red-500 ${classSpan}`}>{requireSpan}</span>
      </label>

      <input
        name={name}
        className="text-black shadow-md border  border-gray-300  rounded-5 py-2 px-2 text-sm"
        placeholder={placeholder}
        type={type}
        onChange={onchange}
        value={value}
        style={style}
        onKeyDown={onKeyDown}
        {...register}
      />
    </div>
  );
}

export default InputAdmin;
