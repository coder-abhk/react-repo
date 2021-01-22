import React, { useState } from "react";

function App() {
  let [todos, setTodos ] = useState([{
    todo: 'hello'
  }])

  let handleSubmit = (e) => {};

  let handleChange = (e) => {
    document.getElementById("model-view").textContent = e.target.value;
    e.preventDefault();
  };

  return (
    <div className="container p-3">
      <header>
        <h1 className="text-secondary text-center">X-Todos</h1>
      </header>
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <label className="text-secondary p-2" hmtlfor="todo">
            Todo
          </label>
          <input
            type="text"
            name="todo"
            className="form-control"
            placeholder="type here..."
            onChange={handleChange}
          />
          <p className="p-2 text-secondary" id="model-view"></p>
          <input
            className="btn btn-info text-light"
            type="submit"
            name="submit"
            value="Add Now"
          />
        </form>
      </div>
      <div>{todos.map((todo) => console.log(todo))}</div>
    </div>
  );
}

export default App;
