import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import playIcon from "../../../assets/playIcon.svg";
import { ReactComponent as VectorComment } from "../../../assets/vectorComment.svg";
import { ReactComponent as TransparentHeart } from "../../../assets/transparentHeart.svg";
import { ReactComponent as RedHeart } from "assets/redHeart.svg";
import Moment from "moment";
import { Button } from "../Button/Button";
import "./news-feed-card.scss";

export const NewsFeedCard = (data) => {
  Moment.locale("en");

  const postNews = data?.data;
  let {
    userName,
    userImage,
    postImage,
    postLocation,
    postDate,
    comments,
    likes,
    postVideo,
  } = postNews[2];

  // like button
  const [like, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike((prevValue) => !prevValue);
  };
  // like button end

  // comment submit start
  const [commentValue, setCommentValue] = useState("");
  const [coms, setComs] = useState(comments);

  const handleCommentSubmit = () => {
    const userComment = {
      userName: "You",
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
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };
  // comment submit end
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
            className="card__content-video-main"
            ref={videoRef}
            src={postVideo}
            type="video/mp4"
          >
            <track kind="captions" type="video/mp4"></track>
          </video>
          {playing ? (
            <img
              className="video--pause"
              onClick={() => videoHandler("pause")}
              onKeyDown={() => videoHandler("pause")}
              src={playIcon}
              alt=""
              role="presentation"
            />
          ) : (
            <img
              className="video--play"
              onClick={() => videoHandler("play")}
              onKeyDown={() => videoHandler("play")}
              src={playIcon}
              alt=""
              role="presentation"
            />
          )}
        </div>
      ) : (
        <img className="card__content-image" src={postImage} alt="" />
      )}
      {/* like button start */}
      <div className="actions">
        <div className="likes">
          {like ? (
            <RedHeart
              className="card__icons-present"
              onClick={handleLikeClick}
              onKeyDown={handleLikeClick}
            />
          ) : (
            <TransparentHeart
              className="card__icons-present"
              onClick={handleLikeClick}
              onKeyDown={handleLikeClick}
            />
          )}
          <span className="likes__body">
            {like ? (likes = likes + 1) : likes}
          </span>
        </div>
        <div className="comments">
          <VectorComment />
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
                  {/* <span className="comments__name"> */}
                  {Moment(item.date).format("MM/DD/YYYY HH:mm")}
                  {/* </span> */}
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
              src={userImage}
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
};
