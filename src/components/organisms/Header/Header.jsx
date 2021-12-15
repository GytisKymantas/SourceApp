import React from "react";
import useReactSimpleMatchMedia from "react-simple-matchmedia";
import { ReactComponent as RocketLogo } from "assets/rocketLogo.svg";
import { ReactComponent as Logo } from "assets/logo.svg";

import "./header.scss";
import { ProfileWidget } from "../../molecules/ProfileWidget/ProfileWidget";
import { Navigation } from "../../molecules/Navigation/Navigation";

const logoPath = "/dashboard";

export const Header = () => {
  const matched = useReactSimpleMatchMedia("(max-width: 768px)");

  return (
    <header className="header">
      <div className="header__logo">
        <a href={logoPath}>{matched ? <RocketLogo /> : <Logo />}</a>
      </div>
      <div className="header__navigation">
        <Navigation />
      </div>
      <div className="header__profile-widget">
        <ProfileWidget />
      </div>
    </header>
  );
};
