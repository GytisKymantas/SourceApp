import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import { Button } from "components/atoms/ButtonQA/ButtonQA";

export const Dashboard = () => {
  function clickedBtn() {
    // eslint-disable-next-line no-console
    console.log("button was clicked");
  }

  return (
    <MainLayout>
      <h1>Dashboard</h1>
      <Button label="button" onClick={clickedBtn} />
    </MainLayout>
  );
};
