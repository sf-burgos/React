import React, { Fragment, useState } from "react";

const List = () => {
  const initialStatus = [
    {
      id: 1,
      text: "task 1",
    },
    {
      id: 2,
      text: "task 2",
    },
    {
      id: 3,
      text: "task 3",
    },
  ];

  const [list, setStatusList] = useState(initialStatus);

  const addElement = () => {
    console.log("click");
    setStatusList([...list, { id: 4, text: "task 4" }]);
  };

  return (
    <Fragment>
      <hr />
      <h2>List</h2>
      {list.map((item, index) => (
        <h4 key={index}>{item.text}</h4>
      ))}

      <button onClick={() => addElement()}>Add</button>
    </Fragment>
  );
};

export default List;
