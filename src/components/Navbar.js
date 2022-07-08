import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <div className=" flex justify-between  bg-white">
      <div className="flex items-center ">
        <div className="m-2 text-black  ">Estatery</div>
        <div className="m-2 px-5 py-1 hover:text-indigo-600 hover:bg-indigo-200 hover:rounded-sm hover:cursor-pointer">
          Rent
        </div>
        <div className="m-2 px-5 py-1 hover:text-indigo-600 hover:bg-indigo-200 hover:rounded-sm hover:cursor-pointer">
          Buy
        </div>
        <div className="m-2 px-5 py-1 hover:text-indigo-600 hover:bg-indigo-200 hover:rounded-sm hover:cursor-pointer">
          Sell
        </div>
        <div className="m-2 px-5 py-1 flex hover:text-indigo-600 hover:bg-indigo-200 hover:rounded-sm hover:cursor-pointer">
          Manage Property <IoIosArrowDown className=" flex m-2 " />
        </div>
        <div className="m-2 px-5 py-1 flex hover:text-indigo-600 hover:bg-indigo-200 hover:rounded-sm hover:cursor-pointer">
          Resources <IoIosArrowDown className=" flex m-2" />
        </div>
      </div>
      <div className="flex">
        <button className="m-2 px-5 py-1 text-indigo-500 border-2  hover:border-indigo-500 rounded-md hover:text-indigo-600 hover:bg-indigo-200 hover:rounded-sm hover:cursor-pointer">
          Log In
        </button>
        <button className="m-2 px-5 py-1 text-white border-solid bg-indigo-500  rounded-md hover:text-indigo-600 hover:bg-indigo-200 hover:rounded-sm hover:cursor-pointer">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
