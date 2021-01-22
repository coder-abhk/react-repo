import React, { useState } from "react";

function App() {
  // pre todos
  let [todos, setTodos] = useState([
    {
      id: "1",
      title: "Shine",
      phrase: "Shine like a daimond.",
    },
    {
      id: "2",
      title: "Rise",
      phrase: "Rise and shine.",
    },
  ]);

  // input data set
  let [title, setTitle] = useState("");
  let [phrase, setPhrase] = useState("");
  let [id, setId] = useState("");

  // show data when imput data
  let handleChange = (e) => {
    document.getElementById("model-view").textContent = e.target.value;
  };

  // action on input data submit
  let handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = { id, phrase, title };
    setTodos([...todos, newTodo]);
    setId("");
    setPhrase("");
    setTitle("");
  };

  return (
    <div className="container-sm p-3">
      <header>
        <h1 className="text-secondary text-center">x-Todos</h1>
      </header>
      <div className="form-group">
        {/* Todo form */}
        <form onSubmit={handleSubmit}>
          <label className="text-secondary p-2">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            value={title}
            onChange={(e) => {
              handleChange(e);
              setTitle(e.target.value);
            }}
          />
          <label className="text-secondary p-2">Phrase</label>
          <input
            type="text"
            className="form-control"
            placeholder="type here..."
            value={phrase}
            onChange={(e) => {
              handleChange(e);
              setPhrase(e.target.value);
            }}
          />
          <label className="text-secondary p-2">Id(required)</label>
          <input
            type="text"
            value={id}
            className="form-control mt-2"
            placeholder="you id..."
            onChange={(e) => {
              setId(e.target.value);
              handleChange(e);
            }}
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
      {/* all todos */}
      <div className="mt-4 mb-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="d-block rounded-3 border border-2 border-info mb-2 p-2"
          >
            <h1 className="text-dark">{todo.title}</h1>
            <p className="text-secondary">{todo.phrase}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
