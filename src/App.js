import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegistrationPage } from "pages/RegistrationPage/RegistrationPage";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { NotFound } from "pages/NotFound";

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
          <Route path="/" element={<Dashboard data={userData} />} />
<<<<<<< HEAD
=======
          <Route path="/registration" element={<RegistrationPage />} />
>>>>>>> dev
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
