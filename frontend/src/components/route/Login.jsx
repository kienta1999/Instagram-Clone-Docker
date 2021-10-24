const Login = () => {
  return (
    <div id="loginform">
      <h2 id="headerTitle">Login</h2>
      <div class="row">
        <label>Username</label>
        <input type="text" placeholder="Enter your username" />
      </div>
      <div class="row">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <div id="button" class="row">
        <button>Log in</button>
      </div>
      <div class="row">
        <p>
          Not having an account? <a href="/register">Register</a> with us
        </p>
      </div>
    </div>
  );
};

export default Login;
