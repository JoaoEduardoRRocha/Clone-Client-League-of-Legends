import { InputAccessProps } from "@/types/InputAccess";
import PropTypes from "prop-types";
import React, { useState } from "react";
import "./InputAccess.scss";

function InputAccess({ ...props }: InputAccessProps) {
  const [inputType, setInputType] = useState<"text" | "password">(props.type);

  const handleToggleButton = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div
      className={`input-access ${props.value ? "has-value" : ""} ${props.hasError ? "has-error" : ""}  ${props.disabled ? "is-disabled" : ""} ${props.hasToggleButton ? "has-toggle-button" : ""}`}
    >
      <label className="input-access__label" htmlFor={props.id}>
        {props.label}
      </label>

      <input
        type={inputType}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
        className="input-access__input"
      />

      {props.value && props.hasToggleButton && (
        <button className="input-access__toggle-button" onClick={handleToggleButton}>
          <i className={`${inputType === "password" ? "icon-eye-slash" : "icon-eye"}`}></i>
        </button>
      )}
    </div>
  );
}

InputAccess.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
  hasToggleButton: PropTypes.bool,
};

export default InputAccess;
