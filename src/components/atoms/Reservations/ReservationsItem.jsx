import React from "react";
import "./Reservations.scss";
import PropTypes from "prop-types";

const ReservationsItem = ({
  reservationName,
  reservationImage,
  reservationNumber,
}) => (
  <div className="reservations">
    <div className="reservations__container-header">
      <h2>{reservationName}</h2>
      <p>
        {reservationNumber ? `${reservationNumber} RESERVED` : "UNRESERVED"}
      </p>
    </div>
    <div className="reservations__doorcontainer">
      <div className="reservations__doorimg">
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
