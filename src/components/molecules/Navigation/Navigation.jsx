import React from "react";
import { MenuItem } from "../../atoms/Navigation/MenuItem";
import { ReactComponent as ReservationsIcon } from "../../../assets/reservationsIcon.svg";
import { ReactComponent as EatOutIcon } from "../../../assets/eatOutIcon.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/dashboardIcon.svg";
import { ReactComponent as SpaceTeamLogo } from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./navigation.scss";

export const Navigation = () => {
  const eatOutLink = "Eat-Out";
  const reservationsLink = "Reservations";
  const dashboardLink = "Dashboard";
  return (
    <div className="navigation">
      <Link to="/" className="navigation__logo">
        <SpaceTeamLogo />
      </Link>

      <div className="navigation__menuItems">
        <MenuItem icon={<DashboardIcon />} name={dashboardLink} link="/" />
        <MenuItem
          icon={<ReservationsIcon />}
          name={reservationsLink}
          link="/reservations"
        />
        <MenuItem icon={<EatOutIcon />} name={eatOutLink} link="/eatOut" />
      </div>
    </div>
  );
};
