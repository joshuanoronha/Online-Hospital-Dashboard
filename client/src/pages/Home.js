import React, { useState, useEffect } from "react";

import HospitalCard from "../components/HospitalCard";
import Dashboard from "../components/Dashboard";
import Search from "../components/Search";

import fetchHospitals from "../api/fetchHospitals";

function Home() {
  const [hospitalData, setHospitalData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("App state rebuild");
    fetchHospitals(setHospitalData);
  }, [searchText]);
  return (
    <>
      <Dashboard></Dashboard>
      <Search setSearchText={setSearchText}></Search>
      {hospitalData.map((hospital, _) => (
        <HospitalCard data={hospital} key={hospital.id} />
      ))}
    </>
  );
}

export default Home;
