import React from "react";
import { IInput } from "../interfaces/components/IInput";
function Input({ type, value, onChange, label }: IInput) {
  const id = Math.floor(Math.random() * 10000);
  return (
    <div className="input-container">
      <div className="form__group">
        <input
          className="form__field"
          id={type + "-" + id}
          name={label}
          type={type}
          value={value}
          placeholder={label}
          onChange={(e: any) => onChange(e.target.value)}
          required
        />
        <label htmlFor={type + "-" + id} className="form__label">
          {label}
        </label>
      </div>
    </div>
  );
}

export default Input;
