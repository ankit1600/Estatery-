import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import Filter from "./components/Filter";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:4000/data",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setProperties(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(properties);

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
        <div className="grid grid-cols-3 m-4 p-4 gap-7">
          {properties.map((property) => {
            return (
              <Card
                key={property.id}
                name={property.name}
                price={property.price}
                address={property.address}
                beds={property.info.beds}
                bathroom={property.info.bathroom}
                area={property.info.area}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
