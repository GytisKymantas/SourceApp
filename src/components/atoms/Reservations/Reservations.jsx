import React from "react";
import "./Reservations.scss";
import PropTypes from "prop-types";
import logo from "../../../assets/Graphic.svg";

const Reservations = ({ headerName, reservedNumber }) => (
  <div className="reservations__container">
    <div className="reservations__container-header">
      <h1>{headerName}</h1>
      <p>{reservedNumber ? `${reservedNumber} RESERVED` : "UNRESERVED"}</p>
    </div>
    <div className="reservations__container-door">
      <div className="reservations__container-doorimg door">
        <img src={logo} alt="logo"></img>
      </div>
    </div>
  </div>
);

Reservations.propTypes = {
  headerImage: PropTypes.string,
  headerName: PropTypes.string,
  reservedNumber: PropTypes.number,
};

export default Reservations;
