import React from "react";

function Filter() {
  return (
    <div className="grid  grid-cols-5  bg-white m-4 items-center  rounded-md">
      <div className="grid border-r-2 m-4">Location</div>
      <div className="grid border-r-2 m-4">When</div>
      <div className="grid border-r-2 m-4">Price</div>
      <div className="grid border-r-2 m-4">Property Type</div>
      <div className="gird">
        <button className="m-2 px-5  text-white border-solid bg-indigo-500 rounded-md hover:cursor-pointer ">
          Search
        </button>
      </div>
    </div>
  );
}

export default Filter;
