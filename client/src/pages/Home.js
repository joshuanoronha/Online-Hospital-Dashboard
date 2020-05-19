import React, { useState } from "react";

import HospitalCard from "../components/HospitalCard";
import Dashboard from "../components/Dashboard";
import Search from "../components/Search";

function Home(props) {
  return (
    <>
      <Dashboard></Dashboard>
      <Search setSearchText={props.setSearchText}></Search>
      {props.hospitalData.map((hospital, _) => (
        <HospitalCard data={hospital} key={hospital.id} />
      ))}
    </>
  );
}

export default Home;