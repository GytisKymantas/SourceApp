import React from "react";
import { Header } from "components/organisms/Header/Header";
import { Footer } from "components/atoms/Footer/Footer";
import { PropTypes } from "prop-types";
import { Breadcrumbs } from "components/atoms/Breadcrumbs/Breadcrumbs";

import "./main-layout.scss";

export const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>
      <Breadcrumbs />
      <div className="content">{children}</div>
    </main>
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};
