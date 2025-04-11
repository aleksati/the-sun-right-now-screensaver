import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("nothing");

  useEffect(() => {
    const fetchSomeStuff = async () => {
      const res = await fetch("http://localhost:8001/api/ping");
      const data = await res.json();
      setText(data.message);
    };

    const interval = setInterval(() => fetchSomeStuff(), 6000);

    return () => clearInterval(interval)
    
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>{text}</p>
      </div>
    </>
  );
}

export default App;
