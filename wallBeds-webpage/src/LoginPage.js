import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Headers from "./HeaderLoginForm";
import { loginFormSchema } from "./FormValidator";
import { toast } from "react-toastify";
import UserContext from "./UserContext";
import { useHistory } from "react-router";




export default function LoginPage(props) {

  const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us21.gitpod.io/api/"

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginFormSchema) });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [refreshTokenNeeded, setrefreshToken] = useState("");
  const setLoginUser = props.setLoginUser
  // let context = useContext(UserContext);
  // const { login } = useContext(UserContext);
  const redirect = useHistory();


  const onSubmit = async (formData) => {

    const response = await axios.post(url + "users/login", {
      email: formData.email,
      password: formData.password
    });
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);

      // console.log(token, refreshTokenNeeded, 'ab')
      setLoginUser();
      toast.success(`Login successful, ${email}`, {
        autoClose: 3000,
        toastId: "login-success"

      })
      redirect.push("/shop_All_Beds")
    } else {
      toast.error("Login failed!", {
        autoClose: 3000,
        toastId: "login-failed"
      })
    }
  }


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
