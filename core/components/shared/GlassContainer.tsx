import { Component } from "@/utils/types";

const GlassContainer = ({ children, className = "" }: Component) => {
  return (
    <div
      className={`backdrop-blur-md w-full bg-opacity-75 dark:bg-opacity-75 duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
