import UserGreeting from "./components/UserGreeting";
import { useState } from "react";

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
        <p>
          <button onClick={handleLogin}>Login</button>
        </p>

        <div>
          {isLoggedIn === true ? (
            <div>
              <UserGreeting isLoggedIn={isLoggedIn} />{" "}
              <button onClick={handleLogout}>Logout</button>
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
