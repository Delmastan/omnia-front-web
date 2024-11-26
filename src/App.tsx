import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesList from "./routes";
import NavBar from "./components/nav/NavBar";
import FetchLayout from "./layout/FetchLayout";

const App: React.FC = () => {
  return (
    <Router>
      <FetchLayout>
        <div className="w-screen">
          <NavBar />
          <RoutesList />
        </div>
      </FetchLayout>
    </Router>
  );
};

export default App;
