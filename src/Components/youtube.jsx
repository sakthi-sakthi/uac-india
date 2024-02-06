import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApiUrl } from "../API/Api";
export const Youtube = () => {
  const [videosData, setVideosData] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isSliderPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        const apiUrl = `${ApiUrl}/youtube/vedios`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch YouTube videos");
        }
        const responseData = await response.json();
        if (
          responseData.success &&
          responseData.data &&
          responseData.data.length > 0
        ) {
          const videoInfo = responseData.data[0];
          const apiKey = videoInfo.apikey;
          const channelId = videoInfo.channelid;
          const counts = videoInfo.counts;
          const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=${counts}&key=${apiKey}`;
          const youtubeResponse = await fetch(youtubeApiUrl);
          const youtubeData = await youtubeResponse.json();

          if (youtubeData.items) {
            const reversedVideosData = youtubeData.items
              .map((item) => `https://www.youtube.com/embed/${item.id.videoId}`)
              .reverse();
            setVideosData(reversedVideosData);
            setLoading(false);
          } else {
            setLoading(false);
            setError("No Video Data Available");
          }
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error.message);
      }
    };

    fetchYouTubeVideos();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isSliderPaused) {
        setCurrentVideoIndex((prevIndex) =>
          prevIndex === videosData.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isSliderPaused, videosData.length, currentVideoIndex]);

  const testimonialsPerRow = 3;

  const sliderSettings = {
    dots: true,
    arrows: true,
    autoplay: true,
    loop: true,
    autoplaySpeed: 4000,
    slidesToShow: testimonialsPerRow,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (loading) {
    return (
      <h6>
        <b>Loading...</b>
      </h6>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section style={{ color: "#000", backgroundColor: "#f3f2f2" }}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h1 className="fw-bold mb-4">Stories in Motion</h1>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              "Stories in Motion: Where Narratives Come to Life Through Dynamic
              Journeys"
            </p>
          </div>
        </div>
        <Slider {...sliderSettings}>
          {videosData.map((videoUrl, index) => (
            <div key={index}>
              <div className="d-flex justify-content-center mb-4">
                <iframe
                  src={videoUrl}
                  width={360}
                  height={200}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    width: "360px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
