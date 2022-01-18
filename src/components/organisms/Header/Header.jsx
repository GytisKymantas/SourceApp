import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as RocketLogo } from "assets/rocketLogo.svg";
import { ReactComponent as Logo } from "assets/logo.svg";

import "./header.scss";
import { ProfileWidget } from "../../molecules/ProfileWidget/ProfileWidget";
import { Navigation } from "../../molecules/Navigation/Navigation";

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;

  let navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("../dashboard/", { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <header className="header">
      <div
        className="header__logo"
        role="button"
        aria-label="Go to Dashboard"
        tabIndex="0"
        onClick={handleLogoClick}
        onKeyDown={handleLogoClick}
      >
        {width > breakPoint ? <Logo /> : <RocketLogo />}
      </div>
      <Navigation className="header__navigation" />
      <ProfileWidget className="header__profile-widget" />
    </header>
  );
};
