import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const CarCard = ({ carinfo }) => {
  console.log(carinfo);
  const navigate = useNavigate();
  return (
    <div
      className="relative max-w-52 cursor-pointer"
      onClick={() => navigate(`/cars-details/${carinfo._id}`)}
    >
      <div>
        <img src={carinfo.image} alt="" />
      </div>
      {carinfo.isAvaliable && (
        <div className="absolute top-0 left-0">Availiable Now</div>
      )}
      <div className="absolute bottom-5 right-0">{`₹${carinfo.pricePerDay}`}</div>
      <div>
        <span>{carinfo.brand}</span>
        <span>{carinfo.model}</span>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <img src={assets.users_icon} />
          <p>{carinfo.seating_capacity} Seats </p>
        </div>
        <div>
          <img src={assets.fuel_icon} />
          <p>{carinfo.fuel_type} </p>
        </div>
        <div>
          <img src={assets.fuel_icon} />
          <p>{carinfo.transmission} </p>
        </div>
        <div>
          <img src={assets.location_icon} />
          <p>{carinfo.location} </p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
