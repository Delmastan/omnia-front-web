import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogoTitle from "./components/nav/LogoTitle";
import { NavButtonList } from "./components/nav/NavButtonList";
import NavButton from "./components/nav/NavButton";
import System from "./pages/System";
import Archetypes from "./pages/Archetypes";
import Gears from "./pages/Gears";
import Documents from "./pages/Documents";

const App: React.FC = () => {
  return (
    <Router>
      <div className="w-screen">
        {/* Navigation */}
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

        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/system" element={<System />} />
          <Route path="/archetypes" element={<Archetypes />} />
          <Route path="/gears" element={<Gears />} />
          <Route path="/docs" element={<Documents />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
