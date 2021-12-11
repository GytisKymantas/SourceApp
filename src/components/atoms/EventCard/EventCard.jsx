import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { ReactComponent as EventCardGraphics } from "../../../assets/eventCardGraphics.svg";
import "./event-card.scss";

export const EventCard = () => {
  return (
    <>
      <div className="card">
        <div className="card__image">
          <Avatar hasIcon={false} />
        </div>
        <EventCardGraphics className="card__details-graphics" />

        <div className="card__details">
          <div className="card__details-name">Firstname Lastname</div>
          {/* prideti kad celebrates today */}
          <div className="card__details-birthday">
            Celebrated a birthday on{" "}
          </div>
          <div className="card__details-wish">Send a wish!</div>
        </div>
      </div>
    </>
  );
};
