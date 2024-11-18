import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Agriculture-Market</h1>
          <p>Connecting farmers with buyers for the best crop prices every day.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Use Agriculture-Market?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Real-Time Crop Prices</h3>
            <p>Access the latest crop prices from multiple buyers instantly.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Transactions</h3>
            <p>Seamlessly sell your crops with our user-friendly platform.</p>
          </div>
          <div className="feature-card">
            <h3>Verified Buyers</h3>
            <p>Work with trusted buyers for secure transactions.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"This platform has revolutionized how I sell my crops. Prices are always transparent and fair!"</p>
            <span>- Farmer A</span>
          </div>
          <div className="testimonial-card">
            <p>"Connecting with farmers has never been easier. It's great to see real-time prices and offers."</p>
            <span>- Buyer B</span>
          </div>
        </div>
      </section>

      {/* Call-To-Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
}

export default HomePage;
