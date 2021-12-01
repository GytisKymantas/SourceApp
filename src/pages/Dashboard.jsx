import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import PropTypes from "prop-types";

export const Dashboard = ({ data }) => {
  const { userData } = data;
  const { userName } = userData[0];
  const firstName = userName.split(" ")[0];
  return (
    <MainLayout>
      <HelloWidget name={firstName} />
    </MainLayout>
  );
};

Dashboard.propTypes = {
  data: PropTypes.shape({
    userData: PropTypes.object,
    userName: PropTypes.string,
  }),
};
