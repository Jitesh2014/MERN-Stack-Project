import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./Components/Common/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Support from "./pages/Support";

import Footer from "./Components/Common/Footer";
import NotFound from "./Components/Common/NotFound";
import Login from "./pages/RegisterPages/Login";
import Signup from "./pages/RegisterPages/Signup";
import Welcome from "./pages/Welcome";
import PrivateRoute from "./PrivateRoute ";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/welcome"
          element={
            <PrivateRoute>
              <Welcome />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
