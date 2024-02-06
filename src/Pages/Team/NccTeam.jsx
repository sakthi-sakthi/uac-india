import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiUrl } from "../../API/Api";
import axios from "axios";
export const NccTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  console.log(teamMembers);
  useEffect(() => {
    axios
      .get(`${ApiUrl}/get/team/7`)
      .then((response) => {
        setTeamMembers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
      });
  }, []);
  return (
    <>
      <div className="content-area hotel-section bg-grey">
        <div className="overlay">
          <div className="container">
            <div className="main-title">
              <h1 style={{ color: "white" }}>NCC Team</h1>
            </div>

            <div className="row wow fadeInUp delay-04s">
              {teamMembers?.length === 0 ? (
                <div className="col-12">
                  <p>
                    <b>
                      <center>No data available at the moment.</center>
                    </b>
                  </p>
                </div>
              ) : (
                teamMembers?.map((member, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="hotel-box">
                      <div className="photo-thumbnail">
                        <div className="photo">
                          <img src={member?.image} alt={member?.title} />
                          <Link to={`roomdetails?roomId=${member?.id}`}>
                            <span className="blog-one__plus" />
                          </Link>
                        </div>
                      </div>
                      <div className="detail clearfix">
                        <h3>
                          <Link to={`roomdetails?roomId=${member?.id}`}>
                            {member?.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
