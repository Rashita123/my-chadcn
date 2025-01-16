// src/index.tsx
import React from "react";
var Button = ({ children, variant = "primary", className }) => {
  const baseStyles = "px-4 py-2 rounded font-medium";
  const variantStyles = variant === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300";
  return /* @__PURE__ */ React.createElement("button", { className: `${baseStyles} ${variantStyles} ${className}` }, children);
};
var index_default = Button;
export {
  index_default as default
};
