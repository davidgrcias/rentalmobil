import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatButton from "./components/FloatButton";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <FloatButton />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* More routes can be added here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
