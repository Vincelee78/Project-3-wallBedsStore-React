import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import Headers from "./HeaderRegisterForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressFormSchema, registerFormSchema } from "./FormValidator";


export default function RegisterForm() {

  const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us17.gitpod.io/api/"
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerFormSchema) });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [billing_address, setBilling_address] = useState("");
  const [shipping_address, setShipping_address] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (data) => {
    const user = await axios.post(url + "users/register", {
      username: data.username,
      email: data.email,
      password: data.password,
      billing_address: data.billing_address,
      shipping_address: data.shipping_address,
      phone: data.phone,

    });
    setResult(user.data)
  }

  useEffect(() => {
  }, [result])

  if (result) {
    return <div>Thank you for signing up!</div>
    // <Redirect to="/shop_All_Beds" />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} class=' d-flex flex-column align-items-start ps-4 mt-3'>
      <Headers />
      <div class='w-50 '>
      <input {...register("username")} placeholder="Full name" name='username' value={}/>
      {errors.username && (
        <p className="register-form-error">
          {errors.username.message}
        </p>
      )}
      <br />
      <input {...register("email")} placeholder="Email" name='email' />
      {errors.email && (
        <p className="register-form-error">
          {errors.email.message}
        </p>
      )}
      <br />
      <input {...register("password")} placeholder="Password" type='password' name='password' />
      {errors.password && (
        <p className="register-form-error">
          {errors.password.message}
        </p>
      )}
      <br />
      <input {...register("confirmPassword")} placeholder="Confirm password" name='confirmPassword' />
      {errors.confirmPassword && (
        <p className="register-form-error">
          {errors.confirmPassword.message}
        </p>
      )}
      <br />
      <input {...register("billing_address")} placeholder="Billing Address" name='billing_address' />
      <br />
      {errors.billing_address && (
        <p className="register-form-error">
          {errors.billing_address.message}
        </p>
      )}
      <input {...register("shipping_address")} placeholder="Shipping Address" name='shipping_address' />
      <br />
      {errors.shipping_address && (
        <p className="register-form-error">
          {errors.shipping_address.message}
        </p>
      )}
      <input {...register("phone")} placeholder="Phone number" name='phone' />
      <br />
      {errors.phone && (
        <p className="register-form-error">
          {errors.phone.message}
        </p>
      )}
      <input type="submit" value='Register' />
      <br/>
      </div>
    </form>
  );
}