import register from "../../data/register";
import { useRef, useEffect } from "react";

const Register = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    console.log(event.target);
    await register(usernameRef.current.value, passwordRef.current.value);
  };

  return (
    <div id="registerform">
      <h2 id="headerTitle">Register</h2>
      <div className="row">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
      </div>
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
        <button onClick={handleRegister}>Register</button>
      </div>
      <div className="row">
        <p>
          Have an account already? <a href="/login">Login</a> now!
        </p>
      </div>
    </div>
  );
};

export default Register;
