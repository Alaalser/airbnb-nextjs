"use strict";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

const Logo = (props: Props) => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      src="/images/logo.png"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
    />
  );
};

export default Logo;
