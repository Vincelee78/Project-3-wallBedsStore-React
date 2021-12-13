// import react router stuff
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import WallBedsProvider from "./components/WallBedsProvider";
import LandingPage from "./components/LandingPage";
import RegisterForm from "./components/RegisterForm";
import WallBedDetails from "./components/WallBedDetails";
import WallBedListing from "./components/WallBedListing";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import AboutUs from "./components/About";
import UserPage from "./components/Userpage";
import DirectionsPage from "./components/Directions";
import SuccessfulPayment from "./components/SuccessPurchase";
import UnsuccessfulPayment from "./components/CancelPurchase";
import { ToastContainer } from "react-toastify";
import { baseUrl } from "./api/url";
import './App.css';

export default function App() {

  const [token, setToken] = useState('');

  let loginUser = () => {
    if (localStorage.getItem('accessToken')) {
      const getUser = async () => {
        try {
          const response = await axios.get(baseUrl + "users/profile", {
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

  //refresh token every 40 minutes
  useEffect(() => {
    if (token) {
      const refreshToken = setInterval(() => {
        const refresh = async () => {
          try {
            const { accessToken } = await axios.post(
              baseUrl + 'users/refresh',
              {
                refreshToken: localStorage.getItem('refreshToken')
              }
            );
            setToken(...token, accessToken);
            localStorage.setItem('accessToken', accessToken);
            console.log(accessToken)
          } catch (error) {
            console.log(error)
          };

        }
        refresh();
      }, 1000 * 60 * 40);

      //cleanup - clear interval when component unmounts
      return () => clearInterval(refreshToken);
    }

  }, [token])


  return (
    <Router>
      <div id="nav">
        <div class="logo pt-lg-2 pt-3 ps-2">
          <img src='https://dp.image-gmkt.com/SG/GMKT.IMG/front_image/minishop/2014/01/02/a6b99c03-175e-40eb-8edb-104c4e3c488e.s_110-w-fs-st_s.jpg' class="main-logo" alt='defaultImage' />
          <Link to="/" href="#" style={{ 'textDecoration': 'none', 'color': 'brown' }}><header class='compName' style={{ 'font-family': 'Stencil Std, fantasy' }}><b>Space-Saving Furniture Systems</b></header></Link>
        </div>

        <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light">
          <div class="row d-flex flex-row">
            <button class="navbar-toggler d-flex justify-content-end border-0 d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 main-nav">

                <li class="nav-item nav-link dropdown">
                  <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown"
                    data-bs-toggle="dropdown">HOME</a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link to="/" class="dropdown-item" href="#">Home Page</Link>
                    </li>
                    <li>
                      <Link to="/directions" class="dropdown-item" href="#">Directions</Link>
                    </li>

                  </ul>
                </li>

                <li>
                  <Link to="/shop_All_Beds" class="navlink mt-3">CATALOGUE</Link>
                </li>

                <li>
                  <Link to="/about" class="navlink mt-3" >ABOUT </Link>
                </li>

                <li>
                  <Link to="/users/account" class="navlink mt-3">ACCOUNT</Link>
                </li>

                <li class="font-sans p-0 m-0 d-flex justify-content-end">
                  <a href="/cart" role="button" class="pe-lg-4 mt-lg-2 text-end " style={{ 'font-size': '1.4em' }}>
                    <span class='cart-icon'>
                      <i class="fas fa-shopping-cart "></i>
                    </span>
                  </a>
                </li>


                <li><a href="" class="user" style={{ 'text-decoration': 'none' }}>


                  <div class="d-flex justify-content-center me-4 mb-2 userSection">Welcome, {localStorage.getItem("username") || 'Guest'}</div>

                  <div class='user d-flex'>
                    <a
                      href="/users/login"
                      class="me-3 user"
                      style={{ 'display': 'block', 'textDecoration': 'none', 'color': 'grey' }}
                    >Login</a>


                    <a
                      href="/users/logout"
                      class="me-3 user"
                      style={{ 'display': 'block', 'textDecoration': 'none', 'color': 'grey' }}
                    >Logout</a>

                    <a
                      href="/register"
                      class="me-4 user"
                      style={{ 'display': 'block', 'textDecoration': 'none', 'color': 'grey' }}
                    >Register</a>
                  </div>

                </a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
        <ToastContainer autoClose={3000} limit={5} />
      </div>
      <Switch>

        <WallBedsProvider>
          {/* Home route */}
          <Route exact path="/">
            <LandingPage />
          </Route>

          {/* All Wall Beds route */}
          <Route exact path="/shop_All_Beds">
            <WallBedListing />
          </Route>

          <Route exact path="/directions">
            <DirectionsPage />
          </Route>

          {/* User Register route */}
          <Route exact path="/register">
            <RegisterForm />
          </Route>

          <Route exact path="/users/login">
            <LoginPage setLoginUser={loginUser} />
          </Route>

          <Route exact path="/users/logout">
            <LogoutPage />
          </Route>

          <Route exact path="/users/account">
            <UserPage />
          </Route>

          <Route exact path="/about">
            <AboutUs />
          </Route>

          <Route exact path="/successPurchase">
            <SuccessfulPayment />
          </Route>

          <Route exact path="/cancelPurchase">
            <UnsuccessfulPayment />
          </Route>

          <Route exact path="/product/:productId">
            <WallBedDetails setToken={token} />
          </Route>

          <Route exact path="/cart">
            <Cart setToken={token} />
          </Route>

        </WallBedsProvider>

      </Switch>
    </Router>
  );
}



