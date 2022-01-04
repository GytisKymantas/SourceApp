import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import LinesEllipsis from "react-lines-ellipsis";

import "./view-eat-out-card.scss";

export const ViewEatOutCard = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/dashboard/eatout`;
    navigate(path);
  };
  const text =
    "import LinesEllipsis from 'react-lines-ellipsis import LinesEllipsis from 'react-lines-ellipsis' import LinesEllipsis from 'react-lines-ellipsis'";

  return (
    <div className="view-eat-out-card">
      <div className="view-eat-out-card__content">
        <div className="view-eat-out-card__text">
          <LinesEllipsis text={text} maxLine="3" basedOn="words" />{" "}
        </div>
        <Button label="browse list" onClick={routeChange} />
      </div>
    </div>
  );
};
