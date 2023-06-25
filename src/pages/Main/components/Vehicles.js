import React from "react";
import MySwiper from "../../../helpers/swiper/MySwiper";
import { NavLink } from "react-router-dom";
import Vehicle from "./Vehicle";

const Vehicles = () => {
  const cars = [
    {
      year: 2023,
      name: "Toyota Mirai",
      price: '45,000',
      mileage: '32,000'
    },
    {
      year: 2021,
      name: "Honda Insight",
      price: '45,000',
      mileage: '32,000'
    },
    {
      year: 2020,
      name: "Lexus CT200",
      price: '45,000',
      mileage: '32,000'
    },
    {
      year: 2019,
      name: "Lexus 470",
      price: '45,000',
      mileage: '32,000'
    },
    {
      year: 2021,
      name: "Toyota Highlander LXE",
      price: '45,000',
      mileage: '32,000'
    },
    {
      year: 2019,
      name: "Dodge Challenger",
      price: '45,000',
      mileage: '32,000'
    },
    {
      year: 2023,
      name: "Dodge Charger",
      price: '45,000',
      mileage: '32,000'
    },
    {
      year: 2022,
      name: "Toyota Prius",
      price: '45,000',
      mileage: '32,000'
    },
  ];
  return (
    <section className="py-8">
      <div className="myWrapper">
        <h2 className="text-[#53494c] text-[clamp(3rem,_0.46vw,_3.8rem)] leading-tight tracking-widest pb-4 w-fit m-auto px-4">
          Featured Vehicles
        </h2>
        {/* <MySwiper /> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cars.map((car) => <Vehicle year={car.year} name={car.name} price={car.price} mileage={car.mileage}/>)}
        </div>
        <NavLink to={"/"}>
          <p className="mt-8 rounded-md text-center w-fit border border-[#53494c] px-6 py-3 min-w-fit mx-auto text-white bg-[#53494c] font-bold text-[clamp(1rem,_0.2vw,_3rem)]">
            View more
          </p>
        </NavLink>
      </div>
    </section>
  );
};

export default Vehicles;
