import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function Search(props) {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "10px" }}>
      <InputGroup className="mb-3">
        <FormControl placeholder="Pincode" aria-label="Search" />
        <InputGroup.Append>
          <Button
            variant="outline-primary"
            onClick={() => {
              const searchText = document.querySelector(".form-control").value;
              props.setSearchText(searchText);
            }}
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
export default Search;
