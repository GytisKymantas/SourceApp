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
  const comments = birthdayData.comments;
  const name = birthdayData.userName;
  const date = birthdayData.birthdayDate;
  const image = birthdayData.userImage;

  const [present, setPresent] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handlePresentClick = () => {
    setPresent((prevValue) => !prevValue);
  };

  const handleCommentClick = () => {
    setShowComments((prevValue) => !prevValue);
  };
  return (
    <>
      <div className="card">
        <div className="card__image">
          <Avatar hasIcon={false} imageSource={image} />
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
          <CommentIcon
            onClick={handleCommentClick}
            onKeyDown={handleCommentClick}
            aria-hidden="true"
          />{" "}
          <span className="card__icons-number">{comments.length}</span>
        </div>
        <div>
          {showComments && (
            <div className="card--expanded">
              <EventCardDivider className="card--expanded__divider" />
              {comments.map((item, index) => (
                <div className="card--expanded__comments" key={index}>
                  <div>
                    <span>{item.userName}</span>
                    <span>{Moment(item.date).format("MM/DD/YYYY HH:mm")}</span>
                  </div>
                  <span>{item.comment}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
