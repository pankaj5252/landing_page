import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img2.jpg";
import img2 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div id="offer">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-white text-center box-title">
                Browse Category by Talent
              </h2>
            </div>
          </div>
          <div className="row md-d-flex justify-content-center mt-5 mb-3 p-4">
            {[ 
              { img: img1, title: "Fashion" },
              { img: img2, title: "Makeup" },
              { img: img4, title: "Skincare" },
              { img: img3, title: "LifeStyle" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="col-md-3 mt-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div 
                  className="card rounded-4 border-0 overflow-hidden card_img"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={item.img} className="card-img-top opacity-75 h-100" alt={item.title} />
                  <div className="card-body position-absolute text-white">
                    <Link to="" className="text-decoration-none text-white">
                      <h2 className="card-title fw-bold mt-5 text-center">
                        {item.title}
                      </h2>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;