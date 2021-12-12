import React from "react";
import { ReactComponent as Logo } from "assets/rocketLogo.svg";

import "./header.scss";
import { ProfileWidget } from "../../molecules/ProfileWidget/ProfileWidget";
import { Navigation } from "../../molecules/Navigation/Navigation";

const logoPath = "/dashboard";

export const Header = () => (
  <header className="header">
    <div className="header__logo">
      <a href={logoPath}>
        <Logo />
      </a>
    </div>
    <div className="header__navigation">
      <Navigation />
    </div>
    <div className="header__profile-widget">
      <ProfileWidget />
    </div>
  </header>
);
