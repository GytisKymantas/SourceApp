import { Header } from "components/organisms/Header/Header";
import { Footer } from "components/atoms/Footer/Footer";
import { PropTypes } from "prop-types";
import React from "react";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
