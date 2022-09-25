// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import RequiredAuth from "./hoc/RequiredAuth";

import Home from "./pages/Home";
// import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

    </div>
  );
}

export default App;
