import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
function Register() {
  const [tests, setTests] = useState([
    <Form.Control type="text" name={`test.1`} key="1" />,
  ]);
  const [phones, setPhones] = useState([
    <Form.Control type="text" name={`phone.1`} key="1" />,
  ]);
  const [hospitalDetails, setHospitalDetails] = useState({
    name: "",
    covid: false,
    nonCovid: false,
    government: false,
    covidTesting: false,
    numberOfCovidBeds: 0,
    numberOfCovidBedsOccupied: 0,
    numberOfICUBeds: 0,
    numberOfICUBedsOccupied: 0,
    numberOfNonCovidBeds: 0,
    numberOfNonCovidBedsOccupied: 0
  });
  function handleNameChange(e) {
    let temp = { ...hospitalDetails };
    temp.name = e.target.value;
    setHospitalDetails(temp);
  }
  function handleCovidChange(e) {
    let temp = { ...hospitalDetails };
    temp.covid = e.target.checked;
    setHospitalDetails(temp);
  }
  function handleNonCovidChange(e) {
    let temp = { ...hospitalDetails };
    temp.nonCovid = e.target.checked;
    setHospitalDetails(temp);
  }
  function handleGovernmentChange(e) {
    let temp = { ...hospitalDetails };
    const government = e.target.value === "government";
    temp.government = government;
    setHospitalDetails(temp);
  }
  function handleCovidTestingChange(e){
    let temp = { ...hospitalDetails };
    const covidTesting = e.target.value === "available";
    temp.covidTesting = covidTesting;
    setHospitalDetails(temp);
  }
  function onHospitalSubmit(e) {
    console.log(hospitalDetails);
    e.preventDefault();
  }
  return (
    <>
      <Container
        style={{
          maxWidth: "600px",
          marginTop: "20px",
          border: "1px solid lightgrey",
        }}
      >
        <h1>Register</h1>
        <Form style={{ textAlign: "left" }} onSubmit={onHospitalSubmit}>
          <Form.Group as={Row} controlId="formHospitalName">
            <Form.Label column sm={3}>
              Hospital Name
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Hospital Name"
                onChange={handleNameChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHospitalType">
            <Form.Label column sm={3}>
              Hospital Type
            </Form.Label>
            <Col sm={9}>
              <Form.Check
                label="Covid Hospital"
                name="covid"
                onChange={handleCovidChange}
              />
              <Form.Check
                label="Non Covid Hospital"
                name="nonCovid"
                onChange={handleNonCovidChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHospitalFacilities">
            <Form.Label column sm={3}>
              Hospital Facilities
            </Form.Label>
            <Col sm={9}>
              <Form.Check
                type="radio"
                label="Government"
                name="government"
                value="government"
                onChange={handleGovernmentChange}
              />
              <Form.Check
                type="radio"
                label="Private"
                name="government"
                value="private"
                onChange={handleGovernmentChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHospitalFacilities">
            <Form.Label column sm={3}>
              Covid Testing
            </Form.Label>
            <Col sm={9}>
              <Form.Check
                type="radio"
                label="Available"
                value="available"
                name="covidtesting"
                onChange={handleCovidTestingChange}
              />
              <Form.Check
                type="radio"
                label="Unavailable"
                value="unavailable"
                name="covidtesting"
                onChange={handleCovidTestingChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTotalCovidBeds">
            <Form.Label column sm={3}>
              Total Number of Covid Beds
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                placeholder="Total Covid Beds Occupied"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTotalCovidBedsOccupied">
            <Form.Label column sm={3}>
              Total Number of Covid Beds Occupied
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                placeholder="Total Covid Beds Occupied"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTotalNonCovidBeds">
            <Form.Label column sm={3}>
              Total Number of Non-Covid Beds
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="number" placeholder="Total Non-Covid Beds" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTotalNonCovidBedsOccupied">
            <Form.Label column sm={3}>
              Total Number of Non-Covid Beds Occupied
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                placeholder="Total Non-Covid Beds Occupied"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTotalICUBeds">
            <Form.Label column sm={3}>
              Total Number of ICU Beds
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="number" placeholder="Total ICU Beds" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTotalICUBedsOccupied">
            <Form.Label column sm={3}>
              Total Number of ICU Beds Occupied
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                placeholder="Total ICU Beds Occupied"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHospitalAddress">
            <Form.Label column sm={3}>
              Hospital Address
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Hospital Address"
                name="address"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHospitalPincode">
            <Form.Label column sm={3}>
              Hospital Pincode
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Hospital Pincode"
                name="pincode"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formWebsiteUrl">
            <Form.Label column sm={3}>
              Website URL
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Website URL"
                name="websiteUrl"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTotalCovidBedsOccupied">
            <Form.Label column sm={3}>
              Tests Required for Entry
            </Form.Label>
            <Col sm={7}>{tests.map((test, id) => test)}</Col>
            <Col sm={2}>
              <Button
                onClick={() => {
                  let temp = [...tests];
                  const id = temp.length + 1;
                  temp.push(
                    <Form.Control type="text" name={`test.${id}`} key={id} />
                  );
                  setTests(temp);
                }}
              >
                Add Test
              </Button>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTotalCovidBedsOccupied">
            <Form.Label column sm={3}>
              Hospital Phone Number
            </Form.Label>
            <Col sm={7}>{phones.map((phone, id) => phone)}</Col>
            <Col sm={2}>
              <Button
                onClick={() => {
                  let temp = [...phones];
                  const id = temp.length + 1;
                  temp.push(
                    <Form.Control type="text" name={`phone.${id}`} key={id} />
                  );
                  setPhones(temp);
                }}
              >
                Add Phone Number
              </Button>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formUploadProof">
            <Form.Label column sm={3}>
              Hospital Proof
            </Form.Label>
            <Col sm={9}>
              <Form.File
                id="custom-file"
                label=".jpg or .png or .pdf formats"
                custom
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formUploadProof">
            <Form.Label column sm={3}>
              Hospital Picture
            </Form.Label>
            <Col sm={9}>
              <Form.File id="file" label=".jpg or .png format" custom />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Register Hospital</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default Register;
