import React from "react";
import PayPal from '../assets/paypal_logo.png';
import Avatar from '../assets/avatar.png';

export default function Account() {
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
      <div className="account-page px-5 bg-light">
        <div className="container p-5">
          <h3>Account</h3>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <h6 className="text-muted">MEMBERSHIP &amp; BILLING</h6>
              <button className="btn btn-membership">Cancel Membership</button>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center justify-content-between mt-2">
                <strong>emailsample@gmail.com</strong>
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Change account email</a>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <span className="text-muted">Password : ********</span>
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Change password</a>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <span className="text-muted">Phone : 321 044 1279</span>
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Change phone number</a>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between mt-2">
                <span>
                  <img className="me-2" src={PayPal} width="80px" />
                  <strong className="ms-2">emailsample@gmail.com</strong>
                </span>
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Update payment info</a>
              </div>
              <div className="d-flex align-items-center justify-content-end mt-2">
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Billing details</a>
              </div>
              <div className="d-flex align-items-center justify-content-end mt-2">
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Redeem giftcard or promo code</a>
              </div>
              <div className="d-flex align-items-center justify-content-end mt-2">
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Where to buy gift cards?</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <h6 className="text-muted mb-0">PLAN DETAILS</h6>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center justify-content-between">
                <span>
                  <strong className="me-1">Standard</strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-badge-hd"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z" />
                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                  </svg>
                </span>
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Change plan</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <h6 className="text-muted">SETTINGS</h6>
            </div>
            <div className="col-md-9">
              <p>
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Parent Controls</a>
              </p>
              <p>
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Test Participation</a>
              </p>
              <p>
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Manage downlaod devices</a>
              </p>
              <p>
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Activate a device</a>
              </p>
              <p>
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Recent device streaming activity</a>
              </p>
              <p>
                <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Signout all devices</a>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <h6 className="text-muted">MY PROFILE</h6>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center justify-content-between mt-2">
                <span>
                  <img className="me-2" src={Avatar} width="36px" />
                  <strong className="ms-2">Francesco Zatti</strong>
                </span>
                <div className="d-flex flex-column">
                  <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Manage profiles</a>
                  <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Add profile email</a>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4">
                  <p>
                    <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Language</a>
                  </p>
                  <p>
                    <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Playback settings</a>
                  </p>
                  <p>
                    <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Subtitle appearence</a>
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Viewing activity</a>
                  </p>
                  <p>
                    <a className="btn" style={{ textDecoration: 'none', color: 'grey' }} onMouseOver={(e) => { e.target.style.color = 'black' }} onMouseOut={(e) => { e.target.style.color = 'grey' }}>Ratings</a>
                  </p>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


