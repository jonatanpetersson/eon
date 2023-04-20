import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="welcome">
        <p>
          Varmt välkommen att
          <br />
          fira vår bröllopsdag!
        </p>
        <p>
          1 JULI 2023
          <br />
          <br />
          Vigsel kl 13:30
          <br />
          Gustav adolfs kyrka
          <br />
          566 92 Habo
        </p>
      </div>
    </>
  );
}

export default App;
