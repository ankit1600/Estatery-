import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import Filter from "./components/Filter";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [properties, setProperties] = useState([]);
  const [data, setData] = useState([]);
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // axios({
    //   url: "http://localhost:4000/data",
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     setProperties(res.data);
    //     data = res.data;
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    try {
      const fetchData = async () => {
        const res = await axios({
          url: "http://localhost:4000/data",
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData(res.data);
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
      <div className="bg-gray-200 h-screen  justify-center px-48 py-10 ">
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
        />
        <div className="grid grid-cols-1 m-4 p-4 gap-7 -z-10 md:grid-cols-2  lg:grid-cols-3 ">
          {properties
            .filter(
              (item) =>
                item.address.toLowerCase().includes(location.toLowerCase()) &&
                item.name.toLowerCase().includes(search.toLowerCase()) &&
                item.propertyType.includes(type === "All" ? "" : type)
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
