import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";

export const Dashboard = () => {
  const name = "Vilija";
  return (
    <MainLayout>
      <HelloWidget name={name} />
    </MainLayout>
  );
};
