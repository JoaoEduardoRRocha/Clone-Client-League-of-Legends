import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SingUp/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
