import React from "react";
import { Avatar } from "../Avatar/Avatar";
import "./event-card.scss";

export const EventCard = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card__image">
            <Avatar hasIcon={false} />
          </div>
        </div>
      </div>
    </>
  );
};
