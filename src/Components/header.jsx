import React from "react";

const Header = () => {
  return (
    <>
      <header className="top-header" id="top-header-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-7 col-7">
              <div className="list-inline">
                <i className="fa fa-phone text-white" />
                &nbsp;
                <a href="tel:9943339446" className="hoverlinkcolorhead">
                  +91-9943339446
                </a>
                <i className="fa fa-envelope text-white" />
                &nbsp;
                <a
                  href="mailto:uacnccin@gmail.com"
                  className="d-none-768 hoverlinkcolorhead">
                  uacnccin@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-5 col-5">
              <ul className="top-social-media pull-right">
                <li>
                  <a href="/" className="social-icon facebook">
                    <i className="fa fa-facebook text-white"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="social-icon twitter">
                    <i className="fa fa-twitter text-white"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="social-icon instagram">
                    <i className="fa fa-instagram text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
