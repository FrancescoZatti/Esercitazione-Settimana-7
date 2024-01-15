import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Col, Dropdown, NavbarText } from "react-bootstrap";
import Logo from "../assets/logo.png";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

const MyNavbar = () => {
  
  return (
    <Navbar expand="lg" variant="dark" className="justify-content-between align-items-center">
      <Navbar.Brand href="#" as={Link} to="/">
        <img src={Logo} alt="Logo" style={{ width: "100px", height: "55px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Col className="d-flex justify-content-between align-items-center">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <a href="#">
              <Navbar.Text className="text-light fs-5"><FaSearch /></Navbar.Text>
            </a>
            <a className="btn text-decoration-none">
              <NavbarText id="kids" className="text-light mx-0 text-decoration-none" as={Link} to="/profile">KIDS</NavbarText>
            </a>
            <Dropdown align="end">
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                <a href="#">
                  <Navbar.Text className="text-light fs-5"><FaUser className="button" /></Navbar.Text>
                </a>
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item
                    href="#"
                    className="text-light"
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "grey";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "";
                    }}
                    as={Link}
                    to="/profile"
                  >
                    Profile
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="text-light"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'grey';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '';
                  }}
                  as={Link}
                  to="/account"
                >
                  Account Setting
                </Dropdown.Item>
                <br />
                <Dropdown.Item
                  href="#"
                  className="text-light"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'grey';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '';
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a href="#">
              <Navbar.Text className="text-light ms-4 fs-5"><FaBell /></Navbar.Text>
            </a>
          </div>
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
