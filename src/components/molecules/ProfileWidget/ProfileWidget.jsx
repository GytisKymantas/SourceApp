import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "components/atoms/Avatar/Avatar";
import { DropDown } from "components/atoms/DropDown/DropDown";

import { ReactComponent as SettingsLogo } from "../../../assets/settings.svg";
import { ReactComponent as LogOutLogo } from "../../../assets/logOut.svg";
import { ReactComponent as Notification } from "../../../assets/notification.svg";
import { ReactComponent as Elipse } from "../../../assets/elipse.svg";

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

  const ref = useRef();

  // useEffect hook closes the dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        // if inside click
        return;
      }
      // if outside click
      setShowDropDown(false);
    };

    if (showDropDown) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropDown, setShowDropDown]);

  return (
    <div className="profile-widget">
      <div className="profile-widget__notifications-container">
        <Notification className="profile-widget__notification-icon" />
        {notifications && <Elipse className="profile-widget__elipse-icon" />}
      </div>
      <div
        onClick={handleAvatarClick}
        onKeyDown={handleAvatarClick}
        role="menu"
        tabIndex={0}
      >
        <Avatar hasIcon={true} />
      </div>
      {showDropDown && (
        <div ref={ref} className="profile-widget__drop-down">
          <DropDown options={menuItems} onSelect={handleOptionSelect} />
        </div>
      )}
    </div>
  );
};
