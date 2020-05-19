import React from "react";
import { Jumbotron, Container, Button, ButtonGroup } from "react-bootstrap";

function Dashboard() {
  
  return (
    <>
      <Jumbotron style={{ color: "#212529" }}>
        <Container>
          <h1>Online Hospital Bed Dashboard</h1>
          <p>Find all the hospitals in your locality and their bed status</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
      </Jumbotron>
      <ButtonGroup
        aria-label="Selection of Ailment"
        style={{ padding: "10px 20px", width: "90vw" }}
      >
        <Button variant="outline-primary">Covid Hospital</Button>
        <Button variant="outline-primary">Non Covid Hospital</Button>
      </ButtonGroup>
    </>
  );
}

export default Dashboard;
