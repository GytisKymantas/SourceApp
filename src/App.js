import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { RatingBadge } from "components/atoms/RatingBadge";
import { NotFound } from "pages/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <RatingBadge averageRating={4.5} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/reservations" element={<Reservations />} />
          <Route
            path="/dashboard/reservations/meetingrooms"
            element={<Reservations />}
          />
          <Route
            path="/dashboard/reservations/books"
            element={<Reservations />}
          />
          <Route
            path="/dashboard/reservations/devices"
            element={<Reservations />}
          />
          <Route path="/dashboard/eatout" element={<EatOut />} />
          <Route path="/dashboard/eatout/category" element={<EatOut />} />
          <Route
            path="/dashboard/eatout/category/single"
            element={<EatOut />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
