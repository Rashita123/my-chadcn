// src/index.tsx
import React from "react";
var Avatar = ({ imgSource, className, size = "md" }) => {
  const baseStyles = "rounded-full object-cover";
  const sizeStyles = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  }[size];
  return /* @__PURE__ */ React.createElement("img", { className: `${baseStyles} ${sizeStyles} ${className}`, src: imgSource });
};
var index_default = Avatar;
export {
  index_default as default
};
