import React from "react";
import "./reservations.scss";
import PropTypes from "prop-types";

const ReservationsItem = ({
  reservationName,
  reservationImage,
  reservationNumber,
}) => (
  <div className="reservations-item">
    <div className="reservations-item__header-container">
      <h2>{reservationName}</h2>
      <p>
        {reservationNumber ? `${reservationNumber} RESERVED` : "UNRESERVED"}
      </p>
    </div>
    <div className="reservations-item__image-wrapper">
      <img src={reservationImage} alt="Reservations category" />
    </div>
  </div>
);

ReservationsItem.propTypes = {
  reservationImage: PropTypes.string,
  reservationName: PropTypes.string,
  reservationNumber: PropTypes.number,
};

export default ReservationsItem;
