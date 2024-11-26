import React from "react";
import LogoTitle from "./LogoTitle";
import { NavButtonList } from "./NavButtonList";
import NavButton from "./NavButton";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full h-20 shadow-md border rounded-b-lg border-white flex">
      <div className="flex w-full justify-between pl-2">
        <LogoTitle />
        <ul className="flex flex-row">
          {NavButtonList.map((button, index) => {
            if (index === NavButtonList.length - 1) {
              return <NavButton title={button.title} path={button.path} last />;
            }
            return <NavButton title={button.title} path={button.path} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
