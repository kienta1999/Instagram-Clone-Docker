const Register = () => {
  return (
    <div id="registerform">
      <h2 id="headerTitle">Register</h2>
      <div class="row">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
      </div>
      <div class="row">
        <label>Username</label>
        <input type="text" placeholder="Enter your username" />
      </div>
      <div class="row">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <div id="button" class="row">
        <button>Register</button>
      </div>
      <div class="row">
        <p>
          Have an account already? <a href="/login">Login</a> now!
        </p>
      </div>
    </div>
  );
};

export default Register;
