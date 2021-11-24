import React from "react";
import timestamp from "../../../../assets/news/timestamp.svg";
import vectorPlay from "../../../../assets/news/vectorPlay.svg";
import vectorOval from "../../../../assets/news/vectorOval.svg";
import vectorComment from "../../../../assets/news/vectorComment.svg";
import vectorLikes from "../../../../assets/news/vectorLikes.svg";
import "../video/scss/card.scss";

const Video = () => (
  <div className="card">
    {/* header wrapper */}
    <div className="card--header__wrapper">
      <div className="card--title">
        <img src={timestamp} alt="your profile icon" />
        <p className="card--name">First name Last name</p>
      </div>
      <div className="card--timestamp">
        <p>VLN </p>
        <p className="card--time">20h</p>
      </div>
    </div>
    {/* video */}
    <div className="video">
      <div className="icon">
        <img className="vector--one" src={vectorPlay} alt="" />
        <img className="vector--two" src={vectorOval} alt="" />
      </div>
      <div className="photo"></div>
    </div>
    {/* Actions */}
    <div className="actions">
      <button className="likes">
        <div className="likes--outline">
          <img src={vectorLikes} alt="like here" />
        </div>
        <div className="likes--body">2</div>
      </button>
      <button className="comments">
        <div>
          <img src={vectorComment} alt="leave comment here" />
        </div>
        <div className="comments--body">1</div>
      </button>
    </div>
    <div className="comment--wrapper">
      <span className="divider--top"></span>
      <div>
        <div className="comments--rows">
          <div className="comments--box__one">
            <div className="comments--header">
              <div className="comments--name">Firstname Lastname</div>
              <div className="comments--timestamp">9/28/2021 2:23 PM</div>
            </div>
            <div className="comments--content">
              A new comment on this post. A new comment on this post. A new
              comment on this post.
            </div>
          </div>
          <div className="comments--box__two">
            <div className="comments--header__two">
              <div className="comments--name__two">Firstname Lastname</div>
              <div className="comments--timestamp__two">9/28/2021 2:23 PM</div>
            </div>
            <div className="comments--content__two">
              A new comment on this post.
            </div>
          </div>
        </div>
      </div>
      <span className="divider--bottom"></span>
      <div className="comment--input">
        <img src={timestamp} alt="your profile icon" />
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

export default Video;
