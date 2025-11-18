import React from "react";

const FormRadio = ({ label, name, value, checked, onChange }) => {
  return (
    <label
      className={`w-full px-6 py-4 rounded-lg border flex items-center gap-4
      ${checked ? "border-primary" : "border-gray-300"}
      hover:border-primary transition-colors cursor-pointer
    `}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 text-primary focus:ring-primary"
      />
      <span className="text-sm font-bold">{label}</span>
    </label>
  );
};

export default FormRadio;
