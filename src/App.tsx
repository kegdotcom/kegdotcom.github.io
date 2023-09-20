import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Project from "./components/projects/Project";
import Experience from "./components/experience/Experience";
import Club from "./components/involvement/Club";
import webDevLogo from "./images/webdev.svg";
import uplLogo from "./images/upl.png";
import dotDataLogo from "./images/dotdata.png";

function App() {
  return (
    <>
      <Navbar />
      <span className="marker" id="about" />
      <Hero />
      <div className="section">
        <h3 className="header">About Me</h3>
        <p className="about">
          My name is Keg Avakian and I am a highly motivated and eager Software
          Engineer. I am currently a Computer Science and Data Science double
          major at UW-Madison, and I am looking to do a Software Engineering
          internship for summer 2024.
        </p>
      </div>
      <span className="marker" id="projects" />
      <hr className="divider" />
      <div className="section">
        <h3 className="header">Projects</h3>
        <Project
          name="DJ Buddy"
          description="Music recommendation application that allows a user to automatically add AI-generated playlists directly to their spotify account, as well as view their top songs and artists from the last 6 months"
          technologies={[
            "React",
            "Node",
            "TypeScript",
            "CSS",
            "OAuth2",
            "OpenAI Completion API",
            "Spotify Web API",
          ]}
          url="https://github.com/kegdotcom/aidj"
        />
        <hr className="smallSpacer" />
        <hr className="spacer" />
        <hr className="smallSpacer" />
        <Project
          name="MyHub"
          description="Productivity organizer application that allows a user to create an interactive todo list, create a set of custom color-coded bookmarks, and view all of their upcoming Canvas assignments for schoolwork in one place in order to help manage their time more effectively"
          technologies={[
            "React",
            "Node",
            "TypeScript",
            "Bootstrap",
            "Canvas LMS API",
            "MongoDB",
          ]}
          url="https://github.com/kegdotcom/myhub"
        />
        <hr className="smallSpacer" />
        <hr className="spacer" />
        <hr className="smallSpacer" />
        <Project
          name="Macro Tracker"
          description="Web application to track nutrition and macronutrients over time, and help to meet dietary needs and/or goals"
          technologies={["HTML", "JavaScript", "CSS"]}
        />
        <hr className="smallSpacer" />
        <hr className="spacer" />
        <hr className="smallSpacer" />
        <Project
          name="Independent Study Project"
          description="Senior year independent study project in order to learn and improve at backend JavaScript and SQL databases by building a web application that was adapted for use by the Dungeons & Dragons club during the COVID-19 pandemic"
          technologies={[
            "HTML",
            "JavaScript",
            "CSS",
            "Node",
            "Express",
            "SQL",
            "SQLite",
          ]}
        />
      </div>
      <span className="marker" id="skills" />
      <hr className="divider" />
      <div className="section">
        <h3 className="header">Skills</h3>
        <div className="skillGrid">
          <ul className="list">
            <h5 className="subheader">Languages</h5>
            <li>Java - Advanced</li>
            <li>JavaScript - Advanced</li>
            <li>JSON - Advanced</li>
            <li>TypeScript - Advanced</li>
            <li>HTML - Advanced</li>
            <hr className="listSpacer" />
            <li>CSS - Intermediate</li>
            <li>SQL - Intermediate</li>
            <li>Python - Intermediate</li>
            <hr className="listSpacer" />
            <li>R - Beginner</li>
            <li>Swift - Beginner</li>
          </ul>
          <ul className="list">
            <h5 className="subheader">Frameworks</h5>
            <li>React - Intermediate</li>
            <li>Express - Intermediate</li>
            <li>Bootstrap - Intermediate</li>
            <hr className="listSpacer" />
            <li>Angular - Beginner</li>
            <li>Next.js - Beginner</li>
          </ul>
          <ul className="list">
            <h5 className="subheader">Tools and Tech</h5>
            <li>Object-Oriented Programing - Advanced</li>
            <hr className="listSpacer" />
            <li>REST APIs - Intermediate</li>
            <li>GitHub - Intermediate</li>
            <li>Git - Intermediate</li>
            <li>Bash - Intermediate</li>
            <li>Unit Testing - Intermediate</li>
            <li>MongoDB - Intermediate</li>
            <li>MySQL - Intermediate</li>
            <hr className="listSpacer" />
            <li>PostgreSQL - Beginner</li>
            <li>Google Cloud Compute Engine - Beginner</li>
          </ul>
        </div>
      </div>
      <span className="marker" id="experience" />
      <hr className="divider" />
      <div className="section">
        <h3 className="header">Experience</h3>
        <Experience
          position="Web Master"
          company="Delta Tau Delta - Beta Gamma"
          location="Madison, Wisconsin"
          description="Manage and update the website for the Beta Gamma chapter of the Delta Tau Delta fraternity. Designed and implemented a user-friendly donations page with a GoFundMe to raise money for upgrades to the house, with a live display tracking the total amount raised."
          start="Nov 2022"
        />
        <hr className="smallSpacer" />
        <hr className="spacer" />
        <hr className="smallSpacer" />
        <Experience
          position="Customer Service Representative"
          company="Micro Center"
          location="Westmont, Illinois"
          description="Assisted customers during their time in the store, helping them find products that would suit thier needs and fit their budget and ensuring their checkout experience was smooth."
          start="Jan 2022"
          end="Apr 2022"
        />
        <hr className="smallSpacer" />
        <hr className="spacer" />
        <hr className="smallSpacer" />
        <Experience
          position="Information Technology Intern"
          company="Lyons Township High School"
          location="LaGrange, Illinois"
          description="Worked in two teams of inters to update software and security on school desktop PCs, and set up hundreds of chromebooks for students in order to transition the high school to a one-to-one computer system."
          start="Jun 2021"
          end="Aug 2021"
        />
        <hr className="smallSpacer" />
        <hr className="spacer" />
        <hr className="smallSpacer" />
        <Experience
          position="Peer Tutor"
          company="Independent"
          description="Tutored dozens of students and peers in mathematics and computer science concepts throught my time in high school and still in college."
          start="Jan 2018"
        />
      </div>
      <span className="marker" id="involvement" />
      <hr className="divider" />
      <div className="section">
        <h3 className="header">Involvement</h3>
        <Club
          name="Undergraduate Projects Lab"
          role="Member"
          description="University of Wisconsin - Madison Computer Science labratory for undergraduate students to collaborate on programming projects with peers"
          start="Sep 2023"
          imageURL={uplLogo}
        />
        <hr className="smallSpacer" />
        <hr className="spacer" />
        <hr className="smallSpacer" />
        <Club
          name="WebDev UW"
          role="Member"
          description="Univeristy of Wisconsin - Madison Web Development Club"
          start="Sep 2023"
          imageURL={webDevLogo}
        />
        <hr className="smallSpacer" />
        <hr className="spacer" />
        <hr className="smallSpacer" />
        <Club
          name="dotData"
          role="Member"
          description="University of Wisconsin - Madison Data Science Club"
          start="Nov 2022"
          imageURL={dotDataLogo}
        />
      </div>
    </>
  );
}

export default App;
