import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { ReservationsSection } from "components/molecules/ReservationsSection/ReservationsSection";
import React from "react";
<<<<<<< HEAD
=======
import { useState, useEffect } from "react";
import { StoriesSection } from "components/organisms/StoriesSection/StoriesSection";
>>>>>>> dev

export const Dashboard = (data) => {
  const userData = data.data?.userData[0];
  const firstName = userData?.userName.split(" ")[0];
  const reservationInfo = userData?.reservations;

  return (
    <MainLayout>
      <ReservationsSection info={reservationInfo} />
      <HelloWidget name={firstName} />
    </MainLayout>
  );
};
