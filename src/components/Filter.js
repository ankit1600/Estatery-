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
        type="date"
        placeholder="When"
        className="grid border-r-2 m-4 w-36"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <form className="grid border-r-2 m-2 ">
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
      <form className="grid border-r-2 m-4 ">
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
      <button className="m-2 px-5 w-24 text-white bg-indigo-500 rounded-md hover:cursor-pointer ">
        Search
      </button>
    </div>
  );
}

export default Filter;
