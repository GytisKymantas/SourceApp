import React from "react";
import { ReservationsItem } from "components/atoms/ReservationsItem/ReservationsItem";
import Door from "../../../assets/door.svg";
import Book from "../../../assets/book.svg";
import Phone from "../../../assets/phone.svg";
import "./reservations-section.scss";

export const ReservationsSection = () => {
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

  return (
    <div className="reservations-section">
      {reservations.map((obj) => {
        return (
          <ReservationsItem
            reservationName={obj.reservationName}
            reservationNumber={obj.reservationNumber}
            reservationImage={obj.reservationImage}
            key={obj.id}
          />
        );
      })}
    </div>
  );
};
