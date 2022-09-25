import React from "react";
import { useSelector } from "react-redux";

import Products from "../components/Products/Products";
import Login from "./Login";

const Home = () => {
  const isAuth = useSelector((store) => store.auth.data.isAuthenticated);
  return (
    <div>
      Home Page
      {isAuth ? <Products /> : <Login />}
    </div>
  );
};

export default Home;
