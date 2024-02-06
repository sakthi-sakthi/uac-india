import React from "react";

function MainFooter() {
  return (
    <>
      <footer className="site-footer" style={{ paddingTop: "20px" }}>
        <div className="footer-widgets">
          <div className="container">
            <div style={{ marginBottom: "-17px" }}>
              <p
                className="text-center"
                style={{ fontSize: "15px", color: "white" }}>
                Copyright © 2024 National Coordination Council India, All rights
                reserved. Powered by
                <a
                  className="tech"
                  style={{ color: "#ffd700", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.boscosofttech.com/">
                  &nbsp;Boscosofttech
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainFooter;
