import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from "react-router";
import UserContext from "./UserProvider.js";
import Headers from "./HeaderLoginForm";
import { loginFormSchema } from "./FormValidator";




export default function LoginPage() {

  const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us17.gitpod.io/api/"

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginFormSchema) });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const context = useContext(UserContext);
  const [user, setUser] = useState("");


  const onSubmit = async (formData) => {
    // const { confirmPassword, ...userData } = formData;
    // login(userData);
    const response = await axios.post(url + "users/login", {
      email: formData.email,
      password: formData.password
    });

    
    setUser(response.data)
    if (response.data.accessToken){
    localStorage.setItem('accesstoken', response.data.accessToken)
    }else{
      return(
        <div>wrong login!</div>
      )
    }
  }
  // setToken(localStorage.getItem('accesstoken'));


  
  // console.log(localStorage.getItem('accesstoken'));

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

  //check if local storage has token
  // useEffect(() => {
  //   const localToken = localStorage.getItem("token");
  //   const token = JSON.parse(localToken);
  //   if (token) {
  //     setToken(token);
  //   }
  // }, []);

  // //if token is set, get user data
  // useEffect(() => {
    // if (token) {
    //   const getUser = async () => {
    //     try {
    //       const { data } = await axios.get(url + "users/profile", {
    //         headers: {
    //           Authorization: `Bearer ${token.accessToken}`,
    //         },
    //       });
    //       data && setUser(data.user);
    //     } catch (error) {
    //       // console.log(error)
    //     };


    //   };
    //   getUser();
      //save to local storage
      // if (!localStorage.getItem("token")) {
      //   localStorage.setItem("token", JSON.stringify(token));
      // };

      //refresh token every 15 minutes
      // if (token) {
      //   const refreshToken = setInterval(() => {
      //     const refresh = async () => {
      //       try {
      //         const { accessToken } = await axios.post(
      //           url + '/users/refresh',
      //           {
      //             refreshToken: token.refreshToken,
      //           }
      //         );
      //         setToken(...token, accessToken);
      //       } catch (error) {
      //         // console.log(error)
      //       };


      //     }
      //     refresh();
      //   }, 1000 * 60 * 15);

      //   //cleanup - clear interval when component unmounts
      //   return () => clearInterval(refreshToken);
      // }
  //   }
  // }, []);


  if (user) {
    return <div>{email} is loggged in</div>
    // <Redirect to="/shop_All_Beds" />
  }

  // if (user) {
  //   return <Redirect to="/shop_All_Beds" />
  // }

  return (
    

    <form onSubmit={handleSubmit(onSubmit)} class=' d-flex flex-column align-items-start ps-4 mt-3'>
      <Headers />
      <div class='w-50'>
      <input {...register("email")} placeholder="Email" name='email' value={email} onChange={(evt) => setEmail(evt.target.value)} />
        {errors.email && (
        <p className="loginFormError">
          {errors.email.message}
        </p> 
      )} 
      <br />
      <input {...register("password")} placeholder="Password" type='password' name='password' value={password} onChange={(evt) => setPassword(evt.target.value)} />
      {errors.password && (
        <p className="loginFormError">
          {errors.password.message}
        </p>
      )}
      <br />

      <input type="submit" value='Login' />
      </div>
    </form>


  );
  
  

}
// }
