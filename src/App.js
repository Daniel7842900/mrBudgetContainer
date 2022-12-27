import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route exact path="/" />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
