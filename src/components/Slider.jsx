import React from "react";
import slider1 from "../assets/img1 (1).jpg";
import slider2 from "../assets/img1 (2).jpg";
import slider3 from "../assets/img1 (3).jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators text-white">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slider1}
              className="d-block w-100 opacity-50 slider_img"
              alt="..."
            />
            <div className="carousel-caption position-absolute slider_dis top-0 z-1 text-center">
              <h1>
                Crush your health and <br /> fitness goals in no time
              </h1>
              <p>
                It doesn’t matter if your goal is to get stronger, burn fat, or
                to just stay fit our <br />
                world className coaches will guide you every step of the way.
              </p>
              <button className="btn btn-success rounded-5">
                {userEmail ? (
                  <>
                    <span className="me-3 mt-2 fw-bold">
                      Welcome, {userEmail}
                    </span>
                    <button onClick={handleLogout} className="btn btn-danger">
                      Logout
                    </button>
                  </>
                ) : (
                  <button className="btn btn-success rounded-5">
                    <Link
                      to="/login"
                      className="text-white text-decoration-none"
                    >
                      Login Now too Start Free Trail...
                    </Link>
                  </button>
                )}
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider2}
              className="d-block w-100 opacity-50 slider_img"
              alt="..."
            />
            <div className="carousel-caption  position-absolute slider_dis top-0 z-1 text-center">
              <h1>
                Crush your health and <br /> fitness goals in no time
              </h1>
              <p>
                It doesn’t matter if your goal is to get stronger, burn fat, or
                to just stay fit our
                <br />
                world className coaches will guide you every step of the way.
              </p>
              <button className="btn btn-success rounded-5">
                {userEmail ? (
                  <>
                    <span className="me-3 mt-2 fw-bold">
                      Welcome, {userEmail}
                    </span>
                    <button onClick={handleLogout} className="btn btn-danger">
                      Logout
                    </button>
                  </>
                ) : (
                  <button className="btn btn-success rounded-5">
                    <Link
                      to="/login"
                      className="text-white text-decoration-none"
                    >
                         Login Now too Start Free Trail...
                    </Link>
                  </button>
                )}
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider3}
              className="d-block w-100 opacity-50 slider_img"
              alt="..."
            />
            <div className="carousel-caption  position-absolute slider_dis top-0 z-1 text-center">
              <h1>
                Crush your health and <br /> fitness goals in no time
              </h1>
              <p>
                It doesn’t matter if your goal is to get stronger, burn fat, or
                to just stay fit our
                <br />
                world className coaches will guide you every step of the way.
              </p>
              <button className="btn btn-success rounded-5">
                {userEmail ? (
                  <>
                    <span className="me-3 mt-2 fw-bold">
                      Welcome, {userEmail}
                    </span>
                    <button onClick={handleLogout} className="btn btn-danger">
                      Logout
                    </button>
                  </>
                ) : (
                  <button className="btn btn-success rounded-5">
                    <Link
                      to="/login"
                      className="text-white text-decoration-none"
                    >
                         Login Now too Start Free Trail...
                    </Link>
                  </button>
                )}
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
