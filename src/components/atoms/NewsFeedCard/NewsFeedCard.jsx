import React, { useState } from "react";
// import PropTypes from "prop-types";
import vectorPlay from "../../../assets/vectorPlay.svg";
import vectorOval from "../../../assets/vectorOval.svg";
import { ReactComponent as VectorComment } from "../../../assets/vectorComment.svg";
import { ReactComponent as TransparentHeart } from "../../../assets/transparentHeart.svg";
import { ReactComponent as RedHeart } from "assets/redHeart.svg";
import Moment from "moment";
import { Button } from "../../atoms/Button/Button";
import "../NewsFeedCard/news-feed-card.scss";

export const NewsFeedItem = (data) => {
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
  } = postNews[1];

  const postVideos = data?.data;
  const { postCover, postVideo } = postVideos[1];

  // const postNews = data?.data[2];
  // const postVideos = data?.data[2];

  // const userName = postNews.userName;
  // const userImage = postNews.userImage;
  // const postImage = postNews.postImage;
  // const postLocation = postNews.postLocation;
  // const postDate = postNews.postDate;
  // const comments = postNews.comments;
  // const comment = postNews.comment;
  // const postCover = postNews.postCover;
  // const date = postNews.date;
  // const postVideo = postNews.postVideo;

  // like button
  const [like, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike((prevValue) => !prevValue);
  };
  // like button end

  // comment submit start
  const [commentValue, setCommentValue] = useState("");
  const [coms, setComs] = useState(comments);

  // veikia
  const handleCommentSubmit = () => {
    const userComment = {
      userName: "You",
      comment: commentValue,
      date: Moment(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
    };
    setComs([...coms, userComment]);
    setCommentValue("");
  };

  // comment submit end
  return (
    <div className="card">
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
      {postVideos ? (
        <div className="card__content-video">
          <img className="vector__two" src={vectorOval} alt="" />
          <img className="vector__one" src={vectorPlay} alt="" />
          <video className="card__content-image" src={postVideo || postCover}>
            <track kind="captions" type="video/mp4"></track>
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      ) : (
        <img className="card__content-image" src={postImage} alt="" />
      )}
      {/* liek button start */}
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
        <button className="comments">
          <VectorComment />
          <span className="comments__body">{coms.length}</span>
        </button>
      </div>
      <div className="comment__wrapper">
        <span className="divider_top"></span>
        <div className="comments__rows">
          {coms.map((item, index) => (
            <div className="comments__box_one" key={index}>
              <div className="comments__header">
                <span className="comments__name">{item.userName}</span>
                <div className="comments__timestamp">
                  <span>{Moment(item.date).format("MM/DD/YYYY HH:mm")}</span>
                </div>
              </div>
              <span className="comments--content">{item.comment}</span>
            </div>
          ))}
        </div>
        <span className="divider_bottom"></span>
        <div className="comment_input">
          <img className="user__icon" src={userImage} alt="your profile icon" />
          <input
            className="input_leave_comment"
            type="text"
            placeholder="Leave a comment..."
            value={commentValue}
            onInput={(e) => setCommentValue(e.target.value)}
          />
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
