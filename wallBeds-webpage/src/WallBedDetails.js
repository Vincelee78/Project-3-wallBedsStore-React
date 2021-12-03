import React, { useContext, useEffect, useState } from "react";
import { useParams, Redirect, useHistory } from 'react-router-dom';
import WallBedContext from "./WallBedContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiSleepingBag } from "react-icons/gi";
import { toast } from "react-toastify";
import { GiBed } from "react-icons/gi";
import axios from "axios";
const { v1: uuidv1, } = require('uuid');




export default function WallBedDetails(props) {

    const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us21.gitpod.io/api/"

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const context = useContext(WallBedContext);
    const [woodColour, setwoodColour] = useState([]);
    const [cartUpdated, setCartUpdated] = useState([]);
    const [token, setToken] = useState(['']);
    const history = useHistory()


    useEffect(() => {
        if (props.setToken) {
            setToken(props.setToken)
        }
    })

    //add to cart
    const addItemToCart = (id, quantity) => {
        addToCart({ productId: id, quantity: quantity ? quantity : null });
    };

    useEffect(() => {
        const getData = async () => {
            let wantedProduct = await context.getProductByID(productId);
            console.log(wantedProduct)
            setProduct(wantedProduct);
            setwoodColour(wantedProduct.woodColour);
        }
        getData()

    }, [productId])

    async function addToCart(cartItems) {

        try {
            if (localStorage.getItem('accessToken')) {
                const data = await axios({
                    method: "post",
                    url: url + 'cart/addToCart',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    data: cartItems,
                });
                if (data) {
                    setCartUpdated(true);
                    history.push("/cart")
                }

            }

        } catch (error) {
            toast.error("Please log in to add items to cart", {
                autoClose: 3000,
                toastId: "not-logged-in"
              })
    }
}



    return <React.Fragment>
        {product ?
            <React.Fragment>
                <div class="row mx-2 h-100">
                    <img src={product.image_url} class="wallBedImage col-lg-6 col-sm-12 d-flex align-items-center justify-content-center"

                        style={{
                            "backgroundRepeat": "no-repeat", "backgroundSize": "contain ", "backgroundPosition": "center",
                        }}>

                    </img>
                    <div class=" col-lg-6 pe-2">
                        <h1 class="mb-4 indi-title">{product.name}</h1>
                        Colours: {woodColour.map((a) => (
                            <p class="indi-flavour badge rounded-pill bg-success">{a.name}</p>
                        )
                        )}
                        <p>
                            {product.description}
                        </p>
                        <p class="indi-spacing"></p>
                        {/* <p class="indi-ingredient">
                            Colours: {product.woodColour.name}
                        </p> */}
                        <p class="indi-spacing"></p>
                        <div class="row indi-table-container">
                            <div class="col-6 col-lg-6 col-md-6">
                                <h4 class="indi-table-details">Key Features:</h4>
                                <div class="pr-5 pr-lg-0">
                                    <table class="table">
                                        <tbody>
                                            <tr class="indi-table-details">
                                                <td>
                                                    <i class="fas fa-bed me-2"></i> BED SIZE
                                                </td>
                                                <td>{product?.bedSize?.name}</td>
                                            </tr>
                                            <tr class="indi-table-details">
                                                <td>
                                                    <span className='me-2 fa-lg'><GiSleepingBag /></span> MATRESS TYPE
                                                </td>
                                                <td>{product?.mattressType?.name}</td>
                                            </tr>
                                            <tr class="indi-table-details">
                                                <td>
                                                    <span className='me-2 fa-lg'><GiBed /></span>BED ORIENTATION
                                                </td>
                                                <td>{product?.bedOrientation?.name}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-6 col-lg-6 col-md-6">
                                <h4>Specifications</h4>
                                <div class="pr-5 pr-lg-0">
                                    <table class="table">
                                        <tbody>
                                            <tr class="indi-table-details">
                                                <td>FRAME COLOUR</td>
                                                <td>{product?.frameColour?.name}</td>
                                            </tr>
                                            <tr class="indi-table-details">
                                                <td>WEIGHT</td>
                                                <td>{product.weight} kg</td>
                                            </tr>
                                            <tr class="indi-table-details">
                                                <td>STOCK</td>
                                                <td>{product.stock}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <p class="indi-spacing"></p>
                        <button class="indi-add-to-cart mb-3" onClick={() => { addItemToCart(product.id) }}>Add To Cart - ${product.cost/100}</button>
                        <p class="mt-2 warning-text mb-2" style={{ "display": "none" }}>
                            Item has been added to your cart
                        </p>
                        {/* <p class="mt-2 warning-text mb-2 " style="display: none;">
                            Please login before adding item into cart. Redirecting to login
                            page...
                        </p> */}
                    </div>
                </div>

            </React.Fragment>
            : null}
    </React.Fragment>
        ;
}
