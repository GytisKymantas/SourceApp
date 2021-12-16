import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
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
          <Route path="/dashboard/*" element={<Dashboard data={userData} />} />
          <Route>
            <Route path="reservations/*" element={<Reservations />} />
            <Route>
              <Route path="meetingrooms" element={<Reservations />} />
              <Route path="books" element={<Reservations />} />
              <Route path="devices" element={<Reservations />} />
            </Route>
            <Route path="eatout/*" element={<EatOut />} />
            <Route>
              <Route path="category/*" element={<EatOut />} />
              <Route>
                <Route path="single" element={<EatOut />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
