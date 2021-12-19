import React, { useState } from "react";
// import PropTypes from "prop-types";
import vectorPlay from "../../../assets/vectorPlay.svg";
import vectorOval from "../../../assets/vectorOval.svg";
import vectorComment from "../../../assets/vectorComment.svg";
import { ReactComponent as transparentHeart } from "../../../assets/transparentHeart.svg";
import { ReactComponent as redHeart } from "assets/redHeart.svg";
import Moment from "moment";
import { Button } from "../../atoms/Button/Button";
import "../NewsFeedCard/news-feed-card.scss";

export const NewsFeedItem = (data) => {
  Moment.locale("en");

  // like button
  const [like, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike((prevValue) => !prevValue);
  };
  // like button end

  const postNews = data?.data[1];
  const postVideos = data?.data[2];

  // console.log(postNews);

  const userName = postNews.userName;
  const userImage = postNews.userImage;
  const postImage = postNews.postImage;
  const postLocation = postNews.postLocation;
  const postDate = postNews.postDate;
  let likes = postNews.likes;
  const comments = postNews.comments;
  const comment = postNews.comment;
  const postCover = postNews.postCover;
  const date = postNews.date;

  // const {
  //   userName,
  //   userImage,
  //   postImage,
  //   postLocation,
  //   postDate,
  //   comments,
  //   comment,
  //   postCover,
  //   date,
  //   // Video
  //   postVideo,
  // } = postNews;

  // let likes = postNews;
  // same video
  const postVideo = postNews.postVideo;
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
        {/* <button className="likes"> */}
        <div className="likes">
          {/* <img src={transparentHeart} alt="like here" /> */}
          {/* <img src={redHeart} alt="like here" /> */}
          {like ? (
            <redHeart
              className="card__icons-present"
              onClick={handleLikeClick}
              onKeyDown={handleLikeClick}
            />
          ) : (
            <transparentHeart
              className="card__icons-present"
              onClick={handleLikeClick}
              onKeyDown={handleLikeClick}
            />
          )}
          <span className="likes__body">
            {like ? (likes = likes + 1) : likes}
          </span>
        </div>
        {/* <div className="likes__body">{likes}</div> */}
        {/* </button> */}
        {/* liek button end*/}
        <button className="comments">
          <div>
            <img src={vectorComment} alt="leave comment here" />
          </div>
          <div className="comments__body">{comments.length}</div>
        </button>
      </div>
      <div className="comment__wrapper">
        <span className="divider_top"></span>
        <div>
          <div className="comments__rows">
            {comments.map((item1, index1) => (
              <div className="comments__box_one" key={index1}>
                <div className="comments__header">
                  <span className="comments__name">{item1.userName}</span>
                  {/* dummy */}
                  <div>{date}</div>
                  <div className="comments__timestamp">
                    <span>{Moment(item1.date).format("MM/DD/YYYY HH:mm")}</span>
                  </div>
                </div>
                {/* dummy */}
                <div> {comment}</div>
                <span className="comments--content">{item1.comment}</span>
              </div>
            ))}
          </div>
        </div>
        <span className="divider_bottom"></span>
        <div className="comment_input">
          <img className="user__icon" src={userImage} alt="your profile icon" />
          <input
            type="text"
            placeholder="Leave a comment..."
            className="input_leave_comment"
          />
          <Button type="submit" label="POST"></Button>
        </div>
      </div>
    </div>
  );
};
