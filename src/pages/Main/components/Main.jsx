import React from "react";
import styles from "./Main.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Main = () => {
  return (
    <section className={styles.main}>
      <div className="w-[60%] m-auto h-full flex items-center flex-col justify-center gap-5 relative text-[#f8f8f0]">
        <p className="border-b text-4xl text-extrabold pb-2 px-4">
          Mr.John's Car Dealer LLC
        </p>
        <h1 className="leading-none font-bold text-[clamp(3.5rem,5.3vw,_5rem)]">
          Let us help you find your dream car
        </h1>
        <div className="flex gap-6">
          <button className="rounded-md bg-[#f2efeb] text-black px-6 py-2 text-sm tracking-widest">
            BUY A CAR
          </button>
          <button className="rounded-md bg-[#f2efeb] text-black px-6 py-2 text-sm tracking-widest">
            LIST A CAR
          </button>
        </div>
        <div className="absolute bottom-10 flex flex-col gap-2">
          <div className="flex gap-2 items-end">
            <LocalPhoneIcon />
            <a href="tel:+15139660714">(513) 966-0714</a>
          </div>
          <div className="flex gap-2 items-end">
            <LocationOnIcon />
            <p>45040 Skyview Dr., Mason, OH</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
