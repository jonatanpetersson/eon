import { useState } from "react";
import "./app.css";
import namesWithBackgroundLogo from "./assets/images/names_and_watercolour.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={namesWithBackgroundLogo} alt="Elias & Nellie Logo" />
    </>
  );
}

export default App;
