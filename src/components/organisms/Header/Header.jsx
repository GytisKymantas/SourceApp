import React, { useEffect, useState } from "react";
import { ReactComponent as RocketLogo } from "assets/rocketLogo.svg";
import { ReactComponent as Logo } from "assets/logo.svg";

import "./header.scss";
import { ProfileWidget } from "../../molecules/ProfileWidget/ProfileWidget";
import { Navigation } from "../../molecules/Navigation/Navigation";

const logoPath = "/dashboard";

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <header className="header">
      <a className="header__logo" href={logoPath}>
        {width > breakPoint ? <Logo /> : <RocketLogo />}
      </a>
      <Navigation className="header__navigation" />
      <ProfileWidget className="header__profile-widget" />
    </header>
  );
};
