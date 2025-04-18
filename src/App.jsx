import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
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
  Education,
} from "./components";
import Footer from "./components/Footer"; // Make sure the path is correct

const App = () => {
  useEffect(() => {
    const lastRole = localStorage.getItem("lastRole");
    if (lastRole) {
      console.log("Restoring last role:", lastRole);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
