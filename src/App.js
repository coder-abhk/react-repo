import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const handleIncreaseClick = () => {
    setCount(count + 1);
  };

  const handleDecreaseClick = () => {
    return count > 0 ? setCount(count - 1) : null;
  };
  return (
    <div className="container p-3 d-flex align-items-center flex-column">
    <header>
        <h1>Counter App</h1>
    </header>
      <div className="badge bg-danger text-white p-2 m-3 ">{count}</div>
      <div className="container d-flex justify-content-center align-items-center">
        <p>
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={handleIncreaseClick}
          >
            increase
          </button>
        </p>
        <p>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={handleDecreaseClick}
          >
            decrese
          </button>
        </p>
      </div>
    </div>
  );
};

export default App;
