import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import Headers from "./HeaderRegisterForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./FormValidator";



export default function RegisterForm() {

  const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us21.gitpod.io/api/"

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerFormSchema) });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [billing_address, setBilling_address] = useState("");
  const [shipping_address, setShipping_address] = useState("");
  const [phone, setPhone] = useState("");
  const [User, setUser] = useState("");
  

  const onSubmit = async (formData) => {
    
    const user = await axios.post(url + "users/register", {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      billing_address: formData.billing_address,
      shipping_address: formData.shipping_address,
      phone: formData.phone,

    });
    setUser(user.data)
  }

  useEffect(() => {
  }, [User])

  if (User) {
    return <div class='ms-3'>Thank you for signing up!</div>
    // <Redirect to="/shop_All_Beds" />
  }
  let onError=(err, e)=>{
    console.log(err, e)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} class=' d-flex flex-column align-items-start ps-4 mt-3'>
      <Headers />
      <div class='w-50 '>
      <input {...register("username")} placeholder="Full name" name='username' value={username} onChange={(evt) => setUsername(evt.target.value)}/>
      {errors.username && (
        <p className="registerFormError">
          {errors.username.message}
        </p>
      )}
      <br />
      <input {...register("email")} placeholder="Email" name='email' value={email} onChange={(evt) => setEmail(evt.target.value)} />
      {errors.email && (
        <p className="registerFormError">
          {errors.email.message}
        </p>
      )}
      <br />
      <input {...register("password")} placeholder="Password" type='password' name='password' value={password} onChange={(evt) => setPassword(evt.target.value)}/>
      {errors.password && (
        <p className="registerFormError">
          {errors.password.message}
        </p>
      )}
      <br />
      <input {...register("confirmPassword")} placeholder="Confirm password" type='password' name='confirmPassword' />
      {errors.confirmPassword && (
        <p className="registerFormError">
          {errors.confirmPassword.message}
        </p>
      )}
      <br />
      <textarea {...register("billing_address")} class='w-100' placeholder='&nbsp;&nbsp;Billing Address' name='billing_address' value={billing_address} onChange={(evt) => setBilling_address(evt.target.value)}/>
      <br />
      {errors.billing_address && (
        <p className="registerFormError">
          {errors.billing_address.message}
        </p>
      )}
      <textarea {...register("shipping_address")} class='w-100 my-4' placeholder="&nbsp;&nbsp;Shipping Address" name='shipping_address' value={shipping_address} onChange={(evt) => setShipping_address(evt.target.value)}/>
      <br />
      {errors.shipping_address && (
        <p className="registerFormError">
          {errors.shipping_address.message}
        </p>
      )}
      <input {...register("phone")} placeholder="Phone number" name='phone' value={phone} onChange={(evt) => setPhone(evt.target.value)}/>
      <br />
      {errors.phone && (
        <p className="registerFormError">
          {errors.phone.message}
        </p>
      )}
      <input type="submit" value='Register' className='mb-3'/>
      
      </div>
    </form>
  );
}