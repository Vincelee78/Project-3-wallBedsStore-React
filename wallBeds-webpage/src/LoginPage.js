import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import Headers from "./HeaderLoginForm";

export default function LoginForm() {

  const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us17.gitpod.io/api/"

  const { register, handleSubmit } = useForm();

  const [result, setResult] = useState("");

  const onSubmit = async(data) => {
    const user = await axios.post(url + "users/login", {
      username: data.username,
      email:data.email,
      password:data.password
  });
  setResult(user)
  }

  useEffect (()=>{
  }, [result])

  if(result){
    return <Redirect to="/shop_All_Beds" />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Headers />
      <input {...register("username")} placeholder="Full name" name='username' />
      <br/>
      <input {...register("email")} placeholder="email" name='email'/>
      <br/>
      <input {...register("password")} placeholder="password" name='password'/>
      <br/>
      
      <input type="submit" value='Login'/>
    </form>
  );
}