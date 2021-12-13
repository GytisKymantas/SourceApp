import React, { useState } from "react";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { ReactComponent as EventCardGraphics } from "../../../assets/eventCardGraphics.svg";
import { ReactComponent as EventCardDivider } from "../../../assets/eventCardDivider.svg";
import { ReactComponent as PresentIconClear } from "../../../assets/presentIconClear.svg";
import { ReactComponent as PresentIconColor } from "../../../assets/presentIconColor.svg";
import { ReactComponent as CommentIcon } from "../../../assets/commentIcon.svg";
import { Button } from "../../atoms/Button/Button";
import Moment from "moment";
import "./event-card.scss";

export const EventCard = (data) => {
  Moment.locale("en");
  let wishes = data?.data.wishes;
  let comments = data?.data.comments;
  const name = data?.data.userName;
  const date = data?.data.birthdayDate;
  const image = data?.data.userImage;

  const [present, setPresent] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [coms, setComs] = useState(comments);

  const handlePresentClick = () => {
    setPresent((prevValue) => !prevValue);
  };
  const handleCommentClick = () => {
    setShowComments((prevValue) => !prevValue);
  };
  const handleCommentSubmit = () => {
    const userComment = {
      userName: "You",
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
          <Avatar hasIcon={false} imageSource={image} isClickable={false} />
        </div>
        <EventCardGraphics className="card__details-graphics" />

        <div className="card__details">
          <div className="card__details-name">{name}</div>
          {Moment(date).format("MMM Do") ===
          Moment(new Date()).format("MMM Do") ? (
            <div className="card__details-birthday">
              Celebrates a birthday <span>today</span>
            </div>
          ) : (
            <div className="card__details-birthday">
              Celebrated a birthday on{" "}
              <span>{Moment(date).format("MMM Do")}</span>
            </div>
          )}
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
            {present ? <PresentIconColor /> : <PresentIconClear />}
            <span className="card__icons-number">
              {present ? (wishes = wishes + 1) : wishes}
            </span>
          </div>
          <CommentIcon
            onClick={handleCommentClick}
            onKeyDown={handleCommentClick}
            aria-hidden="true"
          />{" "}
          <span className="card__icons-number">{coms.length}</span>
        </div>
        <div>
          {showComments && (
            <div className="card--expanded">
              <EventCardDivider className="card--expanded__divider" />
              {coms.map((item, index) => (
                <div className="card--expanded__comments" key={index}>
                  <div>
                    <span>{item.userName}</span>
                    <span>{Moment(item.date).format("MM/DD/YYYY HH:mm")}</span>
                  </div>
                  <span>{item.comment}</span>
                </div>
              ))}

              <div className="comments__box">
                <input
                  className="comments__box-input"
                  value={commentValue}
                  onInput={(e) => setCommentValue(e.target.value)}
                  placeholder="Send a wish!"
                />
                {commentValue.trim() ? (
                  <Button
                    type="submit"
                    label="Send"
                    onClick={handleCommentSubmit}
                  />
                ) : (
                  <Button
                    type="submit"
                    label="Send"
                    onClick={handleCommentSubmit}
                    disabled={true}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
