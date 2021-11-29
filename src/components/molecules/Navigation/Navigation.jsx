import React from "react";
import { MenuItem } from "../../atoms/MenuItem/MenuItem";
import { ReactComponent as ReservationsIcon } from "../../../assets/reservationsIcon.svg";
import { ReactComponent as EatOutIcon } from "../../../assets/eatOutIcon.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/dashboardIcon.svg";

import "./navigation.scss";

export const Navigation = () => {
  const eatOutLink = "Eat-Out";
  const reservationsLink = "Reservations";
  const dashboardLink = "Dashboard";
  return (
    <div className="navigation">
      <MenuItem icon={<DashboardIcon />} name={dashboardLink} link="/" />
      <MenuItem
        icon={<ReservationsIcon />}
        name={reservationsLink}
        link="/reservations"
      />
      <MenuItem icon={<EatOutIcon />} name={eatOutLink} link="/eatout" />
    </div>
  );
};
