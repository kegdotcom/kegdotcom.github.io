import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Project from "./components/projects/Project";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="section" id="about">
        <h3 className="header">About Me</h3>
        <p className="about">
          My name is Keg Avakian and I am a highly motivated and eager Software
          Engineer. I am currently a Computer Science and Data Science double
          major at UW-Madison, and I am looking to do a Software Engineering
          internship for summer 2024.
        </p>
      </div>
      <hr />
      <div className="section" id="projects">
        <h3 className="header">Projects</h3>
        <Project
          name="DJ Buddy"
          description="A music recommendation app"
          technologies={[
            "React",
            "Node",
            "TypeScript",
            "CSS",
            "REST APIs",
            "OAuth2",
          ]}
          url="https://github.com/kegdotcom/aidj"
        />
      </div>
      <hr />
      <div className="section" id="skills">
        <h3 className="header">Skills</h3>
      </div>
      <hr />
      <div className="section" id="experience">
        <h3 className="header">Experience</h3>
      </div>
      <hr />
      <div className="section" id="involvement">
        <h3 className="header">Involvement</h3>
      </div>
    </>
  );
}

export default App;
