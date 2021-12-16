import React from "react";
import { MenuItem } from "../../atoms/MenuItem/MenuItem";
import { ReactComponent as ReservationsIcon } from "../../../assets/reservationsIcon.svg";
import { ReactComponent as EatOutIcon } from "../../../assets/eatOutIcon.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/dashboardIcon.svg";

import "./navigation.scss";

export const Navigation = () => {
  const eatOutName = "Eat-Out";
  const reservationsName = "Reservations";
  const dashboardName = "Dashboard";
  const linkStart = "/dashboard";
  return (
    <div className="navigation">
      <MenuItem
        icon={<DashboardIcon />}
        name={dashboardName}
        link={linkStart + "/"}
      />
      <MenuItem
        icon={<ReservationsIcon />}
        name={reservationsName}
        link={linkStart + "/reservations"}
      />
      <MenuItem
        icon={<EatOutIcon />}
        name={eatOutName}
        link={linkStart + "/eatout"}
      />
    </div>
  );
};
