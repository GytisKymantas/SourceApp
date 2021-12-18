import React from "react";
// import PropTypes from "prop-types";
import vectorPlay from "../../../assets/vectorPlay.svg";
import vectorOval from "../../../assets/vectorOval.svg";
import vectorComment from "../../../assets/vectorComment.svg";
import transparentHeart from "../../../assets/transparentHeart.svg";
import redHeart from "assets/redHeart.svg";
import Moment from "moment";
import { Button } from "../../atoms/Button/Button";
import "../NewsFeedCard/news-feed-card.scss";

export const NewsFeedItem = (data) => {
  Moment.locale("en");

  const postNews = data?.data[0];
  const postVideos = data?.data[7];

  // console.log(postNews);

  const userName = postNews.userName;
  const userImage = postNews.userImage;
  const postImage = postNews.postImage;
  const postLocation = postNews.postLocation;
  const postDate = postNews.postDate;
  let likes = postNews.likes;
  const comments = postNews.comments;
  const comment = postNews.comment;
  const date = postNews.date;
  const postCover = postNews.postCover;
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
          <img className="vector__one" src={vectorPlay} alt="" />
          <img src={postCover} alt="" />
          <img className="card__content-image" src={postVideo} alt="" />
          <img className="vector__two" src={vectorOval} alt="" />
        </div>
      ) : (
        <img className="card__content-image" src={postImage} alt="" />
      )}
      <div className="actions">
        <button className="likes">
          <div className="likes__outline">
            <img src={transparentHeart} alt="like here" />
            <img src={redHeart} alt="like here" />
          </div>
          <div className="likes__body">{likes}</div>
        </button>
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
