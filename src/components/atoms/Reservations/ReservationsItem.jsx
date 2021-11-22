import React from "react";
import "./Reservations.scss";
import PropTypes from "prop-types";

const ReservationsItem = ({
  reservationName,
  reservationImage,
  reservationNumber,
}) => (
  <div className="reservations__container">
    <div className="reservations__container-header">
      <h1>{reservationName}</h1>
      <p>
        {reservationNumber ? `${reservationNumber} RESERVED` : "UNRESERVED"}
      </p>
    </div>
    <div className="reservations__container-door">
      <div className="reservations__container-doorimg door">
        <img src={reservationImage} alt="logo"></img>
      </div>
    </div>
  </div>
);

ReservationsItem.propTypes = {
  reservationImage: PropTypes.string,
  reservationName: PropTypes.string,
  reservationNumber: PropTypes.number,
};

export default ReservationsItem;
