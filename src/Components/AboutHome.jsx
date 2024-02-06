import React from "react";
import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <>
      <div className="about-hotel-alpha-2 content-area-6 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft delay-04s align-self-center">
              <div className="text">
                <h5>
                  Welcome To <span>UAC</span>
                </h5>
                <h1>National Coordination Council India</h1>
                <p className="mb-4" id="aboutdesc">
                  We are a nonprofit organization that works to improve the
                  lives of people in need around the world. We have over 25
                  years of experience in human resource management, delivering
                  effective and sustainable solutions to the most pressing
                  challenges of our time. We are a nonprofit organization that
                  works to improve the lives of people in need around the world.
                  We have over 25 years of experience in human resource
                  management, delivering effective and sustainable solutions to
                  the most pressing challenges of our time.
                </p>
                <Link className="btn-1 comon-btn" to={"/aboutus"}>
                  <span>View More</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInRight delay-04s">
              <div className="hotel-banner">
                <img
                  src="img/about.jpg"
                  alt="benilde"
                  className="img-fluid w-100"
                  style={{ paddingTop: "80px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
