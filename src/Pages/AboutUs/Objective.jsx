import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { ApiUrl } from "../../API/Api";

const LoadingContainer = styled.div`
  text-align: center;
  margin-top: 5em;
`;

const NoDataContainer = styled.div`
  text-align: center;
  margin-top: 5em;
`;

const StyledContent = styled.div`
  text-align: justify;
  max-width: 100%;
  overflow: hidden;
  color: black !important;
`;

const Objective = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/get/Pages`);
        setData(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <b>Loading...</b>
      </LoadingContainer>
    );
  }

  if (!data || data.length === 0) {
    return (
      <NoDataContainer>
        <b>No Objective Room Data Available</b>
      </NoDataContainer>
    );
  }

  const filteredData = data.filter((item) => item.id === 7);

  if (filteredData.length === 0) {
    return (
      <NoDataContainer>
        <b>No Objective Room Data Available </b>
      </NoDataContainer>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {filteredData.map((item) => (
            <div key={item.id}>
              <h1 className="text-center " style={{ fontWeight: "600" }}>
                {item.title}
              </h1>
              <StyledContent
                dangerouslySetInnerHTML={{ __html: `${item.content}` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Objective;
