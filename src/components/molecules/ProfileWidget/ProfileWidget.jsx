import { Avatar } from "components/atoms/Avatar/Avatar";
import React from "react";
// import PropTypes from "prop-types";

import "./ProfileWidget.scss";

export const ProfileWidget = () => {
  return (
    <div className="profile-widget">
      <div className="profile-widget__avatar">
        <Avatar
          imageSource={
            "https://data.whicdn.com/images/322027365/original.jpg?t=1541703413"
          }
          hasIcon={true}
        />
      </div>
      <div className="profile-widget__something"></div>
    </div>
  );
};

// Avatar.defaultProps = {
//   hasIcon: false,
// };

// Avatar.propTypes = {
//   imageSource: PropTypes.string,
//   hasIcon: PropTypes.bool,
// };
