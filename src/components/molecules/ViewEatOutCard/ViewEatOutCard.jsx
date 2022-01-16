import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import "./view-eat-out-card.scss";

export const ViewEatOutCard = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/dashboard/eatout`;
    navigate(path);
  };

  return (
    <div className="view-eat-out-card">
      <div className="view-eat-out-card__content">
        <div className="view-eat-out-card__text">
          View all your favourite lunch spots and more
        </div>
        <Button label="browse list" onClick={routeChange} />
      </div>
    </div>
  );
};
