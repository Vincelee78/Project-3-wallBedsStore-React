import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import moment from 'moment';
import { baseUrl } from "../api/url";




export default function UserPage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getUserProfile() {
            const orders = await axios({
                method: "get",
                url: baseUrl + 'orders',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            setData(orders.data)
        }
        if (data) {
            try {
                getUserProfile();

            } catch (error) {
                console.log(error)
                toast.error("Please log in to access your profile", {
                    autoClose: 3000,
                    toastId: "profile-error"
                })
            }
        }
    }, [])


    return (

        <React.Fragment>

            <div class=" rounded-lg shadow-lg w-full flex flex-row flex-wrap p-3 antialiased m-4 accountSection" style={{
                'background-image': 'url("https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'background-blend-mode': 'multiply',
                'filter': 'brightness(95%)',
                'opacity': '1',
                'z-index': '20',
                'width': '95%',
                'height': '100%',
                'background-color': 'grey'
            }}>

                <div class='d-flex justify-content-center mb-3 '>
                    <p class="text-white" style={{ 'font-size': '35px' }}>Order Details</p>
                </div>
                <div class="d-flex">
                    <img class="d-none d-lg-block"
                        src="https://st2.depositphotos.com/1502311/12020/v/380/depositphotos_120206860-stock-illustration-profile-picture-vector.jpg"
                        style={{ 'width': '25%', 'height': '50%' }} />

                    <div class="w-full p-0 px-lg-3">
                        <div class="w-full text-start">
                            <h4 class='userContainer accountBody text-nowrap' style={{ 'color': 'wheat', 'font-size': '30px' }}>Order Items: &nbsp;</h4>
                            <div class=" text-white font-bold m-0 ms-lg-5 accountBody" style={{ 'display': 'flex', 'flexDirection': "row" }}>
                                <ul style={{ 'color': 'white', 'font-size': '30px' }}>{data.map(a => (a.orderItem).map(b =>
                                    <li class="badge rounded-pill bg-secondary userContainer accountBody text-capitalize">{(b.wallBed.name)}, &nbsp;Quantity: {b.quantity}, &nbsp;Cost: ${(b.cost / 100 * (b.quantity))}</li>

                                ))}
                                </ul>
                            </div>
                            <div class=" text-white font-bold m-0 ms-lg-5 accountBody" style={{ 'display': 'flex' }}>

                                <div><h2 class='userContainer accountBody' style={{ 'color': 'wheat', 'font-size': '30px' }}>Date ordered: &nbsp;
                                    {data.map((date) => (
                                        <span class="badge rounded-pill bg accountBody">{moment(date.date_ordered).format("Do MMMM YYYY")}</span>
                                    ))}</h2>
                                </div>
                            </div>
                            <div class=" text-white font-bold m-0 ms-lg-5 accountBody" style={{ 'display': 'flex' }}>
                                <div><h2 class='userContainer accountBody' style={{ 'color': 'wheat', 'font-size': '30px' }}>Order Reference: &nbsp;

                                    {data.map((reference) => (
                                        <span class="badge rounded-pill bg accountBody">{reference.payment_reference}</span>
                                    ))}</h2>
                                </div>
                            </div>
                            <div class=" text-white font-bold m-0 ms-lg-5 accountBody" style={{ 'display': 'flex' }}>
                                <div><h2 class='userContainer accountBody' style={{ 'color': 'wheat', 'font-size': '30px' }}>Order Status: &nbsp;

                                    {data.map((a) => (
                                        <span class="badge rounded-pill bg-success accountBody">{a.status.name}</span>
                                    ))}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}