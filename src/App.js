import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { RegistrationPage } from "pages/RegistrationPage/RegistrationPage";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { NotFound } from "pages/NotFound/NotFound";

function App() {
  const [userData, setUserData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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

  let isUserLoggedIn = sessionStorage.getItem("loggedIn");

  useEffect(() => {
    if (isUserLoggedIn === "true") {
      setIsLoggedIn(true);
    }

    if (isUserLoggedIn === "false") {
      sessionStorage.setItem("loggedIn", "false");
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, isUserLoggedIn]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/registration" element={<RegistrationPage />} />
          {isLoggedIn && (
            <>
              <Route
                path="/dashboard/dashboard"
                element={<Dashboard data={userData} />}
              />
              <Route
                path="/dashboard/reservations"
                element={<Reservations />}
              />
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
            </>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
