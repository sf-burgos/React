import React from "react";

const Events = () => {

  const eventClick = () => console.log("you pick in a click buttom")
  
  return (
    <div>
      <hr></hr>
      <h2>Events</h2>
      <button onClick={ () => eventClick() }>Click</button>
    </div>
  );
};

export default Events;
