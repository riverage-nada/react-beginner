import React from "pages/react-base";
import { useState } from "react";

const ReactBase = (props) => {
  const [count, setcount] = useState(0);

  const handleClick = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>count up</button>
    </div>
  );
};

export default ReactBase;
