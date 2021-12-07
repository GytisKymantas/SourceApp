import React from "react";
import { ReservationsItem } from "components/atoms/ReservationsItem/ReservationsItem";
import Door from "../../../assets/door.svg";
import Book from "../../../assets/book.svg";
import Phone from "../../../assets/phone.svg";
import "./reservations-section.scss";
import PropTypes from "prop-types";

export const ReservationsSection = ({ reservationInfo }) => {
  const reservationArray = reservationInfo && Object.entries(reservationInfo);

  const logoSwitch = (logo) => {
    if (logo === "books") {
      return Book;
    } else if (logo === "rooms") {
      return Door;
    } else if (logo === "devices") {
      return Phone;
    }
  };

  const nameSwitch = (name) => {
    if (name === "rooms") {
      return "Meeting Rooms";
    } else {
      return name;
    }
  };

  return (
    <div className="reservations-section">
      {reservationArray
        ? reservationArray.map((obj, index) => {
            return (
              <ReservationsItem
                reservationName={nameSwitch(obj[0])}
                reservationNumber={obj[1].length}
                reservationImage={logoSwitch(obj[0])}
                key={index}
              />
            );
          })
        : "null"}
    </div>
  );
};
ReservationsSection.propTypes = {
  info: PropTypes.string,
};
