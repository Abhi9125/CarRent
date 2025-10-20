import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    setCar(dummyCarData.find((cardetails) => cardetails._id === id));
  }, [id]);

  console.log(car);

  return car === null ? (
    <div> Loading...</div>
  ) : (
    <div>
      <button onClick={() => navigate(-1)} className="border-2">
        Back to the all cars
      </button>

      <div>
        <div>
          <img src={car.image} alt="" />
          <h1>{`${car.brand} ${car.model} ${car.category}`}</h1>
          <hr></hr>

          <div className="grid grid-cols-4">
            <div>
              <img src={assets.users_icon} />
              <p>{car.seating_capacity}</p>
            </div>
            <div>
              {" "}
              <img src={assets.users_icon} />
              <p>{car.seating_capacity}</p>
            </div>
            <div>
              {" "}
              <img src={assets.users_icon} />
              <p>{car.seating_capacity}</p>
            </div>
            <div>
              {" "}
              <img src={assets.users_icon} />
              <p>{car.seating_capacity}</p>
            </div>
          </div>
        </div>
        <form>
          <label>{`₹ ${car.pricePerDay} per day`}</label>
          <hr></hr>
          <label>Pickup Date</label>
          <br />
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            required
          />
          <label>Return Date</label>
          <br />
          <input type="date" required />
        </form>
      </div>
    </div>
  );
};

export default CarDetail;
