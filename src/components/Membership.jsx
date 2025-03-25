import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div>
      <section id="membership">
        <div className="container mt-5 mb-3 text-white text-center">
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-outline-success text-white rounded-5 fw-bold">
                Membership
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h1>
                Crushing your health and fitness <br /> goals starts here...
              </h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 d-flex mt-3 justify-content-center">
              <div className="card rounded-4 membership_card">
                <div className="card-body p-4">
                  <h2 className="card-title fw-bold">
                    Month to <br /> Month
                  </h2>
                  <b>
                    <span className="fw-bold fs-1 text-secondary">$165</span>/mo
                  </b>
                  <br />
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                      fill="green"
                    />
                    <path
                      d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                      fill="green"
                    />
                  </svg>
                  <span>All classes</span>
                  <br />
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                      fill="green"
                    />
                    <path
                      d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                      fill="green"
                    />
                  </svg>
                  <span>All member events</span>
                  <br />
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                      fill="green"
                    />
                    <path
                      d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                      fill="green"
                    />
                  </svg>
                  <span>Full gym access</span>
                  <br />
                  <br />
                  <p className="text-secondary">
                    Charges every month <br />
                    unless you cancel
                  </p>
                  <br />
                  <button className="btn btn-success rounded-5">
                    <Link
                      to="/start-free-trial"
                      className="text-white text-decoration-none"
                    >
                      Start 7 day free trial
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex mt-3 justify-content-center">
              <div className="card rounded-4 membership_card">
                <div className="card-body p-4">
                  <h2 className="card-title fw-bold">
                    6 Month <br /> Membership
                  </h2>
                  <b>
                    <span className="fw-bold fs-1 text-secondary">$145</span>/mo
                  </b>
                  <br />
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                      fill="green"
                    />
                    <path
                      d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                      fill="green"
                    />
                  </svg>
                  <span>All classes</span>
                  <br />
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                      fill="green"
                    />
                    <path
                      d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                      fill="green"
                    />
                  </svg>
                  <span>All member events</span>
                  <br />
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                      fill="green"
                    />
                    <path
                      d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                      fill="green"
                    />
                  </svg>
                  <span>Full gym access</span>
                  <br />
                  <br />
                  <p className="text-secondary">
                    Charges every 6 months <br />
                    unless you cancel
                  </p>
                  <br />
                  <button className="btn btn-success rounded-5">
                    <Link
                      to="/start-free-trial"
                      className="text-white text-decoration-none"
                    >
                      Start 7 day free trial
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex mt-3 justify-content-center">
              <div className="card rounded-4 membership_card">
                <div className="card-body p-4">
                  <h2 className="card-title fw-bold">
                    1 Year <br /> Membership
                  </h2>
                  <b>
                    <span className="fw-bold fs-1 text-secondary">$125</span>/mo
                  </b>
                  <br />
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                      fill="green"
                    />
                    <path
                      d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                      fill="green"
                    />
                  </svg>
                  <span>All classes</span>
                  <br />
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                      fill="green"
                    />
                    <path
                      d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                      fill="green"
                    />
                  </svg>
                  <span>All member events</span>
                  <br />
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                      fill="green"
                    />
                    <path
                      d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                      fill="green"
                    />
                  </svg>
                  <span>Full gym access</span>
                  <br />
                  <br />
                  <p className="text-secondary">
                    Charges every year <br />
                    unless you cancel
                  </p>
                  <br />
                  <button className="btn btn-success rounded-5">
                    <Link
                      to="/start-free-trial"
                      className="text-white text-decoration-none"
                    >
                      Start 7 day free trial
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;