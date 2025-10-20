import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`flex items-center justify-between mt-3 px-3 ${
        location === "/" ? "bg-light" : "bg-white"
      }`}
    >
      <Link to="/">
        <img src={assets.logo} alt="" />
      </Link>

      <div
        className={`flex justify-around gap-4 ${
          location === "/" && "bg-light"
        }`}
      >
        {menuLinks.map((links, indexs) => (
          <Link to={links.path} key={indexs}>
            {links.name}
          </Link>
        ))}
      </div>

      <div className="flex border-2 rounded-3xl px-3">
        <input placeholder="Search Products" />
        <img src={assets.search_icon} />
      </div>

      <div>
        <button
          onClick={() => navigate("/owner")}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          DashBoard
        </button>
        <button
          onClick={() => setShowLogin(true)}
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Login
        </button>
      </div>
      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
      </button>
    </div>
  );
};

export default Navbar;

const arr = [1, 2, 3, 4, 5];
