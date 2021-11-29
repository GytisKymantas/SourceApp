import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { NotFound } from "pages/NotFound";
import { Button } from "components/atoms/Button/Button";

function App() {
  return (
    <div className="app">
      <Router>
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
        <Button />
      </Router>
    </div>
  );
}

export default App;
