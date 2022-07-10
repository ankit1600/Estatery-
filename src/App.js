import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import Filter from "./components/Filter";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [properties, setProperties] = useState([]);
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [optionId, setOptionId] = useState("All");
  const [date, setDate] = useState("");

  function checkAmount(price) {
    if (optionId === "All") {
      return true;
    } else if (optionId === "500-2,500") {
      return price < 2500 && price > 500 ? true : false;
    } else if (optionId === "2,500-3,500") {
      return price > 2500 && price < 3500 ? true : false;
    } else if (optionId === ">3,500") {
      return price > 3500 ? true : false;
    }
    return false;
  }
  function checkData(year, month, day) {
    const d = date.split("-");

    if (parseInt(d[0]) > year) return true;
    else if (parseInt(d[0]) === year) {
      if (parseInt(d[1]) > month) return true;
      else if (parseInt(d[1]) === month) {
        if (parseInt(d[2]) >= day) {
          console.log("hii");
          return true;
        } else return false;
      } else return false;
    } else return false;
  }

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios({
          url: "http://localhost:4000/data",
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProperties(res.data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen  justify-center px-48 py-10 ">
        <div className=" flex justify-between">
          <h1 className="text-3xl font-bold">Search properties to rent</h1>
          <div className=" items-center flex p-1 ">
            <input
              type="text"
              placeholder="Search with search Bar"
              className="border-2 border-indigo-400 rounded-md focus:outline-none"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
            <IoIosArrowDown className="m-2" />
          </div>
        </div>
        <Filter
          location={location}
          setLocation={setLocation}
          properties={properties}
          setProperties={setProperties}
          type={type}
          setType={setType}
          setOptionId={setOptionId}
          optionId={optionId}
          date={date}
          setDate={setDate}
        />
        <div className="grid grid-cols-1 m-4 p-4 gap-7 -z-10 md:grid-cols-2  lg:grid-cols-3 ">
          {properties
            .filter((item) =>
              item.address.toLowerCase().includes(location.toLowerCase()) &&
              item.name.toLowerCase().includes(search.toLowerCase()) &&
              item.propertyType.includes(type === "All" ? "" : type) &&
              checkAmount(item.price) &&
              date === ""
                ? true
                : checkData(
                    item.occupiedTill.year,
                    item.occupiedTill.month,
                    item.occupiedTill.day
                  )
            )

            .map((property) => {
              return (
                <Card
                  key={property.id}
                  name={property.name}
                  price={property.price}
                  address={property.address}
                  beds={property.beds}
                  bathroom={property.bathroom}
                  area={property.area}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
