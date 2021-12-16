import React from "react";
import { ReactComponent as Logo } from "assets/rocketLogo.svg";

import "./header.scss";
import { ProfileWidget } from "../../molecules/ProfileWidget/ProfileWidget";
import { Navigation } from "../../molecules/Navigation/Navigation";

const logoPath = "/";

export const Header = () => (
  <header className="header">
    <a href={logoPath}>
      <Logo />
    </a>
    <Navigation />
    <ProfileWidget />
  </header>
);
