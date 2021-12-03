import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import { Button } from "components/atoms/ButtonQA/ButtonQA";

export const Dashboard = (data) => {
  function clickedBtn() {
    // eslint-disable-next-line no-console
    console.log("button was clicked");
  }
  const userData = data.data?.userData[0];
  const firstName = userData?.userName.split(" ")[0];

  return (
    <MainLayout>
      <HelloWidget name={firstName} />
      <Button label="button" onClick={clickedBtn} />
    </MainLayout>
  );
};
