import React from "react";
// import PropTypes from "prop-types";
// import vectorPlay from "../../../assets/vectorPlay.svg";
// import vectorOval from "../../../assets/vectorOval.svg";
import vectorComment from "../../../assets/vectorComment.svg";
import vectorLikes from "../../../assets/vectorLikes.svg";
import Moment from "moment";
import { Button } from "../../atoms/Button/Button";
import "../NewsFeedCard/news-feed-card.scss";

export const NewsFeedItem = (data) => {
  Moment.locale("en");

  // const postVideo = data?.data[0];
  const postNews = data?.data[1];

  // console.log(postNews);

  const name = postNews.userName;
  const userImage = postNews.userImage;
  const postImage = postNews.postImage;
  const postLocation = postNews.postLocation;
  const postDate = postNews.postDate;
  let likes = postNews.likes;
  let comments = postNews.comment;

  /* Let = {
    userName: comments.userName,
  };
*/
  return (
    <div className="card">
      <div className="card-header__wrapper">
        <div className="card__title">
          <img className="user__icon" src={userImage} alt="your profile" />
          <p className="card--name">{name}</p>
        </div>
        <div className="card__timestamp">
          <p>{postLocation}</p>
          <p className="card--time">{postDate}</p>
        </div>
      </div>
      {/* {postVideo ? (
        <div className="card__content-video">
          <img className="vector__one" src={vectorPlay} alt="" />

          <img className="vector__two" src={vectorOval} alt="" />
        </div>
      ) : (
        <div className="card__content-image">{postImage}</div>
      )} */}
      <img className="card__content-image" src={postImage} alt="" />
      <div className="actions">
        <button className="likes">
          <div className="likes__outline">
            <img src={vectorLikes} alt="like here" />
          </div>
          <div className="likes__body">{likes}</div>
        </button>
        <button className="comments">
          <div>
            <img src={vectorComment} alt="leave comment here" />
          </div>
          <div className="comments__body">{comments}</div>
        </button>
      </div>
      <div className="comment__wrapper">
        <span className="divider_top"></span>
        <div>
          <div className="comments__rows">
            <div className="comments__box_one">
              <div className="comments__header">
                <div className="comments__name">{name}</div>
                <div className="comments__timestamp">{postDate}</div>
              </div>
              <div className="comments--content"></div>
            </div>
            <div className="comments__box_two">
              <div className="comments_header__two">
                <div className="comments__name__two">{name}</div>
                <div className="comments_timestamp__two">{postDate}</div>
              </div>
              <div className="comments--content__two"></div>
            </div>
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
          <Button type="submit" label="Send"></Button>
        </div>
      </div>
    </div>
  );
};

// NewsFeedItem.propTypes = {
//   userName: PropTypes.string,
//   userImage: PropTypes.string,
//   postLocation: PropTypes.string,
//   postDate: PropTypes.string,
//   postLikes: PropTypes.number,
//   postVideo: PropTypes.string,
//   postComments: PropTypes.arrayOf({
//     usernName: PropTypes.string,
//     postComments: PropTypes.string,
//     postDate: PropTypes.string,
//   }),
// };
