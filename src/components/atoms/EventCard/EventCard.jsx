import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { ReactComponent as EventCardGraphics } from "../../../assets/eventCardGraphics.svg";
import { ReactComponent as EventCardDivider } from "../../../assets/eventCardDivider.svg";
import { ReactComponent as PresentIconClear } from "../../../assets/presentIconClear.svg";
import { ReactComponent as CommentIcon } from "../../../assets/commentIcon.svg";

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
        <EventCardDivider className="card__divider" />
        <div className="card__icons">
          <PresentIconClear /> <span className="card__icons-number">17</span>{" "}
          <CommentIcon /> <span className="card__icons-number">0</span>
        </div>
      </div>
    </>
  );
};
