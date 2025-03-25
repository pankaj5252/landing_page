import React from "react";
import img1 from "../assets/img1.jpg";

const Groups = () => {
  return (
    <>
      <section id="collaboration">
        <div className="container mt-5">
          <div className="row text-white">
            <div className="col-md-6 p-4">
              <button className="btn btn-outline-success text-white rounded-5 fw-bold">
                Team Collaboration
              </button>
              <br />
              <br />
              <h2 className="fw-bold">
                Boost productivity with seamless team collaboration
              </h2>
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
              <p className="d-inline m-1">Real-time communication</p>
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
                  d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 5.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                  fill="green"
                />
                <path
                  d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                  fill="green"
                />
              </svg>
              <p className="d-inline m-1">Task & project management</p>
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
                  d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 5.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                  fill="green"
                />
                <path
                  d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                  fill="green"
                />
              </svg>
              <p className="d-inline m-1">Secure file sharing</p>
            </div>
            <div className="col-md-6">
              <img src={img1} className="w-100 rounded-4 collaboration_img" alt="Collaboration" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Groups;
