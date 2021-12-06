import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { ReservationsSection } from "components/molecules/ReservationsSection/ReservationsSection";
import React from "react";

export const Dashboard = (data) => {
  const userData = data.data?.userData[0];
  const firstName = userData?.userName.split(" ")[0];
  // const bam = userData?.reservations;
  // const test2 = Object.entries(bam);
  // console.log(test2);

  return (
    <MainLayout>
      <ReservationsSection />
      <HelloWidget name={firstName} />
    </MainLayout>
  );
};
