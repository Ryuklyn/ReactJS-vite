import React, { useEffect, useState } from "react";
import "../css/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [responseData, setResponse] = useState([]);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (!submit) return;

    const userLogin = async () => {
      try {
        // Hash the password
        // const hashedPassword = CryptoJS.SHA256(formData.password).toString();

        const payload = {
          ...formData,
          // password: hashedPassword,
          password: formData.password,
        };
        const response = await axios.post(
          "http://localhost:8080/api/users/login",
          payload
        );

        console.log("Fetched user:", response.data);
        setResponse(response.data);

        // 👉 Navigate after success
        if (response.data) {
          navigate("/user/dashboard", {
            state: { firstname: response.data.firstname },
          });
          console.log(
            "Navigating to dashboard with user:",
            response.data.firstname
          );
        } else {
          alert("Invalid credentials, please try again.");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        alert("Login failed. Please check your credentials.");
        navigate("/login");
      } finally {
        setSubmit(false); // reset submit flag
      }
    };

    userLogin();
  }, [submit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Validation before API call
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address!");
      return;
    }

    console.log("Login form submitted:", formData);
    setSubmit(true); // trigger useEffect
  };

  // function gotoUserDash() {
  //   setSubmit(true);
  // }
  return (
    <div className="login-container">
      {/* Background circles */}
      <div className="login-background-circle circle-1"></div>
      <div className="login-background-circle circle-2"></div>
      <div className="login-background-circle circle-3"></div>

      {/* Back button */}
      <div className="back-button" onClick={() => navigate("/prelogin")}>
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
        Back
      </div>

      {/* Main content */}
      <div className="login-content">
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to your SpendSmart account</p>
          </div>

          {/* Login Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <path d="M1 1l22 22" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-btn" onClick={handleSubmit}>
              Sign In
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <button type="button" className="google-btn">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <p className="signup-link">
              Don't have an account? <NavLink to="/signup">SignUp Here</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
