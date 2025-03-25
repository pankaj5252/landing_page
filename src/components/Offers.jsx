import React from "react";
import img1 from "../assets/img1 (1).jpg";
import img2 from "../assets/img1 (2).jpg";
import img3 from "../assets/img1 (3).jpg";
import img4 from "../assets/img1 (4).jpg";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <>
      <div id="offer">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-white text-center box-title">
                We offer something for <br /> everybody
              </h2>
            </div>
          </div>
          <div className="row md-d-flex justify-content-center mt-5 mb-3 p-4">
            <div className="col-md-3 mt-3">
              <div className="card rounded-4 border-0rounded-4 border-0 overflow-hidden card_img ">
                <img
                  src={img1}
                  className="card-img-top opacity-75 h-100"
                  alt="..."
                />
                <div className="card-body position-absolute text-white">
                  <Link to="" className="text-decoration-none text-white">
                    <h2 className="card-title fw-bold mt-5 text-center">
                      Group CrossFit classes
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="card rounded-4 border-0 overflow-hidden card_img">
                <img
                  src={img2}
                  className="card-img-top opacity-75 h-100"
                  alt="..."
                />
                <div className="card-body position-absolute text-white">
                  <Link to="" className="text-decoration-none text-white">
                    <h2 className="card-title fw-bold mt-5 text-center">
                      Strength Training
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="card rounded-4 border-0 overflow-hidden card_img">
                <img
                  src={img3}
                  className="card-img-top opacity-75 h-100"
                  alt="..."
                />
                <div className="card-body position-absolute text-white">
                  <Link to="" className="text-decoration-none text-white">
                    <h2 className="card-title fw-bold mt-5 text-center">
                      Personal Training
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="card rounded-4 border-0 overflow-hidden card_img">
                <img
                  src={img4}
                  className="card-img-top opacity-75 h-100"
                  alt="..."
                />
                <div className="card-body position-absolute text-white">
                  <Link to="" className="text-decoration-none text-white">
                    <h2 className="card-title fw-bold mt-5 text-center">
                      Member Only Events
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;