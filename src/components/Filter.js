import React from "react";

function Filter({
  location,
  setLocation,
  type,
  setType,
  setOptionId,
  date,
  setDate,
}) {
  return (
    <div className="grid  grid-row-5 bg-white  w-60 justify-center rounded-md  md:w-max md:grid  md:grid-cols-5 md:h-20 md:items-center ">
      <input
        placeholder="Location"
        className="grid  w-40   md:border-r-2 m-4"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        value={location}
      />
      <hr className=" md:hidden" />
      <input
        type="date"
        placeholder="When"
        className="grid border-r-2 m-4  w-12 md:w-36"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      <hr className=" md:hidden" />

      <form className="grid md:border-r-2 m-2 ">
        <label htmlFor="type" className="text-gray-400">
          Price:
        </label>
        <select
          id="type"
          name="type"
          className="bg-transparent w-32 focus:outline-none"
          onChange={(e) => {
            setOptionId(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="500-2,500">$500-$2,500</option>
          <option value="2,500-3,500">$2,500-$3,500</option>
          <option value=">3,500">&gt;$3,500</option>
        </select>
      </form>
      <hr className=" md:hidden" />
      <form className="grid md:border-r-2 m-4 ">
        <label htmlFor="type" className="text-gray-400">
          Type:
        </label>
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
      </form>
      <hr className=" md:hidden" />
      <button className="m-2 px-5 w-24 text-white bg-indigo-500 rounded-md hover:cursor-pointer ">
        Search
      </button>
    </div>
  );
}

export default Filter;
