import React from "react";
import { ReactComponent as Logo } from "assets/rocketLogo.svg";

import "./header.scss";
import { ProfileWidget } from "../ProfileWidget/ProfileWidget";

export const Header = () => (
  <header className="header">
    <Logo className="header__logo" />
    <ProfileWidget className="header__user-profile" />
  </header>
);
