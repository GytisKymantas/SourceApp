import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { ReservationsSection } from "components/molecules/ReservationsSection/ReservationsSection";
import React from "react";

export const Dashboard = (data) => {
  const userData = data.data?.userData[0];
  const firstName = userData?.userName.split(" ")[0];
  const bam = userData?.reservations;
  // const test2 = bam && Object.entries(bam);
  // console.log(test2);
  // let test2 = Object.values;
  // console.log(Object.values(bam));
  // let test2 = Object.entries(bam);

  return (
    <MainLayout>
      <ReservationsSection info={bam} />
      <HelloWidget name={"fsdfs"} />
    </MainLayout>
  );
};
