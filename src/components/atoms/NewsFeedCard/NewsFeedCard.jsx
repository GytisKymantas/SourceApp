import React from "react";
import PropTypes from "prop-types";
import vectorPlay from "../../../assets/news/vectorPlay.svg";
import vectorOval from "../../../assets/news/vectorOval.svg";
import vectorComment from "../../../assets/news/vectorComment.svg";
import vectorLikes from "../../../assets/news/vectorLikes.svg";
import "../NewsFeedCard/news-Feed-Card.scss";

const NewsFeedItem = ({
  userName,
  userImage,
  postLocation,
  postDate,
  postLikes,
  postComments,
}) => (
  <div className="card">
    <div className="card-header__wrapper">
      <div className="card__title">
        <img src={userImage} alt="your profile" />
        <p className="card--name">{userName}</p>
      </div>
      <div className="card__timestamp">
        <p>{postLocation}</p>
        <p className="card--time">{postDate}</p>
      </div>
    </div>
    <div className="video">
      <div className="icon">
        <img className="vector__one" src={vectorPlay} alt="" />
        <img className="vector__two" src={vectorOval} alt="" />
      </div>
      <div className="photo">{userImage}</div>
    </div>
    <div className="actions">
      <button className="likes">
        <div className="likes__outline">
          <img src={vectorLikes} alt="like here" />
        </div>
        <div className="likes__body">{postLikes}</div>
      </button>
      <button className="comments">
        <div>
          <img src={vectorComment} alt="leave comment here" />
        </div>
        <div className="comments__body">{postComments}</div>
      </button>
    </div>
    <div className="comment__wrapper">
      <span className="divider_top"></span>
      <div>
        <div className="comments__rows">
          <div className="comments__box_one">
            <div className="comments__header">
              <div className="comments--name">{userName}</div>
              <div className="comments__timestamp">{postDate}</div>
            </div>
            <div className="comments--content"></div>
          </div>
          <div className="comments__box_two">
            <div className="comments_header__two">
              <div className="comments--name__two">{userName}</div>
              <div className="comments_timestamp__two">{postDate}</div>
            </div>
            <div className="comments--content__two"></div>
          </div>
        </div>
      </div>
      <span className="divider_bottom"></span>
      <div className="comment_input">
        <img src={userImage} alt="your profile icon" />
        <input
          type="text"
          placeholder="Leave a comment..."
          className="input_leave_comment"
        />
        <button className="button__post">Post</button>
      </div>
    </div>
  </div>
);

NewsFeedItem.propTypes = {
  userName: PropTypes.string,
  userImage: PropTypes.string,
  postLocation: PropTypes.string,
  postDate: PropTypes.string,
  postLikes: PropTypes.number,
  postComments: PropTypes.arrayOf({
    usernName: PropTypes.string,
    postComments: PropTypes.string,
    postDate: PropTypes.string,
  }),
};

export default NewsFeedItem;
