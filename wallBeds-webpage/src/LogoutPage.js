import axios from "axios";
import React, { useState } from "react";
import { useHistory } from 'react-router';
import { toast } from "react-toastify";



export default function LogoutPage(props) {

    const url = "https://wallbeds-project3.herokuapp.com/api/"

    const [User, setUser] = useState(null);
    const setlogoutUser = props.setlogoutUser;
    const redirect = useHistory();

    const onSubmit = async () => {
    //     await axios.post(url + 'users/logout', {
    //         refreshToken: localStorage.getItem('refreshToken')
    //     })

        // localStorage.removeItem("username")
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("refreshToken");
        // setlogoutUser();
        // setUser('');
        // await axios.post(url + 'users/logout', {
        //     refreshToken: localStorage.getItem('refreshToken')
        // })

        localStorage.removeItem("username")
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setlogoutUser();
        setUser('');


    }
    if (User == '') {
        toast.success("Logout sucessful", {
            autoClose: 3000,
            toastId: "logout-success"
        })

        window.location.reload();
        redirect.push("/users/login")
    }




    return (
        <React.Fragment>
            <form onSubmit={onSubmit} className="logoutPage">
                <div class="alert alert-danger w-25 mt-3 ms-2" >
                    <p>Are you sure you want to logout?</p>
                    <input type="submit" class="btn btn-danger w-25 " style={{ 'height': '40px', 'font-weight': '400' }} value='Yes' />
                    <p><a href="/shop_All_Beds" class="btn btn-success w-25 mt-2" style={{ 'height': '40px' }}>NO</a></p>
                </div>
            </form>
        </React.Fragment>
    )


}