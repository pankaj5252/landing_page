import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
      <nav className="navbar navbar-expand-lg p-0 text-white">
        <div className="container">
          <h2 className="p-2">
          CrossFit Gym
          </h2>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div
            className="collapse navbar-collapse md-d-flex justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="nav-link text-white active"
                aria-current="page"
                href="#offer"
              >
                CrossFit
              </a>
              <a className="nav-link text-white" href="#membership">
                Membership
              </a>
              <a className="nav-link text-white" href="#about">
                About
              </a>
              <a className="nav-link text-white" href="#about">
                Contact
              </a>
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
                    Login Now
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
