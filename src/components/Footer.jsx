import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container text-center mt-4 text-white">
        <div className="row">
          <div className="col-md-12">
           <h1>FINDCOLLAB</h1>
            <br />
            <h4>NAVIGATION</h4>
            <div className="d-flex justify-content-center">
              <ul className="d-flex footer_ul">
                <li className="m-2">Home</li>
                <li className="m-2"> About</li>
                <li className="m-2">MemberShip</li>
              </ul>
            </div>
            <div className="d-flex justify-content-center">
              <ul className="d-flex footer_ul">
                <li className="m-2"> Training</li>
                <li className="m-2"> Member Events</li>
                <li className="m-2"> About</li>
                <li className="m-2">Contact</li>
              </ul>
            </div>
            <span>Copyright 2025 | Pankaj kale</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;