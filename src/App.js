import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { Footer } from "components/atoms/Footer";
import { Header } from "components/organisms/Header/Header";
import { RatingBadge } from "components/atoms/RatingBadge";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/eatOut" element={<EatOut />} />
          </Routes>
          <RatingBadge averageRating={4.5} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
