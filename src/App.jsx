import UserGreeting from "./components/UserGreeting";
import { useState } from "react";
import './App.css'

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <div className="App">
      <div className="greet__wrapper">
        <p>{!isLoggedIn ? <button className="handle__btn" onClick={handleLogin}>Login</button> : ""}</p>

        <div>
          {isLoggedIn ? (
            <div className="btn__container">
              <UserGreeting isLoggedIn={isLoggedIn} />{" "}
              <button className="handle__btn" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
