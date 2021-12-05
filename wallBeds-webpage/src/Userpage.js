import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { toast } from "react-toastify";



export default function UserPage() {

    const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us21.gitpod.io/api/"




    return (
        <React.Fragment>

            <div class=" rounded-lg shadow-lg w-full flex flex-row flex-wrap p-3 antialiased m-4" style={{
                'background-image': 'url("https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'background-blend-mode': 'multiply',
                'filter': 'brightness(85%)',
                'z-index': '20',
                'width': '95%',
                'height': '100%'
            }}>

                <div class='d-flex justify-content-center mb-3'>
                    <p class="text-white" style={{ 'font-size': '35px' }}>Profile Details</p>
                </div>
                <div class="d-flex">
                    <img class="rounded-lg shadow-lg antialiased "
                        src="https://st2.depositphotos.com/1502311/12020/v/380/depositphotos_120206860-stock-illustration-profile-picture-vector.jpg"
                        style={{ 'width': '30%' }} />

                    <div class="md:w-2/3 w-full px-3 flex flex-row ">
                        <div class="w-full text-right">
                            <div class=" text-white font-bold ms-5" style={{ 'display': 'flex' }}>
                                <span style={{ 'color': 'white', 'font-size': '30px' }}>Username: &nbsp;</span><span style={{ 'color': 'rgba(236, 221, 203, 0.938)', 'font-size': '30px' }}> username</span>
                            </div>
                            <div class=" text-white font-bold ms-5" style={{ 'display': 'flex' }}>
                                <div><span style={{ 'color': 'white', 'font-size': '30px' }}>Email: &nbsp;</span><span style={{ 'color': 'rgba(236, 221, 203, 0.938)', 'font-size': '30px' }}>
                                    email</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>




        </React.Fragment>
    )
}