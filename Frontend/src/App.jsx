import React, { useState } from "react";
import Navbar from "./compoents/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";
import Cars from "./pages/Cars";
import MyBookings from "./pages/myBookings";
import Layout from "./pages/owner/Layout";
import DashBoard from "./pages/owner/DashBoard";
import AddCar from "./pages/owner/AddCar";
import MangeCar from "./pages/owner/MangeCar";
import ManageBooking from "./pages/owner/ManageBooking";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  console.log(isOwnerPath);
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars-details/:id" element={<CarDetail />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-booking" element={<MyBookings />} />
        <Route path="/owner" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<MangeCar />} />
          <Route path="manage-bookings" element={<ManageBooking />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
