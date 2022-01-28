/** @format */

import React, { useState } from "react";
import "../App.css";
import Data from "../Data.json";
import RadioComponent from "./RadioComponent";

const SearchComponent = ({ placeholder }) => {
  const [data, setData] = useState(Data);
  const [Food, setFood] = useState("Food");
  const [Electrical, setElectrical] = useState("Electrical");
  const [Grocery, setGrocery] = useState("Grocery");

  const inputHandler = (e) => {
    if (e.target.value === "") {
      return setData(Data);
    }
    const searchedResult = data.filter(
      (item) =>
        item.companyname
          .toLowerCase()
          .startsWith(e.target.value.toLowerCase()) ||
        item.Speciality.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    searchedResult ? setData(searchedResult) : setData('')
  };
  const handleChange = (e) => {
    console.log(e.target.value)
    if (!e.target.value) {
      window.location.reload(true);
      const tempData = data;
      return setData(tempData);
    } else if (e.target.value === "Food") {
      const Food = data.filter((item) =>
        item.Speciality.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setData(Food);
    } else if (e.target.value === "Electrical") {
      setFood("");
      const Electrical = data.filter((item) =>
        item.Speciality.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setData(Electrical);
    } else if (e.target.value === "Grocery") {
      setElectrical("");
      const Grocery = data.filter((item) =>
        item.Speciality.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setData(Grocery);
    }
    setGrocery("");
    setElectrical("");
    setFood("");
  };

  return (
    <>
      {" "}
      <div className="search container mt-2">
        <h1>Welcome to search my store</h1>
        <input
          name="input"
          type="text"
          placeholder={placeholder}
          onChange={inputHandler}
        />

        <p className="mt-1">Or</p>
        <p>Select from the following</p>
        <div className="radios mt-3">
          <RadioComponent
            name="Electrical"
            label="Electrical"
            value={Electrical}
            onChange={handleChange}
          />
          <RadioComponent
            name="Food"
            value={Food}
            label="Food"
            onChange={handleChange}
          />
          <RadioComponent
            name="Grocery"
            value={Grocery}
            label="Grocery"
            onChange={handleChange}
          />
        </div>
        <div className="data-results row mb-5">
          
          {data.length === 0 ? <h3>No match found</h3> : data.map((items) => {
            const { id, City, Speciality, companyname, logo } = items;
            return (
              <div key={id} className="col-md-4 mb-3">
                <p> Name : {companyname} </p>
                <p> {City} </p>
                <p>{Speciality} </p>
                <img style={{ height: "9rem" }} src={logo} alt="No Pic Found" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
