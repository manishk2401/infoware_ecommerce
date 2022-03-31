import React from "react";
import productlist from "../../assets/products.json";
import bannerImg from "../../assets/carousel.json";
import Crouser from "./crouser";
import Productlist from "./productlist";

export default function Index() {
  return (
    <div>
      <Crouser imgs={bannerImg}></Crouser>
      <Productlist productlist={productlist}></Productlist>
    </div>
  );
}
