import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import System from "./pages/System";
import Archetypes from "./pages/Archetypes";
import Gears from "./pages/Gears";
import Documents from "./pages/Documents";

const RoutesList: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/system" element={<System />} />
      <Route path="/archetypes" element={<Archetypes />} />
      <Route path="/gears" element={<Gears />} />
      <Route path="/docs" element={<Documents />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default RoutesList;
