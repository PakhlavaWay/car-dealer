import React from "react";
import mirai from '../images/mirai.jpg'

const Vehicle = ({ name, year, price, mileage }) => {
  return (
    <section className="">
      <div>
        <img src={mirai} alt="mirai" className="rounded-md" />
      </div>
      <div className="border-t flex flex-col">
        <p className="text-[1.2rem] truncate text-start font-bold">
          {year} {name}
        </p>
        <div className="text-start">
          <p className="font-bold tracking-[0.25rem] text-[#53494c]">{price}$</p>
          <p className="font-bold tracking-[0.25rem]">{mileage}mi</p>
        </div>
      </div>
    </section>
  );
};

export default Vehicle;
