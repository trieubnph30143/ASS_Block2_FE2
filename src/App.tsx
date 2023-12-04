import { useCallback, useState } from "react";

import "./App.css";
import { Product } from "./component/Product";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <Product />
    </>
  );
}

export default App;
