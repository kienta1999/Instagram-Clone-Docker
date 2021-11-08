import login from "../../data/login";
import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [message, setMessage] = useState(null);
  const { getToken, setToken } = useContext(UserContext);
  const history = useHistory();
  if (getToken()) {
    history.push("/");
  }

  const handleLogin = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await login(username, password);
      setMessage(null);
      setToken(response.data);
      history.push("/");
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div id="loginform">
      <h2 id="headerTitle">Login</h2>
      <div className="row">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          ref={usernameRef}
        />
      </div>
      <div className="row">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
      </div>
      <div id="button" className="row">
        <button onClick={handleLogin}>Log in</button>
      </div>
      {message && (
        <div id="message" className="row" style={{ color: "red" }}>
          {message}
        </div>
      )}
      <div className="row">
        <p>
          Not having an account? <a href="/register">Register</a> with us
        </p>
      </div>
    </div>
  );
};

export default Login;
