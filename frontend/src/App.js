import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/navBar";
import SignIn from "./pages/SignIn/signin";
import SignUp from "./pages/SignUp/signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-signin">
        <Routes>
          <Route path="/api/v1/auth" element={<SignIn />} />
          <Route path="/api/v1/users" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
