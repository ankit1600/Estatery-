import React from "react";
import house from "../components/img/house.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBath, BiBed, BiArea } from "react-icons/bi";

function Card({ name, price, address, beds, bathroom, area }) {
  return (
    <div className="relative overflow-hidden bg-white h-full w-72 rounded-lg -mx-10 md:-m-2  ">
      <img src={house} alt="house" className="w-72 h-52  rounded-t-lg" />
      <div className="absolute left-0 top-0 h-16 w-16">
        <div className="absolute transform -rotate-45  bg-indigo-600 text-center text-white font-semibold py-1 left-[-38px] top-[28px] w-[170px]">
          Popular
        </div>
      </div>

      <div className="flex justify-between m-4 ">
        <span>${price}/month</span>
        <AiOutlineHeart />
      </div>
      <span className="font-bold flex m-4 text-lg ">{name}</span>
      <span className="m-4">{address}</span>
      <hr />
      <div className="flex justify-between mb-4 px-1 ">
        <span className="flex  items-center mx-1 text-sm">
          <BiBed className="flex h-10 w-6 text-indigo-600 " /> {beds} Beds
        </span>
        <span className="flex  items-center mx-1 text-sm">
          <BiBath className="flex h-10 w-6 text-indigo-600" /> {bathroom}{" "}
          Bathroom
        </span>
        <span className="flex  items-center mx-1 text-sm">
          <BiArea className="flex h-10 w-6 text-indigo-600" /> {area}m&#178;
        </span>
      </div>
    </div>
  );
}

export default Card;
