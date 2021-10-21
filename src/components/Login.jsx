import { useState, useEffect } from "react";
import { getUser } from "../utils/api";
const Login = ({ username, setUsername }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [inputInfo, setInputInfo] = useState("");
  useEffect(() => {
    const prevLoggedInUser = localStorage.getItem("loggedInUser");
    console.log(prevLoggedInUser);
    if (prevLoggedInUser) {
      setUsername(prevLoggedInUser);
    }
  }, []);
  if (!username) {
    return (
      <div id="login_section">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getUser(usernameInput)
              .then((res) => {
                console.log(res);
                setUsername(usernameInput);
                setUsernameInput("");
                localStorage.setItem("loggedInUser", usernameInput);
              })
              .catch((err) => {
                console.log(err);
                setInputInfo("Invalid Username");
              });
          }}
        >
          <input
            type="text"
            value={usernameInput}
            onChange={(e) => {
              setUsernameInput(e.target.value);
              console.log(usernameInput);
            }}
            placeholder="username...try tickle122"
          ></input>

          <button type="submit">Login </button>
          <p>{inputInfo}</p>
        </form>
      </div>
    );
  } else {
    return (
      <div id="login_section">
        <p>{`logged in as ${username}`}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            localStorage.setItem("loggedInUser", "");
            setUsername("");
          }}
        >
          log out
        </button>
      </div>
    );
  }
};

export default Login;
