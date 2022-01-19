import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import playIcon from "../../../assets/playIcon.svg";
import { ReactComponent as CommentIcon } from "../../../assets/commentIcon.svg";
import { ReactComponent as ClearHeartIcon } from "assets/clearHeartIcon.svg";
import { ReactComponent as RedHeartIcon } from "assets/redHeartIcon.svg";
import Moment from "moment";
import { Button } from "../../atoms/Button/Button";
import "./news-feed-card.scss";

export const NewsFeedCard = ({ data, userData }) => {
  Moment.locale("en");
  const postNews = data;
  const {
    userName,
    userImage,
    postImage,
    postLocation,
    postDate,
    comments,
    postVideo,
  } = postNews;
  let { likes } = postNews;

  const currentUserImage = userData?.userImage;
  const currentUserName = userData?.userName;
  const [like, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike((prevValue) => !prevValue);
  };

  const handleKeyboardLikeClick = (event) => {
    if (event.key === "Enter") {
      setLike((prevValue) => !prevValue);
    }
  };

  const [commentValue, setCommentValue] = useState("");
  const [coms, setComs] = useState(comments);

  const handleCommentSubmit = () => {
    const userComment = {
      userName: currentUserName,
      comment: commentValue,
      date: Moment(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
    };
    setComs([...coms, userComment]);
    setCommentValue("");
  };

  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };
  return (
    <div className="card__news">
      <div className="card-header__wrapper">
        <div className="card__title">
          <img className="user__icon" src={userImage} alt="your profile" />
          <p className="card--name">{userName}</p>
        </div>
        <div className="card__timestamp">
          <p>{postLocation}</p>
          <p className="card--time">{Moment(postDate).format("HH")}H</p>
        </div>
      </div>
      {postVideo ? (
        <div className="card__content-video">
          <video
            onClick={() => videoHandler(playing ? "pause" : "play")}
            className="card__content-video-main"
            ref={videoRef}
            src={postVideo}
            type="video/mp4"
            loop
          >
            <track kind="captions" type="video/mp4"></track>
          </video>
          {
            <img
              className={playing ? "video--pause" : "video--play"}
              src={playIcon}
              alt=""
              role="presentation"
              onClick={() => videoHandler(playing ? "pause" : "play")}
            />
          }
        </div>
      ) : (
        <div className="card__content-image">
          <img className="card__content-image-main" src={postImage} alt="" />
        </div>
      )}
      <div className="actions">
        <div className="likes">
          {like ? (
            <RedHeartIcon
              className="card__icons-present"
              onClick={handleLikeClick}
              onKeyDown={handleKeyboardLikeClick}
            />
          ) : (
            <ClearHeartIcon
              className="card__icons-present"
              onClick={handleLikeClick}
              onKeyDown={handleKeyboardLikeClick}
            />
          )}
          <span className="likes__body">
            {like ? (likes = likes + 1) : likes}
          </span>
        </div>
        <div className="comments">
          <CommentIcon />
          <span className="comments__body">{coms.length}</span>
        </div>
      </div>
      <div className="comment__wrapper">
        <span className="divider_top"></span>
        <div className="comments__rows">
          {coms.map((item, index) => (
            <div className="comments__box_one" key={index}>
              <div className="comments__header">
                <span>{item.userName}</span>
                <div className="comments__timestamp">
                  {Moment(item.date).format("MM/DD/YYYY HH:mm")}
                </div>
              </div>
              <span className="comments--content">{item.comment}</span>
            </div>
          ))}
        </div>
        <span className="divider_top"></span>
        <div className="comment_input">
          <div className="comment_input-content">
            <img
              className="user__icon"
              src={currentUserImage}
              alt="your profile icon"
            />
            <input
              className="input_leave_comment"
              type="text"
              placeholder="Leave a comment..."
              value={commentValue}
              onInput={(e) => setCommentValue(e.target.value)}
            />
          </div>
          <Button
            className="btn__active"
            type="submit"
            label="POST"
            onClick={handleCommentSubmit}
            disabled={!commentValue.trim()}
          />
        </div>
      </div>
    </div>
  );
};

NewsFeedCard.propTypes = {
  userName: PropTypes.string,
  userImage: PropTypes.string,
  postImage: PropTypes.string,
  postLocation: PropTypes.string,
  postDate: PropTypes.string,
  comments: PropTypes.number,
  likes: PropTypes.number,
  postVideo: PropTypes.string,
  userData: PropTypes.object,
  data: PropTypes.object,
};
