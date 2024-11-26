import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesList from "./routes";
import NavBar from "./components/nav/NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="w-screen">
        <NavBar />
        <RoutesList />
      </div>
    </Router>
  );
};

export default App;
