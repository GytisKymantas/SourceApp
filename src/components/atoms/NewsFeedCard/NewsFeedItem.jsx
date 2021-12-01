import React from "react";
import PropTypes from "prop-types";
import vectorPlay from "../../../assets/news/vectorPlay.svg";
import vectorOval from "../../../assets/news/vectorOval.svg";
import vectorComment from "../../../assets/news/vectorComment.svg";
import vectorLikes from "../../../assets/news/vectorLikes.svg";
import "../NewsFeedCard/newsFeedItem.scss";

const NewsFeedItem = ({
  userName,
  userImage,
  postLocation,
  postDate,
  postLikes,
  postComments,
}) => (
  <div className="card">
    <div className="card--header__wrapper">
      <div className="card--title">
        <img src={userImage} alt="your profile" />
        <p className="card--name">{userName}</p>
      </div>
      <div className="card--timestamp">
        <p>{postLocation}</p>
    
        <p className="card--time">{postDate}</p>
      </div>
    </div>
    <div className="video">
      <div className="icon">
        <img className="vector--one" src={vectorPlay} alt="" />
        <img className="vector--two" src={vectorOval} alt="" />
      </div>
      <div className="photo">{userImage}</div>
    </div>
    <div className="actions">
      <button className="likes">
        <div className="likes--outline">
          <img src={vectorLikes} alt="like here" />
        </div>
        <div className="likes--body">{postLikes}</div>
      </button>
      <button className="comments">
        <div>
          <img src={vectorComment} alt="leave comment here" />
        </div>
        <div className="comments--body">{postComments}</div>
      </button>
    </div>
    <div className="comment--wrapper">
      <span className="divider--top"></span>
      <div>
        <div className="comments--rows">
          <div className="comments--box__one">
            <div className="comments--header">
              <div className="comments--name">{userName}</div>
              <div className="comments--timestamp">{postDate}</div>
            </div>
            <div className="comments--content">
              A new comment on this post. A new comment on this post. A new
              comment on this post.
            </div>
          </div>

          <div className="comments--box__two">
            <div className="comments--header__two">
              <div className="comments--name__two">{userName}</div>
              <div className="comments--timestamp__two">{postDate}</div>
            </div>
            <div className="comments--content__two">
              A new comment on this post.
            </div>
          </div>
        </div>
      </div>
      <span className="divider--bottom"></span>
      <div className="comment--input">
        <img src={userImage} alt="your profile icon" />
        <input
          type="text"
          placeholder="Leave a comment..."
          className="input--leave__comment"
        />
        <button className="button--post">Post</button>
      </div>
    </div>
  </div>
);

Video.propTypes = {
  userName: PropTypes.string,
  userImage: PropTypes.string,
  postLocation: PropTypes.string,
  postDate: PropTypes.string,
  postLikes: PropTypes.number,
  postComments: PropTypes.array,
};

export default NewsFeedItem;
