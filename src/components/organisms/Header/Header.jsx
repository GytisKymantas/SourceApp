import React from "react";
import { ReactComponent as Logo } from "assets/rocketLogo.svg";

import "./header.scss";
import { ProfileWidget } from "../../molecules/ProfileWidget/ProfileWidget";
import { Navigation } from "../../molecules/Navigation/Navigation";

export const Header = () => (
  <header className="header">
    <Logo />
    <Navigation />
    <ProfileWidget />
  </header>
);
