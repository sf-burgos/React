import React, { Fragment, useState } from "react";

const UseStateExampleWithACount = () => {
  const [cont, setCont] = useState(0);

 // const up = () => {
 //   console.log("click to up ");
 //   setCont(cont + 1);
 // };
  return (
    <div>
      <h3>the counter is uping: {cont}</h3>
      <button onClick={() => setCont(cont + 1)}>up the counter!</button>
    </div>
  );
};

export default UseStateExampleWithACount;
