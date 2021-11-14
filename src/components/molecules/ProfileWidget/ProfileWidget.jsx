import React, { useState } from "react";
import { Avatar } from "components/atoms/Avatar/Avatar";
import { DropDown } from "components/atoms/DropDown/DropDown";

import { ReactComponent as SettingsLogo } from "../../../assets/settings.svg";
import { ReactComponent as LogOutLogo } from "../../../assets/logOut.svg";
import { ReactComponent as Notification } from "../../../assets/notification.svg";
import { ReactComponent as Elipse } from "../../../assets/elipse.svg";
// import PropTypes from "prop-types";

import "./ProfileWidget.scss";

export const ProfileWidget = () => {
  // state placeholder for future notifications functionality,
  // suppose to be false by default actually
  // eslint-disable-next-line no-unused-vars
  const [notifications, setNotifications] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);

  const menuItems = [
    {
      id: 1,
      logo: <SettingsLogo />,
      text: "Settings",
    },
    {
      id: 2,
      logo: <LogOutLogo />,
      text: "Log out",
    },
  ];

  const handleAvatarClick = () => {
    setShowDropDown((prevValue) => !prevValue);
  };

  const handleOptionSelect = (optionId) => {
    // placeholder for future functionality
    // eslint-disable-next-line no-console
    console.log("option selected", optionId);
  };

  return (
    <div className="profile-widget">
      <div className="profile-widget__notifications-container">
        <Notification className="profile-widget__notification-icon" />
        {notifications && <Elipse className="profile-widget__elipse-icon" />}
      </div>
      <div
        className="profile-widget__avatar"
        onClick={handleAvatarClick}
        onKeyDown={handleAvatarClick}
        // Not sure if nest two rows is right
        role="menu"
        tabIndex={0}
      >
        <Avatar
          imageSource={
            "https://data.whicdn.com/images/322027365/original.jpg?t=1541703413"
          }
          hasIcon={true}
        />
      </div>
      {showDropDown && (
        <div className="profile-widget__drop-down">
          <DropDown options={menuItems} onSelect={handleOptionSelect} />
        </div>
      )}
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
