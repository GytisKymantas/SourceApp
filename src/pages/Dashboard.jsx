import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import { ReservationsSection } from "components/molecules/ReservationsSection/ReservationsSection";

export const Dashboard = () => (
  <MainLayout>
    <ReservationsSection />
    <h1>Dashboard</h1>
  </MainLayout>
);
