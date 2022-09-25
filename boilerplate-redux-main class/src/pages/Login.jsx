import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../store/auth/auth.actions";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.auth.data);
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAPI(loginCreds));
  };
  useEffect(() => {
    if (isAuth) {
      console.log("true");
    } else console.log("false");
  }, [isAuth]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
