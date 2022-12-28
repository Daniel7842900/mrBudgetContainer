import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import MicroFrontend from "./MicroFrontend";

const userHost = "http://localhost:3001";

const User = () => {
  console.log("User being called...");
  return <MicroFrontend host={userHost} name="User" />;
};

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        {/* <AppHeader /> */}
        <Routes>
          <Route exact path="/" element={<User />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
