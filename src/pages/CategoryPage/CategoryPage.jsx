import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import { useParams } from "react-router-dom";

export const CategoryPage = () => {
  const { params } = useParams();

  return (
    <MainLayout>
      <h1>The best places for {params.category}</h1>
    </MainLayout>
  );
};
