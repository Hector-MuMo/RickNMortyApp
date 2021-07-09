import React, { useState, useEffect } from "react";
import logo from "../helpers/rNmTitle.png";
import LocationInfo from "./LocationInfo";
import ResidentsContainer from "./ResidentsContainer";
import SearchBox from "./SearchBox";

let randmLocation = Math.floor(Math.random() * 108);

const LocationContainer = () => {
  const [userSearch, setUserSearch] = useState(randmLocation);
  const [location, setLocation] = useState([]);

  //GetLocationByAxios
  useEffect(() => {
    const axios = require("axios");

    const getLocation = async () => {
      try {
        let url = `https://rickandmortyapi.com/api/location/${userSearch}`;
        const obj = await axios.get(url);

        setLocation(obj.data);
      } catch (error) {
        console.log(error);
      }
    };

    getLocation();
  }, [userSearch]);

  return (
    <div className="loc-container">
      <figure className="title">
        <img src={logo} alt="Title" />
      </figure>
      <SearchBox getLocation={setUserSearch} />
      <LocationInfo key={location.id} location={location} />
      <div className="residents-container">
        {location.residents ? (
          <ResidentsContainer residents={location.residents} />
        ) : (
          <h3>Select an ID from 1 to 108</h3>
        )}
      </div>
    </div>
  );
};

export default LocationContainer;
