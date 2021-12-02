import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import PropTypes from "prop-types";

export const Dashboard = (data) => {
  const userData = data.data?.userData[0];
  const firstName = userData?.userName.split(" ")[0];
  return (
    <MainLayout>
      <HelloWidget name={firstName} />
    </MainLayout>
  );
};

Dashboard.propTypes = {
  data: PropTypes.object,
};
