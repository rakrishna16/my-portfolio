import React from "react";
import Starfield from "react-starfield";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (

    <div className="min-h-screen">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.001}
        backgroundColor="black"
      />
      <div className="top-0">
        <Header />
      </div>
      <div className="p-4">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact/>
      </div>

    </div>
  );
};

export default App;
