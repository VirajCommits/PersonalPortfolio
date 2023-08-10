import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Avatar } from "./components/Avatar";
import { OrbitControls } from "@react-three/drei";
import AvatarParent from "./components/AvatarParent";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-null-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div className="avatar-container" style={{ height: '80vh' }}>
          <AvatarParent />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
