import './UserGreeting.css';

const UserGreeting = (isLoggedIn) => {
  const user = {
    name: "coder-abhk",
    age: 20,
  };

  return (
    <div className="greet__msg">
      <h1>Welcome back!</h1>
      <div className="content__wrapper">
        <p>
          {" "}
          Profile:
          <br />
          <span>Username: {user.name}</span>
          <br />
          <span>Age: {user.age}</span>
        </p>
      </div>
    </div>
  );
};

export default UserGreeting;
