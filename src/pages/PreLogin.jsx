import React from "react";
import "../css/prelogin.css";
import { useNavigate } from "react-router-dom";

const PreLogin = () => {
  const navigate = useNavigate();
  function loginBtn() {
    navigate("/login");
  }
  return (
    <div className="prelogin-container">
      {/* Background circles */}
      <div className="prelogin-background-circle circle-1"></div>
      <div className="prelogin-background-circle circle-2"></div>
      <div className="prelogin-background-circle circle-3"></div>

      {/* Back to Home button */}
      <div className="back-button" onClick={() => navigate("/")}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Home
      </div>

      {/* Main content */}
      <div className="prelogin-content">
        {/* Header */}
        <div className="prelogin-header">
          <h1 className="prelogin-title">Welcome Back</h1>
          <p className="prelogin-subtitle">
            Choose your login type to continue
          </p>
        </div>

        {/* Login cards */}
        <div className="login-cards-container">
          {/* Admin Login Card */}
          <div className="login-card">
            <div className="card-icon admin-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h2 className="card-title">Login as Admin</h2>
            <p className="card-description">
              Access system settings, manage users, and view comprehensive
              analytics
            </p>
            <button className="continue-btn admin-btn">
              Continue as Admin
            </button>
          </div>

          {/* User Login Card */}
          <div className="login-card">
            <div className="card-icon user-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h2 className="card-title">Login as User</h2>
            <p className="card-description">
              Track your expenses, manage budgets, and achieve your financial
              goals
            </p>
            <button className="continue-btn user-btn" onClick={loginBtn}>
              Continue as User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLogin;
