import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Menu />
      <Analytics/>
    </>
  );
}

export default App;
