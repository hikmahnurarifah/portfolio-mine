import React from "react";
import Typed from "../Typed";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello, It's me</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Hikmah Nurarifah</span>
            <br />
          </h1>
          <h2 className="type--section">
            <Typed />
          </h2>
          <p className="hero--section-description">
            Welcome! This page is your gateway to exploring my portfolio.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/heros_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}