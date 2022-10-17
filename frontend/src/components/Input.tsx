import React from "react";
import { IInput } from "../interfaces/components/IInput";
function Input({ type, value, onChange, placeholder, label }: IInput) {
  const id = Math.floor(Math.random() * 10000);
  return (
    <div className="input-container">
      <label htmlFor={type + "-" + id}>{label}</label>
      <div className="input-value-container">
        <input
          id={type + "-" + id}
          type={type}
          value={value}
          className="input-component"
          placeholder={placeholder}
          onChange={(e: any) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Input;
