import "./App.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { FaHeart, FaBars } from "react-icons/fa";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GraphContainer from "./components/GraphContainer";
import Requests from "./components/Requests";

function App() {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  // const handleCollapsedChange = (checked) => {
  //   setCollapsed(checked);
  // };

  // const handleImageChange = (checked) => {
  //   setImage(checked);
  // };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className="App">
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <div className="container">
        <Sidebar
          collapsed={collapsed}
          rtl={rtl}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
        />

        <div className="main-content">
          <Header />
          <HeroSection />
          <GraphContainer />
          <Requests />
        </div>
      </div>
    </div>
  );
}

export default App;
