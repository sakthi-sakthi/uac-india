import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiUrl } from "../../API/Api";
import styled from "styled-components";
const ImageGallery = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [fidata, setfidata] = useState([]);
  const [idd, getid] = useState();

  const NoDataContainer = styled.div`
    text-align: center;
    margin-top: 5em;
  `;

  useEffect(() => {
    axios
      .get(`${ApiUrl}/get/gallery_images`)
      .then((response) => {
        setPortfolioItems(response?.data?.data);
        setfidata(response?.data?.data);
        if (Array.isArray(response?.data?.data)) {
          const groupedCategories = response.data.data.reduce((acc, item) => {
            const category = acc.find((cat) => cat.title === item.title);

            if (category) {
              category.images.push(item.image);
            } else {
              acc.push({
                title: item.title,
                images: [item.image],
                date: item.date,
                id: item.category_id,
              });
            }
            return acc;
          }, []);

          groupedCategories.sort((a, b) => b.date - a.date);
          const latestCategories = groupedCategories.slice(0, 4);
          setCategories(latestCategories);
        } else {
          console.error("Invalid API response format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleClick = (id) => {
    let filteredData;

    if (id !== "all") {
      filteredData = portfolioItems.filter((item) => item.category_id === id);
      getid(id);
    } else {
      filteredData = portfolioItems;
    }

    if (filteredData.length === 0) {
      return (
        <NoDataContainer>
          <b>No Gathering Hall Data Available </b>
        </NoDataContainer>
      );
    }

    setfidata(filteredData);
  };
  return (
    <>
      <div className="photo-gallery">
        <div className="container">
          <div className="main-title">
            <h1>Our Gallery</h1>
            <p>
              Step into Our Gallery, where each canvas whispers a unique tale
              through strokes of creativity and emotion.
            </p>
          </div>
          <ul className="list-inline-listing filters filters-listing-navigation">
            <li
              className="active btn filtr-button filtr"
              data-filter="all"
              onClick={() => handleClick("all")}>
              All
            </li>
            {categories?.map((member, index) => (
              <li
                data-filter={member.id}
                className={`${
                  member.id === idd ? "active" : ""
                } btn btn-inline filtr-button filtr`}
                onClick={() => handleClick(member.id)}>
                {member.title}
              </li>
            ))}
          </ul>
          <div className="row filter-portfolio">
            {fidata?.map((item) => (
              <div
                className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                data-category={item.category_id}
                key={item.id}>
                <figure className="portofolio-thumb">
                  <a href="/">
                    <img
                      src={item.image}
                      alt="g2"
                      className="img-fluid w-100"
                    />
                  </a>
                  <figcaption>
                    <div className="figure-content">
                      <h3 className="title">{item.date}</h3>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
