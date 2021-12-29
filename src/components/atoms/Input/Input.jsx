import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./input.scss";

export const Input = ({
  type,
  name,
  labelText,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  isFilled,
  passwordsMatch,
  showPasswordAlert,
  doCredentialsMatch,
  isSubmitted,
  passwordWarningMessage,
}) => {
  const classnames = classNames("input-container__input", {
    "red-border":
      !isFilled ||
      (isFilled && !passwordsMatch && showPasswordAlert) ||
      (isFilled && !doCredentialsMatch && isSubmitted) ||
      (isFilled && !!passwordWarningMessage),
  });

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
        className={classnames}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {!isFilled && (
        <p className="input-container__warning-text">Field is required</p>
      )}
      {isFilled && !passwordsMatch && showPasswordAlert && (
        <p className="input-container__warning-text">Passwords do not match</p>
      )}
      {isFilled && !doCredentialsMatch && isSubmitted && (
        <p className="input-container__warning-text">
          Couldn&apos;t find your account or wrong password
        </p>
      )}
      {isFilled && !!passwordWarningMessage && (
        <p className="input-container__warning-text">
          {passwordWarningMessage}
        </p>
      )}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  isFilled: PropTypes.bool,
  passwordsMatch: PropTypes.bool,
  showPasswordAlert: PropTypes.bool,
  doCredentialsMatch: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  passwordWarningMessage: PropTypes.string,
};
