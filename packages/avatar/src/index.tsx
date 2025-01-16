import React, { FC, ReactNode } from "react";
import "tailwindcss/tailwind.css";

interface AvatarProps {
  className?: string;
  imgSource: string;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar: FC<AvatarProps> = ({ imgSource, className, size = 'md' }) => {
  const baseStyles = "rounded-full object-cover";
  const sizeStyles = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  }[size];
  
  return <img className={`${baseStyles} ${sizeStyles} ${className}`} src={imgSource}/>;
};

export default Avatar;
