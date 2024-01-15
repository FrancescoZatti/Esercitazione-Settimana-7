import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { FaThLarge, FaTh } from "react-icons/fa";

const MyGenres = () => {

  const [selectedOption, setSelectedOption] = useState("Fantasy");

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

  return (
    <Container fluid>
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <div >
           <h2 className="mb-4 text-light">TV Shows</h2> 
        </div>
        <Dropdown className="ml-4 mt-1 ms-4">
          <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }}>
            {selectedOption}
          </Dropdown.Toggle>
          <Dropdown.Menu className="bg-dark">
          <Dropdown.Item
                  href="#/action-1"
                  className="text-light"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'grey';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '';
                  }}
                  onClick={() => handleOptionSelect("Fantasy")}
                >
                  Fantasy
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  className="text-light"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'grey';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '';
                  }}
                  onClick={() => handleOptionSelect("Drama")}
                >
                  Drama
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  className="text-light"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'grey';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '';
                  }}
                  onClick={() => handleOptionSelect("Thriller")}
                >
                  Thriller
                </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <FaThLarge className="icons" />
        <FaTh className="icons" />
      </div>
    </div>
    </Container>
  );
};

export default MyGenres;