import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import CustomLayout from "./containers/layouts/CustomLayout";
import BaseRouter from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
