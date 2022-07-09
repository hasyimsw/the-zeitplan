import React from "react";
import Applications from "./components/Applications";
import Download from "./components/Download";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Testimoni from "./components/Testimoni";

function App() {
  return (
    <>
      <Hero />
      <Applications />
      <Featured />
      <Price />
      <Testimoni />
      <Download />
    </>
  );
}

export default App;
