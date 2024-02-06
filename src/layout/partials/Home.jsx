import { useEffect, useState } from "react";
import axios from "axios";
import { ApiUrl } from "../../API/Api";
import MenuBar from "../../Components/MenuBar";
import SliderImage from "../../Components/SliderImage";
import AboutHome from "../../Components/AboutHome";
import HomeRooms from "../../Components/HomeRooms";
import OurFacilities from "../../Components/OurFacilities";
import HomeContact from "../../Components/HomeContact";
import AllDetails from "../../Components/AllDetails";
import { Latestproject } from "../../Components/Latestproject";
import { Youtube } from "../../Components/youtube";
import Footer from "../../Components/Footer";
import Header from "../../Components/header";

const Home = () => {
  const [homedata, setHomedata] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/get/homepagee/sections`);
        setHomedata(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(homedata);
  return (
    <>
      <Header />
      <MenuBar menudata={homedata?.headermenudata} />
      <SliderImage sliderdata={homedata?.SlidesData} />
      <AboutHome />
      <HomeRooms projectdata={homedata?.projectdata} />
      <OurFacilities />
      <HomeContact />
      <AllDetails testimonials={homedata?.testmonialdata} />
      <Latestproject projectdata={homedata?.newslettersdata} />
      <Youtube />
      <Footer />
    </>
  );
};

export default Home;
