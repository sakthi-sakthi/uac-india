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

  @media (max-width: 600px) {
    table,
    th,
    td {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  }
`;

const AboutUs = () => {
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
        <b>No History Data Available</b>
      </NoDataContainer>
    );
  }

  const filteredData = data.filter((item) => item.id === 4);

  if (filteredData.length === 0) {
    return (
      <NoDataContainer>
        <b>No matching data found</b>
      </NoDataContainer>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {filteredData.map((item) => (
            <div key={item.id}>
              <h1 className="text-center">{item.title}</h1>
              <br />
              <StyledContent
                dangerouslySetInnerHTML={{
                  __html: `<style>table { width: 100%; max-width: 100%; border-collapse: collapse; } table, th, td { border: 1px solid #ddd; padding: 8px; text-align: left; } @media (max-width: 600px) { table, th, td { display: block; width: 100%; box-sizing: border-box; } } </style>${item.content}`,
                }}
              />
              <br />
              <a
                className="btn-1 comon-btn"
                href="/img/2008+-+General+Statutes+-+Complete+English+Text.pdf"
                download="General-Statutes">
                <span>General Statutes</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
