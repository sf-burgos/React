import React from "react";
import Example from "./components/Example";
import Variables from "./components/Variables";
import Events from "./components/Events";
import EventsWithFragment from "./components/EventsWithFragment";
import UseStateHooks from "./components/UseStateHooks";
import UseStateExampleWithACount from "./components/UseStateExampleWithACount";
import ConditionTernaryOperator from "./components/ConditionTernaryOperator";
import List from "./components/List";
import Form from "./components/Form";
function App() {
  return (
    <div className="container mt-5">
      <h1>Hola Mundo react </h1>
      {/* <Example />
      <Variables />
      <Events />
      <EventsWithFragment />
      <UseStateHooks />
      <UseStateExampleWithACount />
      <ConditionTernaryOperator />
      <List /> */}
      <Form />
    </div>
  );
}

export default App;
