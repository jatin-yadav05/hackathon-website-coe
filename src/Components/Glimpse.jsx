import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Glimpse = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  const settingss = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
    rtl: true
  };
  return (
    <>
      <div className="w-full mt-28 h-36  flex justify-center items-center">
        <div className="w-4/5 lg:w-3/5 h-full ">
          <div
            className="w-16 h-1 border-t-2"
            style={{ borderColor: "red" }}
          ></div>
          <p
            className="text-5xl"
            style={{
              color: "#45B6BC",
              fontFamily: "'Mukta', serif",
              fontWeight: 700,
            }}
          >
            Glimpse of COE{" "}
          </p>
          <p
            className="text-4xl"
            style={{
              color: "#45B6BC",
              fontFamily: "'Mukta', serif",
              fontWeight: 200,
            }}
          >
            Previous Events
          </p>
        </div>
      </div>
      {/* carousel */}
      <div className="slider-container w-full h-max pb-2 overflow-hidden">
        <Slider {...settings}>
          <div className="p-1 border-2 border-yellow-100">
            <img src="vivek.jpg" alt="" />
          </div>
          <div className="p-1 border-2 border-yellow-100">
            <img src="second.png" alt="" />
          </div>
          <div className="p-1 border-2 border-yellow-100">
            <img src="first.jpg" alt="" />
          </div>
          <div className="p-1 border-2 border-yellow-100">
            <img src="third.jpg" alt="" />
          </div>
          <div className="p-1 border-2 border-yellow-100">
            <img src="fourth.jpg" alt="" />
          </div>
          <div className="p-1 border-2 border-yellow-100">
            <img src="sixth.png" alt="" />
          </div>
        </Slider>
      </div>
      {/* Carousel 2 */}
      <div className="slider-container w-full h-max pb-2 overflow-hidden">
        <Slider {...settingss}>
          <div className="p-1 border-2 border-yellow-100">
            <img src="seven.png" alt="" />
          </div>
          <div className="p-1 border-2 border-yellow-100">
            <img src="eight.png" alt="" />
          </div>
          <div className="p-1 border-2 border-yellow-100">
            <img src="nine.png" alt="" />
          </div>
          <div className="p-1 border-2 border-yellow-100">
            <img src="ten.png" alt="" />
          </div>
          <div className="p-1 border-2 border-yellow-100">
            <img src="eleven.png" alt="" />
          </div>
          <div className="p-1 border-2 border-yellow-100">
            <img src="tw.png" alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Glimpse;
