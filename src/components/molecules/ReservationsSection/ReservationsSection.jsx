import React from "react";
import { ReservationsItem } from "components/atoms/ReservationsItem/ReservationsItem";
import Door from "../../../assets/door.svg";
import Book from "../../../assets/book.svg";
import Phone from "../../../assets/phone.svg";
import "./reservations-section.scss";
import PropTypes from "prop-types";

export const ReservationsSection = ({ info }) => {
  const reservations = [
    {
      id: 1,
      reservationName: "Meeting rooms",
      reservationNumber: 2,
      reservationImage: Door,
    },
    {
      id: 2,
      reservationName: "Books",
      reservationNumber: 2,
      reservationImage: Book,
    },
    {
      id: 3,
      reservationName: "Devices",
      reservationNumber: 2,
      reservationImage: Phone,
    },
  ];
  // userData[0].reservations.books.map(object=> {object.id}))
  return (
    <div className="reservations-section">
      <h3>`blabla`</h3>
      {reservations.map((obj) => {
        return (
          <ReservationsItem
            reservationName={obj.reservationName}
            reservationNumber={2}
            reservationImage={obj.reservationImage}
            key={obj.id}
          />
        );
      })}
      {/* {console.log(Object.keys(info))} */}
    </div>
  );
};
ReservationsSection.propTypes = {
  info: PropTypes.array,
};
