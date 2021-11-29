import React from "react";
import { ReservationsItem } from "components/atoms/ReservationsItem/ReservationsItem";
import Door from "../../../assets/door.svg";
import Book from "../../../assets/book.svg";
import Phone from "../../../assets/phone.svg";
import "./reservations-section.scss";

export const ReservationsSection = () => {
  return (
    <div className="reservations-section">
      <ReservationsItem
        reservationImage={Door}
        reservationName="Meeting Rooms"
        reservationNumber={2}
      />
      <ReservationsItem
        reservationImage={Book}
        reservationName="Books"
        reservationNumber={2}
      />
      <ReservationsItem
        reservationImage={Phone}
        reservationName="Devices"
        reservationNumber={2}
      />
    </div>
  );
};
