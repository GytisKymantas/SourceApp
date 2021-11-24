import React, { useEffect, useState } from "react";
import { GetStartedList } from "features/getStarted/components/GetStartedList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "components/molecules/Navigation/Navigation";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { DropDown } from "components/atoms/DropDown/DropDown";
import { ReactComponent as SettingsLogo } from "./assets/settings.svg";
import { ReactComponent as LogOutLogo } from "./assets/logOut.svg";
import { Footer } from "components/atoms/Footer";
import { RestaurantCard } from "components/atoms/RestaurantCard/RestaurantCard";

function App() {
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3008/instructions")
      .then((res) => res.json())
      .then(
        (result) => {
          setInstructions(result);
        },
        (error) => {
          // handle error here
        }
      );
  }, []);
  const menuItems = [
    {
      id: 1,
      logo: <SettingsLogo />,
      text: "Settings",
    },
    {
      id: 2,
      logo: <LogOutLogo />,
      text: "Log out",
    },
  ];

  const handleOptionSelect = (optionId) => {
    // placeholder for future functionality
    // eslint-disable-next-line no-console
    console.log("option selected", optionId);
  };
  return (
    <div className="app">
      <header className="App-header">
        <Router>
          <div className="app">
            <DropDown options={menuItems} onSelect={handleOptionSelect} />
            <Navigation />
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/eatOut" element={<EatOut />} />
              </Routes>
            </div>
          </div>
        </Router>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GetStartedList key={instructions.length} instructions={instructions} />
      <Footer />
    </div>
  );
}

export default App;
