"use strict";

import React from "react";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Image
      alt="Logo"
      src="/images/logo.png"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
    />
  );
};

export default Logo;
