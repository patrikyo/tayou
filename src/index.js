import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Section from "./section/Section";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import SectionClass from "./models/section";
import cardClass from "./models/card";

const root = ReactDOM.createRoot(document.getElementById("root"));
const aboutUsSection = new SectionClass(
  "vad gör vi",
  2,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "light",
  [
    new cardClass(
      "",
      "Kvalitet",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      false,
      "faUsersLine"
    ),
    new cardClass(
      "",
      "Kompetens",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      false,
      "faUsersLine"
    ),
    new cardClass(
      "",
      "Historik",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      false,
      "faUsersLine"
    ),
  ]
);
const sectionService = new SectionClass("Tjänster", 2, "", "dark", [
  new cardClass(
    "https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1acb41b9310a_city-scape.jpg",
    "randNy",
    "body",
    true,
    ""
  ),
  new cardClass(
    "https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1ab359b9312c_photo-1416400639808-f41f0c149b09.jpg",
    "randomNy",
    "body",
    true,
    ""
  ),
]);

root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Section section={aboutUsSection} />

    <Section section={sectionService} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
