import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { NotFound } from "pages/NotFound";
import { DropDown } from "components/atoms/DropDown/DropDown";
import { ReactComponent as SettingsLogo } from "./assets/settings.svg";
import { ReactComponent as LogOutLogo } from "./assets/logOut.svg";
import { Footer } from "components/atoms/Footer";

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
      </Router>
    </div>
  );
}

export default App;
