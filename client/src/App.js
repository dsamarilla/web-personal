import React from "react";
import "./App.scss";
import Admin from "./pages/Admin";
import SignIn from "./pages/Admin/SignIn";
import Home from "./pages/Admin/Home";
import Contact from "./pages/Admin/Contact";
function App() {
  return (
    <div>
      <h1>Estamos en App.js</h1>
      <Admin />
      <SignIn />
      <Home />
      <Contact />
    </div>
  );
}
export default App;
