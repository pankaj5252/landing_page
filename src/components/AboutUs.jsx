import React from "react";

const AboutUs = () => {
  return (
    <>
      <section id="about">
        <div className="container mt-5 text-white">
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn btn-outline-success text-white rounded-5 fw-bold">
                About FINDCOLLAB
              </button>
              <h2 className="fw-bold mb-4">
                Hi! Welcome to our Company Collaboration Platform.
              </h2>
              <p>
                Our platform was designed to enhance teamwork, streamline
                communication, and boost productivity. Since our launch, we've
                been committed to helping businesses collaborate efficiently,
                manage projects seamlessly, and stay connected—no matter where
                they are.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <h2 className="fw-bold text-center">
                Claim your 7 day free trial
              </h2>
              <div className="p-5">
                <form>
                  <input
                    type="text"
                    className="form-control p-3 mt-3"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="form-control p-3 mt-3"
                    placeholder="Email"
                  />
                  <input
                    type="number"
                    className="form-control p-3 mt-3"
                    placeholder="Mobile number"
                  />
                  <select
                    name="membership"
                    id="membership"
                    className="form-control p-3 mt-3"
                  >
                    <option value="">Membership interest...</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                  </select>
                  <div className="text-center">
                    <button type="submit" className="btn btn-success mt-3">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906969727!2d73.69815309340439!3d18.524870610788835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710937390606!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowFullScreen
                  style={{ border: 'none' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
