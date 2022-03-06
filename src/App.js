import "./App.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GraphContainer from "./components/GraphContainer";
import Requests from "./components/Requests";

function App() {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className="App">
      <div className="container">
        <Sidebar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />

        <div className="main-content">
          <Header handleToggleSidebar={handleToggleSidebar} />
          <HeroSection />
          <GraphContainer />
          <Requests />
        </div>
      </div>
    </div>
  );
}

export default App;
