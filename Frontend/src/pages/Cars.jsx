import React from "react";
import { assets, dummyCarData } from "../assets/assets";
import CarCard from "../compoents/CarCard";

const Cars = () => {
  return (
    <div>
      <div>
        <h1>Availabel Cars</h1>
        <p>Pick our luxury car for your next adventure</p>
        <div>
          <img src={assets.search_icon} />
          <input className="border-2" type="text" />
          <img src={assets.filter_icon} />
        </div>
      </div>

      <div>
        {dummyCarData.map((carinfo, idx) => (
          <CarCard carinfo={carinfo} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
