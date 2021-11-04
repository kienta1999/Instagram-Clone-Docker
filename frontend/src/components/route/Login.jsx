import login from "../../data/login";

const Login = () => {
  return (
    <div id="loginform">
      <h2 id="headerTitle">Login</h2>
      <div className="row">
        <label>Username</label>
        <input type="text" placeholder="Enter your username" />
      </div>
      <div className="row">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <div id="button" className="row">
        <button>Log in</button>
      </div>
      <div className="row">
        <p>
          Not having an account? <a href="/register">Register</a> with us
        </p>
      </div>
    </div>
  );
};

export default Login;
