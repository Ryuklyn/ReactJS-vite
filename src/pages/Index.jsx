import React from "react";
import "../css/index.css";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  function gotoLogin() {
    navigate("/prelogin");
  }
  return (
    <div className="landing-container">
      {/* Background circles */}
      <div className="background-circle circle-1"></div>
      <div className="background-circle circle-2"></div>
      <div className="background-circle circle-3"></div>

      {/* Main content */}
      <div className="content-wrapper">
        {/* Tagline */}
        <div className="tagline">
          <span className="tagline-icon">#</span>
          Track Wisely, Live Freely
        </div>

        {/* Main heading */}
        <h1 className="main-heading">Welcome to SpendSmart</h1>

        {/* Subtitle */}
        <p className="subtitle">
          Your personal financial wellness companion. Take control of your money
          with intelligent tracking, beautiful insights, and personalized
          guidance.
        </p>

        {/* Action buttons */}
        <div className="button-container">
          <button className="btn btn-primary" onClick={gotoLogin}>
            Get Started
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/signup")}
          >
            Sign Up Free
          </button>
        </div>

        {/* Stats section */}
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-icon">👥</span>
            <span className="stat-text">50,000+ Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <span className="stat-text">4.9/5 Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🔒</span>
            <span className="stat-text">Bank-Level Security</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
