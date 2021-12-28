import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "components/atoms/Button/Button";

import "./not-found.scss";

export const NotFound = () => {
  let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("../dashboard/dashboard", { replace: true });
  };

  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">Oops!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <h4>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </h4>
      <Button
        type="submit"
        label="go to homepage"
        isLarge={true}
        onClick={handleButtonClick}
      />
    </div>
  );
};
