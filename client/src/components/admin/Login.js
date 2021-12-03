import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Background from "../utils/Background";

const Login = () => {
  const [welcome, setWelcome] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const renderWelcome = () => {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      setWelcome("Morning, Chien!");
    } else if (curHr < 18) {
      setWelcome("Good afternoon, Chien!");
    } else {
      setWelcome("Good evening, Chien!");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post(
        "http://localhost:5000/api/admin/login",
        {password}
      );
      localStorage.setItem("x-auth-token", loginRes.data.token);
      history.push('/admin/upload/quote')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login">
      <Background />
      <div className="login__wrapper wrapper">
        <form className="login__box" onSubmit={onSubmit}>
          {welcome === "" ? renderWelcome() : null}
          <div className="form--title">{welcome}</div>
          <input
            className="input input__login"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button button--text button--form">GO !</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
