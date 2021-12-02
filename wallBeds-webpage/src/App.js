import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import WallBedsProvider from "./WallBedsProvider";
import LandingPage from "./LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from "./RegisterForm";
import WallBedDetails from "./WallBedDetails";
import WallBedListing from "./WallBedListing";
import CartProvider from "./CartProvider";
import UserProvider from "./UserProvider";
// import react router stuff
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";
import { Redirect } from "react-router";
import { ToastContainer } from "react-toastify";


export default function App() {

  const [token, setToken] = useState('');

  const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us21.gitpod.io/api/"


  let loginUser = () => {
    if (localStorage.getItem('accessToken')) {
      const getUser = async () => {
        try {
          const response = await axios.get(url + "users/profile", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          });
          localStorage.setItem("username", response.data.username);
          setToken(localStorage.getItem('accessToken'));
        } catch (error) {
          console.log(error)
        };

      };
      getUser();
    }
  }

  let logoutUser = async () => {
    await axios.post(url + 'users/logout', {
      refreshToken: localStorage.getItem('refreshToken')
    })
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");

  }

  return (
    <Router>
      <div id="nav">
        <div class="logo pt-2 ps-2">
          <img src='https://dp.image-gmkt.com/SG/GMKT.IMG/front_image/minishop/2014/01/02/a6b99c03-175e-40eb-8edb-104c4e3c488e.s_110-w-fs-st_s.jpg' class="main-logo" />
          <Link to="/" href="#" style={{ 'textDecoration': 'none', 'color': 'brown' }}><header class='compName' style={{ 'font-family': 'Stencil Std, fantasy' }}><b>Space-Saving Furniture Systems</b></header></Link>
        </div>

        <ul>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
              data-bs-toggle="dropdown">HOME</a>
            <ul class="dropdown-menu">
              <li>
                <Link to="/" class="dropdown-item" href="#">Home Page</Link>
              </li>
              <li><a class="dropdown-item" href="#">Directions</a></li>
              <li><a class="dropdown-item" href="#">Telephone</a></li>
            </ul>
          </li>

          <li><a href="" class="navlink">ABOUT </a></li>
          <li>
            <Link to="/shop_All_Beds" class="navlink">CATALOGUE</Link>
          </li>

          <li class="font-sans block lg:inline-block">
            <a href="/cart" role="button" class="pe-4" style={{ 'font-size': '1.4em' }}>
              <span class="">
                <i class="fas fa-shopping-cart "></i>
              </span>
            </a>
          </li>


          <li><a href="" class="" style={{ 'text-decoration': 'none' }}>


            <div class="d-flex justify-content-center me-4">Welcome, {localStorage.getItem("username") || 'Guest'}</div>


            <a
              href="/users/login"
              class="btn btn-success btn-sm me-3"
            >Login</a>

            {/* }else{ */}
            <a
              href="/users/logout"
              class="btn btn-danger btn-sm me-3"
            >logout</a>
            {/* }} */}
            <a
              href="/register"
              class="btn btn-primary btn-sm me-4"
            >Register</a>


          </a>
          </li>
        </ul>
        <ToastContainer autoClose={3000} limit={5} />
      </div>
      <Switch>
        {/* <UserProvider> */}

        {/* <CartProvider> */}
        <WallBedsProvider>
          {/* Home route */}
          <Route exact path="/">
            <LandingPage />
          </Route>

          {/* All Wall Beds route */}
          <Route exact path="/shop_All_Beds">
            <WallBedListing />
          </Route>

          {/* User Register route */}
          <Route exact path="/register">
            <RegisterForm />
          </Route>

          <Route exact path="/users/login">
            <LoginPage setLoginUser={loginUser} />
          </Route>

          <Route exact path="/users/logout">
            <LogoutPage setlogoutUser={logoutUser} />
          </Route>

          <Route exact path="/product/:productId">
            <WallBedDetails setToken={token} />
          </Route>

          <Route exact path="/cart">
            <Cart setToken={token} />
          </Route>

        </WallBedsProvider>
        {/* </CartProvider> */}
        {/* </UserProvider> */}
      </Switch>
    </Router>
  );
}



