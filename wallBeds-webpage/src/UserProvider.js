import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import UserContext from "./UserContext";


const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us21.gitpod.io/api/"

export default function UserProvider(props) {

    const [token, setToken] = useState("");
    const [user, setUser] = useState("");


    const context={
        getlogout: async()=>{
            try {
              await axios({
                method: "post",
                url: url + 'users/logout',
                data: {
                  refreshToken: token.refreshToken,
                },
              });
              localStorage.removeItem("accesstoken");
              setToken(null);
              setUser(null);
              
            } catch (error) {
        
            }
          },

  //         login: async(userData)=>{

  //           const response = await axios.post(url + "users/login", {
  //                 email: formData.email,
  //                 password: formData.password
  //               });
  //               if (response.data.accessToken){
  //               setUser(response.data);
  //               localStorage.setItem('accessToken', response.data.accessToken);
  //               localStorage.setItem('refreshToken', response.data.refreshToken);
  //               setToken(response.data.accessToken);
  //               setrefreshToken(response.data.refreshToken);
  //               setLoginUser();
  //             } else {
  //               return(
  //                 <div className="onSubmit">
  //                 'error'
  //                 </div>)
  //   }
  // },
}

    //state
    // const [token, setToken] = useState(null);
    // const [user, setUser] = useState(null);
    // const [newUser, setNewUser] = useState(false);


    // //check if local storage has token
    // useEffect(() => {
    //     const localToken = localStorage.getItem("token");
    //     const token = JSON.parse(localToken);
    //     if (token) {
    //         setToken(token);
    //     }
    // }, []);

    // //if token is set, get user data
    // useEffect(() => {
    //     if (token) {
    //         const getUser = async () => {
    //             try {
    //                 const { data } = await axios.get(url + "users/login", {
    //                     headers: {
    //                         Authorization: `Bearer ${token.accessToken}`,
    //                     },
    //                 });
    //                 data && setUser(data.user);
    //             } catch (error) {
    //                 console.log(error)
    //             };

    //         };
    //         getUser();
    //         //save to local storage
    //         if (!localStorage.getItem("token")) {
    //             localStorage.setItem("token", JSON.stringify(token));
    //         };

    //         //refresh token every 15 minutes
    //         if (token) {
    //             const refreshToken = setInterval(() => {
    //                 const refresh = async () => {
    //                     try {
    //                         const { accessToken } = await axios.post(
    //                             url + '/users/refresh',
    //                             {
    //                                 refreshToken: token.refreshToken,
    //                             }
    //                         );
    //                         setToken(...token, accessToken);
    //                     } catch (error) {
    //                         console.log(error)
    //                     };


    //                 }
    //                 refresh();
    //             }, 1000 * 60 * 15);

    //             //cleanup - clear interval when component unmounts
    //             return () => clearInterval(refreshToken);
    //         }
    //     }
    // }, [token]);


    // const redirect = () => {
    //     setTimeout(() => {
    //       if (newUser) {
    //         setNewUser(false);
    //         navigate("/");
    //       } else {
    //         navigate(-1);
    //       }
    //     }, 1500);
    //   };

    // //error handling
    // useEffect(() => {
    //     //redirect
    //     if (postError) {
    //         if (!postError?.response?.status === 401) {
    //             navigate("/404");
    //         }
    //     }
    // }, [postError, navigate]);

    // useEffect(() => {
    // const getlogin= async (formData)=> {

    //         let userToken = await context.onSubmit (formData);

    //         userToken && setToken(userToken.data);
    //         userToken && setNewUser(false);
    //         setToken(userToken)   
    // }
    //     getlogin()      
    //     },[])


    return (
        <UserContext.Provider value={context}> 
            {props.children}
        </UserContext.Provider>
    );
}

