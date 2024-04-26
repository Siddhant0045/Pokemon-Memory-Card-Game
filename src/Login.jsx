// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
      });
      const data = response.data;

      if (data === "exist") {
        history("/home", { state: { id: email } }); // Pass email ID as state
      } else if (data === "notexist") {
        alert("User not signed up");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  }

  return (
    <>
    <img src="charizard.gif" style={{transform:'scaleX(-1)',height:'250px', width:'250px',position:'absolute',top:'5px',left:'10% '}}/>
    <img src="squirtle.gif" style={{height:'250px', width:'250px',position:'absolute',top:'450px',left:'75%',}}/>
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={submit} style={{marginBottom:'50px'}}>
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
        <input type="submit" value="Login" />
      </form>
      <br />
      <Link to="/signup">Signup Page</Link>
    </div></>
  );
}

export default Login;
