import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function HospitalCard(props) {
  React.useEffect(() => {
    console.log(props);
  });
  return (
    <Container
      style={{
        border: "1px solid lightgrey",
        textAlign: "left",
        padding: "1rem",
        margin: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "0.9rem",
      }}
    >
      <Row>
        <Col sm={12}>
          <strong style={{ color: "#212529" }}>{props.data.name}</strong>
        </Col>
        <Col sm={12}>
          <span style={{ color: "#999" }}> Pincode - 400050</span>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>Tests Required for Admission :</Col>
      </Row>
      <Row>
        <Col sm={12}>
          Covid Beds Available :{" "}
          {props.data.numberOfCovidBeds - props.data.numberOfCovidBedsOccupied}
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          ICU Beds Available :{" "}
          {props.data.numberOfICUBeds - props.data.numberOfICUBedsOccupied}
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          Number of Non Covid Beds Available :{" "}
          {props.data.numberOfNonCovidBeds -
            props.data.numberOfNonCovidBedsOccupied}
        </Col>
      </Row>
    </Container>
  );
}

export default HospitalCard;
