import React from "react";
import { Link } from "react-router-dom";

interface NavButtonProps {
  title: string;
  path: string;
  last?: boolean;
}

const NavButton: React.FC<NavButtonProps> = (props: NavButtonProps) => {
  const { title, path, last } = props;

  let border = last ? "border-l" : "border-x";

  return (
    <li className={`content-center justify-center text-center border-white w-40 ${border}`}>
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default NavButton;
