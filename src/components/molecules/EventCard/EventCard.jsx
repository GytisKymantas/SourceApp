import React, { useState } from "react";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { ReactComponent as EventCardGraphics } from "../../../assets/eventCardGraphics.svg";
import { ReactComponent as EventCardDivider } from "../../../assets/eventCardDivider.svg";
import { ReactComponent as PresentIconClear } from "../../../assets/presentIconClear.svg";
import { ReactComponent as PresentIconColor } from "../../../assets/presentIconColor.svg";
import { ReactComponent as CommentIcon } from "../../../assets/commentIcon.svg";
import Moment from "moment";
import "./event-card.scss";

export const EventCard = (data) => {
  Moment.locale("en");

  const birthdayData = data?.data[0];
  let wishes = birthdayData.wishes;
  const comments = birthdayData.comments.length;
  const name = birthdayData.userName;
  const date = birthdayData.birthdayDate;

  const [present, setPresent] = useState(false);

  const handlePresentClick = () => {
    setPresent((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="card">
        <div className="card__image">
          <Avatar hasIcon={false} />
        </div>
        <EventCardGraphics className="card__details-graphics" />

        <div className="card__details">
          <div className="card__details-name">{name}</div>
          {/* prideti kad celebrates today */}
          <div className="card__details-birthday">
            Celebrated a birthday on{" "}
            <span>{Moment(date).format("MMM Do")}</span>
          </div>
          <div className="card__details-wish">Send a wish!</div>
        </div>
        <EventCardDivider className="card__divider" />
        <div className="card__icons">
          <div
            className="card__icons-present"
            onClick={handlePresentClick}
            onKeyDown={handlePresentClick}
            aria-hidden="true"
          >
            {present ? <PresentIconClear /> : <PresentIconColor />}
            <span className="card__icons-number">
              {present ? wishes : (wishes = wishes + 1)}
            </span>
          </div>
          <CommentIcon /> <span className="card__icons-number">{comments}</span>
        </div>
      </div>
    </>
  );
};
