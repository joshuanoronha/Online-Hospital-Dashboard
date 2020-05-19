import config from "../config";

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
  console.log("fetched data");
}

export default fetchHospitals;
