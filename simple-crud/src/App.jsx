import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(false);
  const [id, setId] = useState("");

  const deleteTask = (id) => {
    const filterArray = tasks.filter((item) => item.id !== id);
    setTasks(filterArray);
  };

  const editTaskSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      alert("Task is empty");
      return;
    }
    const editTasks = tasks.map((item) =>
      item.id === id ? { id: id, nameTask: task } : item
    );
    setTasks(editTasks);
    setEditingTask(false);
    setTask("");
    setId("");
  };

  const editTask = (item) => {
    setEditingTask(true);
    setTask(item.nameTask);
    setId(item.id);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      alert("Task is empty");
      return;
    }
    //console.log(tasks);
    setTasks([...tasks, { id: nanoid(10), nameTask: task }]);
    setTask("");
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD simple </h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task list</h4>
          <ul className="list-group">
            {tasks.length === 0 ? (
              <h3>No tasks</h3>
            ) : (
              tasks.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.nameTask}</span>
                  <button
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={() => deleteTask(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning btn-sm float-right"
                    onClick={() => editTask(item)}
                  >
                    Edit
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {editingTask ? "Edit task" : "Add Task"}
          </h4>
          <form onSubmit={editingTask ? editTaskSubmit : addTask}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Type the task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            {editingTask ? (
              <button className="btn btn-warning btn-block " type="submit">
                Edit
              </button>
            ) : (
              <button className="btn btn-dark btn-block " type="submit">
                Add
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
