import React from "react";

const Container = ({ children, className = "" }) => {
  return <div className={`max-w-[1110px] mx-auto px-6 ${className}`}>{children}</div>;
};

export default Container;
