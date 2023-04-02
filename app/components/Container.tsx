"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
  max-w-7xl
    mx-auto
    xl:px-20
    md:px-8
    sm:px-4
    px-4
  "
    >
      {children}
    </div>
  );
};

export default Container;
