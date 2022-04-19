import React, { Fragment, useState } from "react";

const UseStateHooks = () => {
  const [text, setText] = useState("Text in the text");

  const eventoClick = () => {
    console.log("Click in a events with hooks!");
    setText("The text changed!....");
  };

  return (
    <div>
      <hr></hr>
      <h2>{ text }</h2>
      <button onClick={() => eventoClick()}>Click</button>
    </div>
  );
};

export default UseStateHooks;
