import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { Footer } from "components/atoms/Footer";
import { Header } from "components/organisms/Header/Header";

function App() {
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
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
