import React from "react";
import { ReservationsItem } from "components/atoms/ReservationsItem/ReservationsItem";
import Door from "../../../assets/door.svg";
import Book from "../../../assets/book.svg";
import Phone from "../../../assets/phone.svg";
import "./reservations-section.scss";
import PropTypes from "prop-types";

export const ReservationsSection = ({ reservationData }) => {
  const reservationArray = reservationData && Object.entries(reservationData);

  const imageChanger = (image) => {
    if (image === "books") {
      return Book;
    } else if (image === "rooms") {
      return Door;
    } else if (image === "devices") {
      return Phone;
    }
  };

  const nameChanger = (name) => {
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
                reservationName={imageChanger(obj[0])}
                reservationNumber={obj[1].length}
                reservationImage={nameChanger(obj[0])}
                key={index}
              />
            );
          })
        : "null"}
    </div>
  );
};
ReservationsSection.propTypes = {
  reservationData: PropTypes.object,
};
