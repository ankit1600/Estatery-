import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Filter({ location, setLocation, type, setType }) {
  return (
    <div className="grid  grid-cols-5  bg-white m-4 items-center  rounded-md ">
      <input
        placeholder="Location"
        className="grid border-r-2 m-4"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        value={location}
      />
      <input
        // onChange={(e) => alert(e.target.value)}
        type="date"
        placeholder="When"
        className="grid border-r-2 m-4 w-36  "
      />
      <input placeholder="Price" className="grid border-r-2 m-4 " />
      <form className="grid border-r-2 m-4 ">
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          className="bg-transparent w-24 focus:outline-none"
          onChange={(e) => {
            setType(e.target.value);
          }}
          value={type}
        >
          <option value="All">All</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
          <option value="apartment">Apartment</option>
        </select>
        {/* <input type="submit" /> */}
      </form>

      <button className="m-2 px-5 w-24 text-white bg-indigo-500 rounded-md hover:cursor-pointer ">
        Search
      </button>
    </div>
  );
}

export default Filter;
