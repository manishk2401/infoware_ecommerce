import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.css";

export default function Crouser(props) {
  function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", paddingTop: "2px", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };
  return (
    <div>
      <div style={{ padding: "25px", background: "rgb(135 235 218 / 54%)", borderRadius: "20px", margin: "10px" }}>
        <Slider {...settings}>
          {props.imgs.map((img) => (
            <div key={img}>
              <div style={{ width: "100%", height: "200px", padding: "10px" }}>
                {/* here we can use image as background also */}
                {/* <img style={{ width: "50%", minWidth: "400px", height: "100%", margin: "auto" }} src={img.img} /> */}
                <img className={style.bannerBg} style={{ width: "100%" }} src={img.img} />
                <img className={style.bannerImg} src={img.img} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
