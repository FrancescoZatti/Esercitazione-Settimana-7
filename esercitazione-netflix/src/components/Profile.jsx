import React, { useState } from "react";
import Avatar from '../assets/avatar.png';
import { Dropdown } from "react-bootstrap";

export default function Profile() {
    const [selectedOption, setSelectedOption] = useState("English");

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Bootstrap CSS */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossOrigin="anonymous"
  />
  <link href="css/styles.css" rel="stylesheet" />
  <title>Netflix</title>
  <div className="profile-page" style={{ backgroundColor: '#221f1f' }}>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1 className="text-light profile-title">Edit Profile</h1>
          <hr />
          <div className="row mt-4 pb-2">
            <div className="col-12 col-md-auto">
              <img
                className="img-fluid"
                src={Avatar}
                width="150px"
              />
            </div>
            <div className="col-12 col-md">
              <input
                className="form-control border-0 rounded-0"
                defaultValue="Francesco Zatti"
                type="text"
              />
              <div className="mb-4 mt-4">
                <h4 className="text-muted">Language:</h4>
                <Dropdown align="start">
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                        {selectedOption}
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" onClick={() => handleOptionSelect("English")}>
                        English
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={() => handleOptionSelect("Italiano")}>
                        Italiano
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => handleOptionSelect("Parmigiano")}>
                        La Lingua degli Dei
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onClick={() => handleOptionSelect("G40")}>
                        Gianluca Quaranta
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-5" onClick={() => handleOptionSelect("Bit Trader")}>
                        Longobardo
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
              </div>
              <hr className="text-light my-4" />
              <div className="mt-2 pb-2">
                <h4 className="text-muted">Maturity Settings:</h4>
                <button className="btn btn-dark fw-bold my-2">
                  ALL MATURITY SETTINGS
                </button>
                <p className="text-light mt-2">
                  Show files for all maturity settings for this profile.
                </p>
                <button className="btn btn-outline-secondary px-4">EDIT</button>
              </div>
              <hr className="my-4 text-light" />
              <div>
                <h4 className="text-muted">Autoplay Controls:</h4>
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <input
                      className="form-check-input bg-transparent border-white opacity-50 rounded-0"
                      type="checkbox"
                      defaultChecked=""
                    />
                  </div>
                  <div className="text-secondary">Autoplay next episode in a series on all devices</div>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <div className="me-2">
                    <input
                      className="form-check-input bg-transparent border-white opacity-50 rounded-0"
                      type="checkbox"
                      defaultChecked=""
                    />
                  </div>
                  <div className="text-secondary">Autoplay next episode in a series on all devices</div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4 text-light" />
          <div className="action-buttons row pt-2 justify-content-end">
            <div className="col-auto">
              <button className="btn btn-light fw-bold px-4">SAVE</button>
            </div>
            <div className="col-auto">
              <button className="btn btn-outline-secondary px-5">CANCEL</button>
            </div>
            <div className="col-auto my-4">
              <button className="btn btn-outline-secondary px-5 ">
                DELETE PROFILE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    );
}