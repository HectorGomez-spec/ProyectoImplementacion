import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
function App() {
  return (
    <Routes>
      {/* <Route element={<Nav />}> */}
        <Route path="/" element={<Login />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;