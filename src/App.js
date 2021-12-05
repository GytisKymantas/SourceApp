import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { RatingBadge } from "components/atoms/RatingBadge";
import { NotFound } from "pages/NotFound";
import { useState, useEffect } from "react";
function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/userData.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setUserData(result);
        },

        (error) => {
          // handle error here
        }
      );
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard data={userData} />} />
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
        <RatingBadge averageRating={4.5} />
      </Router>
    </div>
  );
}

export default App;
