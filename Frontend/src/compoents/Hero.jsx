import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";

const Hero = () => {
  const [pickupLocation, setPickUpLocation] = useState("");
  return (
    <div className="min-h-screen max-w-screen flex flex-col justify-center items-center">
      <h1>Rent Your Favirate Car</h1>

      <div className="border-2 max-w-8/12 rounded-4xl px-4">
        <form className="flex justify-between">
          <div>
            <select
              required
              onChange={(e) => {
                setPickUpLocation(e.target.value);
              }}
            >
              <option value="">Pickup Location</option>
              {cityList.map((city, indexs) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <p>
              {pickupLocation.length !== 0
                ? pickupLocation
                : "Please select location"}
            </p>
          </div>
          <div>
            <p>Pick-up Date</p>
            <input
              type="date"
              id=""
              min={new Date().toISOString().split("T")[0]}
              required
            />
            {console.log(new Date())}
          </div>
          <div>
            <p>Return Date</p>
            <input type="date" id="date" />
          </div>
        </form>

        <div>
          <img src={assets.search_icon} />
          <button>search</button>
        </div>
      </div>

      <img src={assets.main_car} />
    </div>
  );
};

export default Hero;
