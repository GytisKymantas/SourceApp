import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegistrationPage } from "pages/RegistrationPage/RegistrationPage";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { NotFound } from "pages/NotFound/NotFound";

function App() {
  const [userData, setUserData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [restaurantsData, setRestaurantsData] = useState();

  useEffect(() => {
    if (isLoggedIn) {
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
    }
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setRestaurantsData(result);
        },

        (error) => {
          // handle error here
        }
      );
  }, [isLoggedIn]);

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
          {isLoggedIn && userData && (
            <>
              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    data={userData}
                    restaurantsInfo={restaurantsData}
                  />
                }
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
              <Route
                path="/dashboard/eatout"
                element={<EatOut data={restaurantsData} />}
              />
              <Route
                path="/dashboard/eatout/category"
                element={<EatOut data={restaurantsData} />}
              />
              <Route
                path="/dashboard/eatout/category/single"
                element={<EatOut data={restaurantsData} />}
              />
            </>
          )}
          <Route path="*" element={<NotFound isLoggedIn={isLoggedIn} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
