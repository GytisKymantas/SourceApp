import React, { useState } from "react";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { ReactComponent as EventCardGraphics } from "../../../assets/eventCardGraphics.svg";
import { ReactComponent as EventCardDivider } from "../../../assets/eventCardDivider.svg";
import { ReactComponent as PresentIconClear } from "../../../assets/presentIconClear.svg";
import { ReactComponent as PresentIconColor } from "../../../assets/presentIconColor.svg";
import { ReactComponent as CommentIcon } from "../../../assets/commentIcon.svg";
import { Button } from "../../atoms/Button/Button";
import Moment from "moment";
import PropTypes from "prop-types";

import "./event-card.scss";

export const EventCard = ({ storiesData, userData }) => {
  Moment.locale("en");
  let wishes = storiesData.wishes;
  const { comments, userName, birthdayDate, userImage } = storiesData;
  const currentUserImage = userData?.userImage;
  const currentUserName = userData?.userName;
  const isToday =
    Moment(new Date()).format("MMM Do") ===
    Moment(birthdayDate).format("MMM Do");

  const [present, setPresent] = useState(false);
  // const [showComments, setShowComments] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [coms, setComs] = useState(comments);

  const handlePresentClick = () => {
    setPresent((prevValue) => !prevValue);
  };

  const handleCommentSubmit = () => {
    const userComment = {
      userName: currentUserName,
      comment: commentValue,
      date: Moment(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
    };
    setComs([...coms, userComment]);
    setCommentValue("");
  };

  return (
    <>
      <div className="card">
        <div className="card__image">
          <Avatar
            hasIcon={false}
            imageSource={userImage}
            isClickable={false}
            isLarge={true}
          />
        </div>
        <EventCardGraphics className="card__details-graphics" />
        <div className="card__details">
          <div className="card__details-name">{userName}</div>
          <div className="card__details-birthday">
            {isToday ? (
              <>
                Celebrates birthday <span>today</span>
              </>
            ) : (
              <>
                Celebrated birthday on{" "}
                <span>{Moment(birthdayDate).format("MMM Do")}</span>
              </>
            )}
          </div>
          <div className="card__details-wish">Send a wish!</div>
        </div>
        <EventCardDivider className="card__divider" />
        <div className="card__icons">
          {present ? (
            <PresentIconColor
              className="card__icons-present"
              onClick={handlePresentClick}
              onKeyDown={handlePresentClick}
            />
          ) : (
            <PresentIconClear
              className="card__icons-present"
              onClick={handlePresentClick}
              onKeyDown={handlePresentClick}
            />
          )}
          <span className="card__icons-number">
            {present ? (wishes = wishes + 1) : wishes}
          </span>
          <CommentIcon className="card__icons-comment" />
          <span className="card__icons-number">{coms.length}</span>
        </div>
        <div>
          <EventCardDivider className="comments-divider__top" />
          <div className="comments-rows">
            {coms.map((item, index) => (
              <div className="comments-rows__comments-box" key={index}>
                <div className="comments-rows__comments-box-one">
                  <span>{item.userName}</span>
                  <span>{Moment(item.date).format("MM/DD/YYYY HH:mm")}</span>
                </div>
                <span>{item.comment}</span>
              </div>
            ))}
          </div>
          <EventCardDivider className="comments-divider__bottom" />

          <div className="comments__box">
            <div className="comments__box-content">
              <img src={currentUserImage} alt="your profile icon" />
              <input
                className="comments__box-input"
                value={commentValue}
                onInput={(e) => setCommentValue(e.target.value)}
                placeholder="Send a wish!"
              />
            </div>
            <Button
              type="submit"
              label="Send"
              onClick={handleCommentSubmit}
              disabled={!commentValue.trim()}
            />
          </div>
        </div>
      </div>
    </>
  );
};
EventCard.propTypes = {
  storiesData: PropTypes.object,
  userData: PropTypes.object,
};
