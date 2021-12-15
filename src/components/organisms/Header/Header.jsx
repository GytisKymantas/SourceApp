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
      <a className="header__logo" href={logoPath}>
        {matched ? <RocketLogo /> : <Logo />}
      </a>
      <Navigation className="header__navigation" />
      <ProfileWidget className="header__profile-widget" />
    </header>
  );
};
