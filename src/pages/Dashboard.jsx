import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import PropTypes from "prop-types";
import { ReservationsSection } from "components/molecules/ReservationsSection/ReservationsSection";

export const Dashboard = (data) => {
  const userData = data.data?.userData[0];
  const firstName = userData?.userName.split(" ")[0];
  return (
    <MainLayout>
      <ReservationsSection />
      <HelloWidget name={firstName} />
    </MainLayout>
  );
};
