import React from "react";
import { Link } from "react-router-dom";

interface NavButtonProps {
  title: string;
  path: string;
}

const NavButton: React.FC<NavButtonProps> = (props: NavButtonProps) => {
  const { title, path } = props;
  return (
    <li className="content-center justify-center text-center border-x border-white w-40">
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default NavButton;
