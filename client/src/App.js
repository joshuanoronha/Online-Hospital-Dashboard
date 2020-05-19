import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import fetchHospitals from "./api/fetchHospitals";
import Home from "./pages/Home";

function App() {
  const [hospitalData, setHospitalData] = useState([]);
  const [searchText, setSearchText] = useState("");
  React.useEffect(() => {
    console.log("App state rebuild");
    fetchHospitals(setHospitalData);
  }, [searchText]);
  return (
    <Router>
      <div className="App">
        <Home hospitalData={hospitalData} setSearchText={setSearchText}></Home>
      </div>
    </Router>
  );
}

export default App;
