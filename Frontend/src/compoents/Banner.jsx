import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="flex border-2">
      <div>
        <h1>Do you want ride a luxury car</h1>
      </div>
      <div>
        <img src={assets.banner_car_image} />
      </div>
    </div>
  );
};

export default Banner;
