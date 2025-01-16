import React, { FC, ReactNode } from "react";
import "tailwindcss/tailwind.css";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, variant = "primary", className }) => {
  const baseStyles = "px-4 py-2 rounded font-medium";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return <button className={`${baseStyles} ${variantStyles} ${className}`}>{children}</button>;
};

export default Button;
