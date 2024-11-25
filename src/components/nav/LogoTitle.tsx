import React from "react";

const LogoTitle: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="./src/assets/icon.svg" alt="Omnia Noxa" className="w-10 h-10" />
      <h1 className="content-center">Omnia Noxa</h1>
    </div>
  );
};

export default LogoTitle;
