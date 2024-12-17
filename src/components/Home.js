// src/components/Home.js
import React from "react";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <img src="/main_image.jpg" alt="Main Image" className="hero-image" />
      </section>

      <section className="content">
        <h2>About the App</h2>
        <p>This is a description of our mobile app, which provides great features to users.</p>
      </section>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1: Great usability</li>
          <li>Feature 2: Fast performance</li>
          <li>Feature 3: Secure and reliable</li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
