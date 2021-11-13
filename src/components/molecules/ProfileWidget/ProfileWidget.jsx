import { Avatar } from "components/atoms/Avatar/Avatar";
import React, { useState } from "react";
import { ReactComponent as Notification } from "../../../assets/notification.svg";
import { ReactComponent as Elipse } from "../../../assets/elipse.svg";
// import PropTypes from "prop-types";

import "./ProfileWidget.scss";

export const ProfileWidget = () => {
  // state placeholder for future notifications functionality,
  // suppose to be false by default actually
  // eslint-disable-next-line no-unused-vars
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="profile-widget">
      <div className="profile-widget__notifications-container">
        <Notification className="profile-widget__notification-icon" />
        {notifications && <Elipse className="profile-widget__elipse-icon" />}
      </div>
      <div className="profile-widget__avatar">
        <Avatar
          imageSource={
            "https://data.whicdn.com/images/322027365/original.jpg?t=1541703413"
          }
          hasIcon={true}
        />
      </div>
      {/* <div className="profile-widget__something"></div> */}
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
