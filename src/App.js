import React, { useEffect, useState } from "react";
import { ReactComponent as SourceryLogo } from "assets/logo.svg";
import { GetStartedList } from "features/getStarted/components/GetStartedList";
import { Footer } from "components/atoms/Footer";
import { Breadcrumbs } from "components/atoms/Breadcrumbs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { Item } from "pages/Item";

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

  const linkList = [
    {
      label: "dashboard",
      href: "/",
    },
    {
      label: "reservations",
      href: "/reservations",
    },
    {
      label: "eatout",
      href: "/eatout",
    },
    {
      label: "item",
      href: undefined,
    },
  ];

  return (
    <div className="app">
      <header className="App-header">
        <SourceryLogo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Router>
            <Breadcrumbs linkList={linkList} />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/eatout" element={<EatOut />} />
              <Route path="/eatout/item" element={<Item />} />
              <Route path="/reservations/item" element={<Item />} />
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
