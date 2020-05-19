import React, { useState } from "react";
import "./App.css";
import HospitalCard from "./components/HospitalCard";
import config from "./config";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";

function App() {
  const [hospitalData, setHospitalData] = useState([]);
  const [searchText, setSearchText] = useState("");
  React.useEffect(() => {
    console.log("App state rebuild");
    fetchHospitals(setHospitalData);
  }, [searchText]);
  return (
    <div className="App">
      <Dashboard></Dashboard>
      <Search
        setSearchText={setSearchText}
      ></Search>
      {hospitalData.map((hospital, _) => (
        <HospitalCard data={hospital} key={hospital.id} />
      ))}
    </div>
  );
}
function fetchHospitals(setHospitalData) {
  fetch(`${config.apiUrl}/fetchHospitals`) // Call the fetch function passing the url of the API as a parameter
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      setHospitalData(data);
    })
    .catch((err) => {
      console.log(err);
    });
  setHospitalData([])
  console.log("fetched data");
}
export default App;
