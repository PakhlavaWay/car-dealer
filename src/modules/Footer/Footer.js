import React from "react";
import address from "./images/address.PNG";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 bg-[#efede9]">
      <div className="myWrapper text-[#59494c] flex justify-between items-center">
        <div className="w-[47%] ml-auto flex flex-col gap-4 h-full justify-between">
          <h3 className="text-[#59494c] text-[clamp(1.5rem,_2.5vw,_2.5rem)]">Mr.John's Car Dealer LLC</h3>
          <img src={address} alt="address" className="rounded-md w-[60%] m-auto" />
        </div>
        <div className="w-[30%] text-start mx-auto flex flex-col justify-between h-full">
          <div>
            <h3 className="text-[clamp(2rem,_3.125vw,_3rem)] font-bold">
              Contact Us
            </h3>
            <p className="text-[clamp(0.8rem,_1.25vw,_1.5rem)]">
              4504 Skyview Dr., Mason, OH
            </p>
            <p className="text-[clamp(0.8rem,_1.25vw,_1.5rem)]">
              4323 Lincoln's Rd., Columbus, OH
            </p>
            <div>
              <a href='tel:+15139660714' className="text-[clamp(0.8rem,_1.25vw,_1.5rem)]">(513) 966-0714</a>
            </div>
            
            <NavLink to='/' className="text-[clamp(0.8rem,_1.25vw,_1.5rem)]">
              yourcompany@gmail.com
            </NavLink>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[clamp(2rem,_3.125vw,_3rem)] font-bold">
              Business Hours
            </h3>
            <div className="flex gap-6">
              <div>
                <p className="text-[clamp(0.8rem,_1.25vw,_1.5rem)]">
                  Monday to Friday
                </p>
                <p className="text-[clamp(0.8rem,_1.25vw,_1.5rem)] mb-2">
                  9:00 am to 6:00 pm
                </p>
              </div>
              <div>
                <p className="text-[clamp(0.8rem,_1.25vw,_1.5rem)]">Saturday</p>
                <p className="text-[clamp(0.8rem,_1.25vw,_1.5rem)]">
                  9:00 am to 4 pm
                </p>
              </div>
            </div>

            <p className="text-[clamp(0.8rem,_1.25vw,_1.5rem)]">
              Sunday by appointment only.
            </p>
          </div>
          <div>
            <h3 className="text-[clamp(2rem,_3.125vw,_3rem)] font-bold">
              Get Social
            </h3>
            <div className="flex gap-4">
              <NavLink to={"/"}>
                <FacebookIcon className="hover:opacity-70 hover:cursor-pointer" />
              </NavLink>
              <NavLink to={"/"}>
                <TwitterIcon className="hover:opacity-70 hover:cursor-pointer" />
              </NavLink>
              <NavLink to={"/"}>
                <InstagramIcon className="hover:opacity-70 hover:cursor-pointer" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
