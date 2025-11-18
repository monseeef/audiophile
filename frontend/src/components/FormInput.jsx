import React from "react";

const FormInput = ({ label, name, placeholder, error, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className={`font-bold text-xs ${error ? "text-error" : "text-black-full"}`}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        className={`w-full px-6 py-4 rounded-lg border text-sm font-bold
          ${error ? "border-error" : "border-gray-300 focus:border-primary"}
          focus:outline-none focus:ring-0
        `}
        {...props}
      />
      {error && <span className="text-error text-xs">{error}</span>}
    </div>
  );
};

export default FormInput;
