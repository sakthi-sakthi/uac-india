import React from "react";
import { Link } from "react-router-dom";

const OurFacilities = () => {
  return (
    <>
      <div className="main-title">
        <h1 className="mt-4">St. Vincent’s Threefold Inspiration</h1>
      </div>
      <div className="our-facilties-section-2">
        <div className="container">
          <div className="row wow fadeInUp delay-04s">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="services-box">
                <div className="number">1</div>
                <div>
                  <img src="img/mission.jpg" className="imgwid" alt="" />
                </div>
                <div className="detail">
                  <h3>
                    <a href="/">Mission</a>
                  </h3>
                  <p>
                    “To all holy ends, near and far, anywhere in the world!”
                    Explore the extraordinary missionary impulse of our Founder,
                    in over 50 countries.
                  </p>
                  <Link className="btn-1 comon-btn mt-2" to={"/aboutus"}>
                    <span>Pallottine Missions</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="services-box">
                <div className="number">2</div>
                <div>
                  <img src="img/faith1.jpg" className="imgwid" alt="" />
                </div>
                <div className="detail">
                  <h3>
                    <a href="/">Revive Faith</a>
                  </h3>
                  <p>
                    “An ever increasing zeal!”
                    <br />
                    Pallotti invited all the faithful in the great evangelical
                    undertaking to rekindle the faith, &amp; make it known.
                  </p>
                  <Link className="btn-1 comon-btn mt-2" to={"/aboutus"}>
                    <span> New Evangelization</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="services-box">
                <div className="number">3</div>
                <div>
                  <img src="img/charity1.jpg" className="imgwid" alt="" />
                </div>

                <div className="detail">
                  <h3>
                    <a href="/">Rekindle Charity</a>
                  </h3>
                  <p>
                    “Jesus points out the necessity of charitable aid for the
                    evangelical ministry!” All are obliged to help each other.
                  </p>
                  <Link className="btn-1 comon-btn mt-2" to={"/aboutus"}>
                    <span>Pallottine Charity</span>
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

export default OurFacilities;
