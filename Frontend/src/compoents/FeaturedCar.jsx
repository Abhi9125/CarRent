import React from "react";
import Title from "./Title";
import { dummyCarData } from "../assets/assets";
import CarCard from "./CarCard";
import { useNavigate } from "react-router-dom";
const FeaturedCar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Title />
      {dummyCarData.map((carinfo) => (
        <CarCard carinfo={carinfo} key={carinfo._id} />
      ))}
      <button onClick={() => navigate("/cars")}>Explore all cars</button>
    </div>
  );
};

export default FeaturedCar;
