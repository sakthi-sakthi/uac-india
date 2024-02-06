import React from "react";

const SliderImage = ({ sliderdata }) => {
  return (
    <>
      <div className="banner" id="banner1">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel">
          <div className="carousel-inner">
            {sliderdata?.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  className="d-block w-100 img-fluid"
                  src={item.image}
                  alt={`banner-${index}`}
                  style={{ height: "580px", maxHeight: "100%" }}
                  id="HomeSlider"
                />
                <div className="carousel-caption banner-slider-inner d-flex h-100">
                  <div className="carousel-content container align-self-center">
                    <div className="text-center">
                      {/* <div className="max-area2">
                                                <h1>{item.title}</h1>
                                                {item.content !== null ? (
                                                    <p>{item.content}</p>
                                                ) : null}
                                            </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SliderImage;
