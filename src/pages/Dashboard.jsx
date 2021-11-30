import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import PropTypes from "prop-types";

export const Dashboard = ({ data }) => {
  const { userData } = data;
  const [firstUser] = userData;
  const { userName } = firstUser;

  return (
    <MainLayout>
      <HelloWidget name={userName} />
    </MainLayout>
  );
};

Dashboard.propTypes = {
  data: PropTypes.object,
};
