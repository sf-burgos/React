import React, { Fragment, useState } from "react";

const Form = () => {
  const [fruit, setFruit] = useState("");
  const [description, setDescription] = useState("");
  const [listWithFruits, setListWithFruits] = useState([]);

  const saveData = (e) => {
    e.preventDefault();

    if (!fruit.trim()) {
      console.log("fruit is empthy");
      return;
    }
    if (!description.trim()) {
      console.log("description is empthy");
      return;
    }
    
    setListWithFruits([...listWithFruits, { nameFruit: fruit, nameDescription: description }]);
    console.log(listWithFruits);
    
    e.target.reset();
    setFruit("");
    setDescription("");
  };
  return (
    <Fragment>
      <hr />
      <h2>Forms</h2>
      <form onSubmit={saveData}>
        <input
          type="text"
          placeholder="Type a fruit"
          className="form-control mb-2"
          onChange={(event) => setFruit(event.target.value)}
        />
        <input
          type="text"
          placeholder="Type a Description"
          className="form-control mb-2"
          onChange={(event2) => setDescription(event2.target.value)}
        />
        <button className="btn btn-primary btn-block" type="submit">
          Add
        </button>
      </form>
      <ul>
        {listWithFruits.map((item, index) => (
          <li key={index}>
            {item.nameFruit} - {item.nameDescription}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Form;
