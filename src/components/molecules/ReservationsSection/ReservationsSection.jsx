import React from "react";
import { ReservationsItem } from "components/atoms/ReservationsItem/ReservationsItem";
import Door from "../../../assets/door.svg";
import Book from "../../../assets/book.svg";
import Phone from "../../../assets/phone.svg";
import "./reservations-section.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ReservationsSection = ({ reservationData }) => {
  const reservationArray = reservationData && Object.entries(reservationData);
  const correctNaming = ["rooms", "books", "devices"];

  if (reservationArray !== undefined) {
    for (let i = 0; i < 3; i++) {
      reservationArray[i][0] = correctNaming[i];
      reservationArray[i][1] = i + 1;
    }
  }

  const nameMatcher = (name) => {
    switch (name) {
      case "books":
        return "Books";
      case "rooms":
        return "Meeting rooms";
      default:
        return name;
    }
  };
  const imageMatcher = (image) => {
    switch (image) {
      case "books":
        return Book;
      case "rooms":
        return Door;
      case "devices":
        return Phone;
      default:
        return Door;
    }
  };

  return (
    <div className="reservations-section">
      <h2 className="reservations-section__header">Reservations</h2>
      <div className="reservations-section__element-container">
        {reservationArray
          ? reservationArray.map((obj, index) => {
              return (
                <Link
                  key={index}
                  className="reservations-section__element-container--link"
                  to={
                    obj[0] === "books"
                      ? "/dashboard/reservations/books"
                      : obj[0] === "devices"
                      ? "/dashboard/reservations/devices"
                      : obj[0] === "rooms"
                      ? "/dashboard/reservations/meetingrooms"
                      : "/"
                  }
                >
                  <ReservationsItem
                    reservationName={nameMatcher(obj[0])}
                    reservationNumber={obj[1]}
                    reservationImage={imageMatcher(obj[0])}
                    key={index}
                  />
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};
ReservationsSection.propTypes = {
  reservationData: PropTypes.object,
};
