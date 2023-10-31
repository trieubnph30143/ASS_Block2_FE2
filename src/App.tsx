import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=''>{count}</div>
      <button onClick={() => setCount(count + 1)}> Count++</button>
      <br></br>
      halo chao thay
    </>
  );
}

export default App;
