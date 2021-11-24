import React, { useEffect, useState } from "react";
import { GetStartedList } from "features/getStarted/components/GetStartedList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { Footer } from "components/atoms/Footer";
import { Header } from "components/molecules/Header/Header";

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
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/eatOut" element={<EatOut />} />
          </Routes>
          <GetStartedList
            key={instructions.length}
            instructions={instructions}
          />
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
