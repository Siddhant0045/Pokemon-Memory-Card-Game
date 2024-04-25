// Signup.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });
      const data = response.data;

      if (data === "exist") {
        alert("User already exists");
      } else if (data === "notexist") {
        history("/home", { state: { id: email } }); // Pass email ID as state
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="login">
      <h1>Signup</h1>
      <form onSubmit={submit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" value="Signup" />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/">Login Page</Link>
    </div>
  );
}

export default Signup;
