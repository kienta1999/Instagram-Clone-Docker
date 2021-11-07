import register from "../../data/register";
import { useState, useRef, useEffect } from "react";

const Register = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const [message, setMessage] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      await register(
        usernameRef.current.value,
        passwordRef.current.value,
        emailRef.current.value
      );
      setMessage({
        msg: "Register Successful! You should be able to login now",
        color: "green",
      });
    } catch (error) {
      setMessage({
        msg: error.response.data.message,
        color: "red",
      });
    }
  };

  return (
    <div id="registerform">
      <h2 id="headerTitle">Register</h2>
      <div className="row">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" ref={emailRef} />
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
      {message && (
        <div id="message" className="row" style={{ color: message.color }}>
          {message.msg}
        </div>
      )}
      <div className="row">
        <p>
          Have an account already? <a href="/login">Login</a> now!
        </p>
      </div>
    </div>
  );
};

export default Register;
