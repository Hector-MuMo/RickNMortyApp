import React, { useState, useEffect } from "react";

const ResidentInfo = ({ resUrl, getId }) => {
  const [resident, setResident] = useState({});
  const [origin, setOrigin] = useState("");
  const [ep, setEp] = useState(0);

  //getResidentbyAxios
  useEffect(() => {
    const axios = require("axios");

    const getResident = async () => {
      try {
        const obj = await axios.get(resUrl);

        setResident(obj.data);
      } catch (error) {
        console.log(error);
      }
    };

    getResident();
  }, [resUrl]);

  //getOriginEp
  useEffect(() => {
    if (resident.origin) {
      setOrigin(resident.origin.name);
      setEp(resident.episode.length);
    }
  }, [resident]);

  return (
    <div className="res-container">
      <figure>
        <img src={resident.image} alt={resident.name} />
      </figure>
      <article>
        <h3>{resident.name}</h3>
        <p>Status: {resident.status}</p>
        <p>Origin: {origin}</p>
        <p>{`Appear in ${ep} episode(s)`}</p>
      </article>
    </div>
  );
};

export default ResidentInfo;
