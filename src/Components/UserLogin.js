import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Register.css";
import { Link } from "react-router-dom";
import UserHome from "./UserHome";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    localStorage.setItem("ULogin", isLogin);
  }, [isLogin]);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (user.email && user.password) {
      axios
        .post("http://localhost:3100/api/v1/login", {
          email: user.email,
          password: user.password,
        })
        .then((res) => {
          setIsLogin(true);
          localStorage.setItem("uemail", user.email);
          if (res.data) {
            console.log("user login");
          } else {
            console.log("sign up required");
          }
        });
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      {isLogin === true ? (
        <UserHome />
      ) : (
        <div className="register-background">
          <div className="register">
            <div className="register-title">Login</div>
            <form onSubmit={submitHandler}>
              <div className="input-fields">
                <label for="email">Email :</label>
                <br />
                <input
                  id="email"
                  type="email"
                  value={user.email}
                  name="email"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="input-fields">
                <label for="password">Password :</label>
                <br />
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="register-btn">
                <button type="submit" class="btn btn-light">
                  Login
                </button>
              </div>
            </form>
            <div className="login-reg">
              Don't have an account? <Link to="userregister">Register</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
