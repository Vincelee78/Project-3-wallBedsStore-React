import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import Headers from "./HeaderRegisterForm";

export default function RegisterForm() {

  const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us17.gitpod.io/api/"

  const { register, handleSubmit } = useForm();

  const [result, setResult] = useState("");

  const onSubmit = async(data) => {
    const user = await axios.post(url + "users/register", {
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
      <input {...register("billing_address")} placeholder="Billing Address" name='billing_address'/>
      <br/>
      <input {...register("shipping_address")} placeholder="Shipping Address" name='shipping_address'/>
      <br/>
      <input {...register("phone")} placeholder="Phone number" name='phone'/>
      <br/>
      <input type="submit" value='Register'/>
    </form>
  );
}