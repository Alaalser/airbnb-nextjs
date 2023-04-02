"use client";

import Container from "../Container";
import Search from "./Search";

import Logo from "./Logo";
import UserMenu from "./UserMenu";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between flex-row gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
