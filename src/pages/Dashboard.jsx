import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { ReservationsSection } from "components/molecules/ReservationsSection/ReservationsSection";
import React from "react";

export const Dashboard = () => (
  <MainLayout>
    <h1>Dashboard</h1>
    <ReservationsSection />
  </MainLayout>
);
