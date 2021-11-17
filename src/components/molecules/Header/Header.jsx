import React from "react";
import { ReactComponent as Logo } from "assets/rocketLogo.svg";
import { ReactComponent as Notification } from "../../../assets/notification.svg";

import "./header.scss";

export const Header = () => (
  <header className="header">
    <Logo className="header__logo" />
    <div className="header__nav"></div>
    <div className="header__user-profile-container">
      <Notification className="header__notification-bell" />
      <div className="header__user-profile-widget"></div>
    </div>
  </header>
);
