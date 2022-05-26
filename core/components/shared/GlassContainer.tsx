import { Component } from "@/utils/types";

const GlassContainer = ({ children, className = "" }: Component) => {
  return (
    <div
      className={`backdrop-blur-md w-full bg-opacity-20 dark:bg-opacity-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassContainer;