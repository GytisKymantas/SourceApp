import React from "react";
import { RestaurantCard } from "components/atoms/RestaurantCard/RestaurantCard";
import pizza from "components/atoms/RestaurantCard/Photo copy.jpg";
import user from "components/atoms/RestaurantCard/Check in copy.svg";
import vector from "components/atoms/RestaurantCard/Vector copy.svg";
import heart from "components/atoms/RestaurantCard/heart copy.svg";

export const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <RestaurantCard
      headerImage={pizza}
      userImage={user}
      heartImage={heart}
      vectorImage={vector}
      isTrue={false}
    />
  </div>
);
