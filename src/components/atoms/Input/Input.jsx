import React from "react";
import PropTypes from "prop-types";

import "./input.scss";

export const Input = ({
  type,
  name,
  labelText,
  placeholder,
  value,
  onChange,
  onBlur,
  isFilled,
  isPassword,
  passwordsMatch,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={name} className="input-container__label">
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`input-container__input ${isFilled ? "" : "is-blank"}`}
        onChange={onChange}
        onBlur={onBlur}
      />
      {!isFilled && (
        <p className="input-container__required">Field is required.</p>
      )}
      {isFilled && isPassword && !passwordsMatch && (
        <p className="input-container__passwords">Passwords do not match.</p>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isFilled: PropTypes.bool.isRequired,
  isPassword: PropTypes.bool.isRequired,
  passwordsMatch: PropTypes.bool,
};
