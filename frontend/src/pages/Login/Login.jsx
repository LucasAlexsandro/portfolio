import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginContainer } from "./Styles";
import axios from "axios";

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(login, password);

    const response = await axios.post('http://localhost:3000/login', JSON.stringify({
      login, password
    }), {
      headers: {
        "Content-Type": "application/json"
      }
    })
  };

  return (
    <>
      <LoginContainer>
        <div className="form-login">
          <form className="form-container">
            <input
              type="text"
              name="login"
              placeholder="Login"
              required
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Logar"
              onClick={(e) => handleLogin(e)}
            />
          </form>
        </div>
      </LoginContainer>
    </>
  );
}
