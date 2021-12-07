import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router';
import { toast } from "react-toastify";

const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us21.gitpod.io/api/"

export default function UserPage() {


    const [data, setData] = useState([]);
    const [wallBednames,setwallBednames]= useState([]);

    useEffect(() => {
        async function getUserProfile() {
            const orders = await axios({
                method: "get",
                url: url + 'orders',
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

    
         
        // for ( let itema of data){
        //   for( let itemb of  itema.orderItem){
        //     for( let itemc of itemb.wallBed.name){
        //        let a=itemc
        //         // setwallBednames(a)
        //         console.log(a)
        //     }
        //   }
          
        //  }
         
        
    
         
        
    

    

    return (

        <React.Fragment>

            <div class=" rounded-lg shadow-lg w-full flex flex-row flex-wrap p-3 antialiased m-4" style={{
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

                <div class='d-flex justify-content-center mb-3'>
                    <p class="text-white" style={{ 'font-size': '35px' }}>Order Details</p>
                </div>
                <div class="d-flex">
                    <img class="rounded-lg shadow-lg antialiased "
                        src="https://st2.depositphotos.com/1502311/12020/v/380/depositphotos_120206860-stock-illustration-profile-picture-vector.jpg"
                        style={{ 'width': '25%' , 'height':'50%'}} />

                    <div class="md:w-2/3 w-full px-3 flex flex-row ">
                        <div class="w-full text-right">
                            <div class=" text-white font-bold ms-5" style={{ 'display': 'flex' }}>
                                <h4 style={{ 'color': 'wheat', 'font-size': '30px' }}>Order Items:</h4><ul style={{ 'color': 'white', 'font-size': '30px' }}>{data.map(a=>(a.orderItem).map(b=>
                                <li>{(b.wallBed.name)}, &nbsp;Quantity: {b.quantity}, &nbsp;Total unit cost: ${(b.cost/100*(b.quantity))}</li>
                                
                                ))}
                                
                                </ul>
                            </div>
                            <div class=" text-white font-bold ms-5" style={{ 'display': 'flex' }}>
                                <div><h2 style={{ 'color': 'wheat', 'font-size': '30px' }}>Date ordered: &nbsp;
                                    {data.map((date)=>(
                                        <span class="badge rounded-pill bg ">{date.date_ordered}</span>
                                            ))}</h2>
                                </div>
                            </div>
                            <div class=" text-white font-bold ms-5" style={{ 'display': 'flex' }}>
                                <div><h2 style={{ 'color': 'wheat', 'font-size': '30px' }}>Order Reference: &nbsp;
                                
                                    {data.map((reference)=>(
                                        <span class="badge rounded-pill bg">{reference.payment_reference}</span>
                                        ))}</h2>
                                </div>
                            </div>
                            <div class=" text-white font-bold ms-5" style={{ 'display': 'flex' }}>
                                <div><h2 style={{ 'color': 'wheat', 'font-size': '30px' }}>Order Status: &nbsp;
                                
                                    {data.map((a)=>(
                                        <span class="badge rounded-pill bg-success">{a.status.name}</span>
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