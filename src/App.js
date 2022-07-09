import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import Filter from "./components/Filter";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 h-full justify-center px-48 py-10">
        <div className=" flex justify-between">
          <h1 className="text-3xl font-bold">Search properties to rent</h1>
          <div className="border-2 items-center flex p-1 border-indigo-400 rounded-md">
            Search with search Bar <IoIosArrowDown className="m-2" />
          </div>
        </div>
        <Filter />
        <Card />
      </div>
    </>
  );
}

export default App;
