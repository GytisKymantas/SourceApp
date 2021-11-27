import React, { useEffect, useState } from "react";
import { ReactComponent as SourceryLogo } from "assets/logo.svg";
import { GetStartedList } from "features/getStarted/components/GetStartedList";
import { Footer } from "components/atoms/Footer";
import { Breadcrumbs } from "components/atoms/Breadcrumbs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { NotFound } from "pages/NotFound";

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

  return (
    <div className="app">
      <header className="App-header">
        <SourceryLogo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Router>
            <Breadcrumbs />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
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
            </Routes>
          </Router>
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
