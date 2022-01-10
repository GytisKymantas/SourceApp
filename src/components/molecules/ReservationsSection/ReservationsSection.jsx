import React from "react";
import { CategoryItem } from "components/atoms/CategoryItem/CategoryItem";
import Door from "../../../assets/door.svg";
import Book from "../../../assets/book.svg";
import Phone from "../../../assets/phone.svg";
import "./reservations-section.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ReservationsSection = ({ reservationData }) => {
  const reservationArray = reservationData && Object.entries(reservationData);
  const path = "/dashboard/reservations/";

  let correctNaming = [];
  if (reservationData) {
    correctNaming = Object.keys(reservationData);
    correctNaming.unshift(correctNaming.pop());
  }

  if (reservationArray) {
    for (let i = 0; i < 3; i++) {
      reservationArray[i][0] = correctNaming[i];
      reservationArray[i][1] = i + 1;
    }
  }

  const nameMatcher = (name) => {
    switch (name) {
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

  const getPath = (item) => {
    return item === "books"
      ? path.concat("books")
      : item === "devices"
      ? path.concat("devices")
      : item === "rooms"
      ? path.concat("meetingrooms")
      : "/";
  };

  return (
    <div className="reservations-section">
      <h2 className="reservations-section__header">Reservations</h2>
      <div className="reservations-section__element-container">
        {reservationArray
          ? reservationArray.map((name, index) => {
              return (
                <Link
                  key={index}
                  className="reservations-section__element"
                  to={getPath(name[0])}
                >
                  <CategoryItem
                    categoryName={nameMatcher(name[0])}
                    categoryInfo={
                      name[1] ? `${name[1]} RESERVED` : "UNRESERVED"
                    }
                    categoryImage={imageMatcher(name[0])}
                    isFood={false}
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
