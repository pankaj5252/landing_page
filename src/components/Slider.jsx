import React, { useState, useEffect } from "react";
import slider1 from "../assets/img5.jpg";
import { Link, useNavigate } from "react-router-dom";

const Slider = () => {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    setUserEmail(email);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    navigate("/");
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={slider1}
            className="d-block w-100 opacity-50 slider_img"
            alt="..."
          />
          <div className="carousel-caption position-absolute slider_dis top-0 z-1 text-center">
            <h1>
            Find the best Influencers for your marketing campaign
            </h1>
            <p>
            Work with talented Influencers at affordable price to get the best out of your time & cost
            </p>
            <div>
              {userEmail ? (
                <>
                  <span className="me-3 mt-2 fw-bold">Welcome, {userEmail}</span>
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
                </>
              ) : (
                <button className="btn btn-success rounded-5">
                  <Link to="/login" className="text-white text-decoration-none">
                  Get Started
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
