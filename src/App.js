import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { Reservations } from "pages/Reservations";
import { EatOut } from "pages/EatOut";
import { MainLayout } from "components/templates/MainLayout/MainLayout";

function App() {
  return (
    <div className="app">
      <Router>
        <MainLayout>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/eatOut" element={<EatOut />} />
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
