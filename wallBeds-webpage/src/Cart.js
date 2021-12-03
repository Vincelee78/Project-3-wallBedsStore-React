import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "./UserContext";
// import CartItem from "../components/CartItem";
import CartContext from "./CartProvider";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";


export default function Cart(props) {

    const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us21.gitpod.io/api/"


    const [cart, setCart] = useState([]);
    // const { user, token } = useContext(UserContext);
    const [cartUpdated, setCartUpdated] = useState(false);
    const [stripeSession, setStripeSession] = useState(null);
    const [cartItem, checkoutCart] = useState(['']);
    const [user, setUser] = useState(['']);
    const [quantity, setNewQuantity] = useState('');
    const [cartItemQty, setCartItemQty] = useState([])


    useEffect(() => {
        //get cart function

        async function getCart() {
            const cart = await axios.get(url + 'cart', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            setCart(cart.data);


        }


        //if token is set, get cart data
        if (localStorage.getItem("accessToken")) {
            const cart = getCart();
            if (cart) {
                setCart(cart);
                setCartUpdated(false);
            }
        }

        //if token is not set, clear cart
        if (!localStorage.getItem("accessToken")) {
            setCart([]);
            setCartUpdated(false);
        }
    }, [cartUpdated]);

    console.log(cart)


    //total price
    let totalPrice = 0;
    if (cart && cart?.length > 0) {
        totalPrice = cart?.reduce((acc, item) => {
            return acc + item.quantity * item.wallBed.cost
        }, 0);
    }

    // update cart quantity
    const handleQtyChange = (evt, b) => {
        let cartArry = cart
        cartArry.map((cartItem) => {
            if (cartItem.id == b.id) {
                cartItem.quantity = evt.target.value

            }
            if (cartItem.id == b.id) {
                setCartItemQty(cartItem.quantity)
            }
        })
    }


    // update cart quantity form
    async function onUpdate(formData) {
        alert('Cart Quantity updated')
        try {
            const data = await axios({
                method: "post",
                url: url + 'cart/quantity/update',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
                data: {
                    productId: formData.productId,
                    newQuantity: formData.newQuantity,
                }

            });

            if (data) {
                setCartUpdated(true);
                toast.success("Item quantity updated.", {
                    autoClose: 3000,
                });

            } else {
                toast.info(
                    "You must be logged in to update items in cart. Redirecting...",
                    {
                        autoClose: 3000,
                    }
                );
                setTimeout(() => {
                    // navigate("/login");
                }, 2000);
            }
        } catch (error) {
            toast.error("Error on updating quantity. Please try again.", {
                toastId: "updateCartQuantity",
                autoClose: 3000,
            });
        }
    }

    // remove cart item
    const removeFromCart = async (item) => {
        try {
            const { data } = await axios({
                method: "post",
                url: url + 'cart/delete',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
                data: item,
            });
            if (data) {
                setCartUpdated(true);
                toast.info("Item removed from cart.", {
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.", {
                toastId: "removeFromCart",
                autoClose: 3000,
            });
        }
    };


    // checkout cart
    const checkoutcart = async () => {
        if (cart.length === 0) {
            toast.error("Your cart is empty. Please add items to cart.", {
                toastId: "checkoutCart",
                autoClose: 3000,
            });
        } else {
            //get stripe session id
            try {
                const session = await axios({
                    method: "get",
                    url: url + 'checkout',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },

                });
                setStripeSession(session.data);

            } catch (error) {
                //update cart if no stock
                // if (error.response.status === 417) {
                //     toast.update("checkoutCart", {
                //         render: "Cart Updated. Please review your cart and try again.",
                //         isLoading: false,
                //         type: "error",
                //         closeButton: true,
                //     });
                //     setOutOfStock(true);
                //     setCartUpdated(true);
                // } else {
                toast.update("checkoutCart", {
                    render: "Something went wrong. Please try again.",
                    autoClose: 3000,
                    type: "error",
                    isLoading: false,
                });
            }
        }
    }
    // }


    //checkout with stripe if session id is set
    useEffect(() => {
        //checkout with stripe
        async function checkout() {
            const stripe = await loadStripe(stripeSession.publishableKey);
            if (stripeSession) {
                stripe.redirectToCheckout({
                    sessionId: stripeSession.sessionId,
                });
            }
        }
        if (stripeSession) {
            try {
                checkout();
            } catch (error) {
                toast.update("checkoutCart", {
                    render: "Something went wrong. Please try again.",
                    isLoading: false,
                    autoClose: 3000,
                    type: "error",
                });
            }
        }
    }, [stripeSession]);

    if (localStorage.getItem('accessToken') && cart.length) {

        return cart?.map((b) => {
            return (

                <React.Fragment>

                    <h2 class="text-lg font-medium my-3 mx-2" style={{ 'color': '#AA6B39' }}>
                        Shopping cart
                    </h2>


                    <div class="mt-8 card my-3 mx-2">

                        <div class="card-body">

                            <div class="py-1 d-flex">

                                <div>
                                    <img src={b.wallBed.image_url} alt={b.name} style={{ 'width': '80%', 'height': '70%' }} />
                                </div>

                                <div class="ml-4 flex-1 d-flex flex-column ">
                                    <div class='card-title'>
                                        <div class="d-flex justify-content-between text-base font-medium ">
                                            <p class="ms-5" style={{ 'font-size': '25px' }}>
                                                <b>{b.wallBed.name}</b>
                                            </p>
                                            <div >
                                                <p >
                                                    Total Unit Cost: ${(b.wallBed.cost / 100) * (b.quantity)}
                                                </p>
                                            </div>
                                        </div>

                                        <p class="ms-5 text-lg" style={{ 'font-size': '20px', 'font-family': 'Merriweather' }}>
                                            Description: {b.wallBed.description}
                                        </p>
                                        <ul class='ms-3'>
                                            <li>Bed Size: {b.wallBed.bedSize.name}</li><br />
                                            <li>Mattress Type: {b.wallBed.mattressType.name}</li><br />
                                            <li>Bed Orientation: {b.wallBed.bedOrientation.name}</li><br />
                                            <li>Frame Colour: {b.wallBed.frameColour.name}</li><br />
                                        </ul>
                                    </div>

                                    <div class="d-flex align-items-end justify-content-end ms-5 ">
                                        <div class='mx-2 '>
                                            <form onSubmit={() => { onUpdate({ productId: b.product_id, newQuantity: cartItemQty }) }} >
                                                <input type="hidden" name="_csrf" value="{{@root.csrfToken}}" />
                                                <label style={{ 'color': 'brown' }}> Quantity: </label>
                                                <input type="text" name='newQuantity' value={b.quantity} onChange={evt => handleQtyChange(evt, b)}
                                                    style={{ 'width': '50px', 'border': '1px solid black', 'text-align': 'center' }} /><br />
                                                <input type="submit" class="btn btn-success btn-sm" style={{ 'height': '40px', 'background-color': 'green' }} value="Update Quantity" />
                                            </form>
                                        </div>
                                        <div>
                                            <button type="submit" class="btn btn-danger btn-sm" style={{ 'height': '40px' }} onClick={() =>
                                                removeFromCart({ productId: b.product_id })
                                            } >Remove from Cart</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="border-t border-gray-200 py-1 px-4 sm:px-6">
                        <div class="d-flex justify-between justify-content-end text-base font-medium text-gray-900">
                            <p>Subtotal: </p>
                            <p>${totalPrice / 100}</p>
                        </div>
                        <p class="mt-0.5 text-sm text-gray-500 d-flex justify-content-end">Shipping and taxes are included in the subtotal</p>
                        <div class="mt-6 d-flex justify-content-end">
                            <button
                                class="btn btn-primary btn"
                                style={{ 'background-color': 'rgb(65, 105, 225)' }}
                                onClick={checkoutcart}
                            >Checkout</button>
                        </div>
                        <div class="mt-1 flex justify-center text-sm text-center text-gray-500">
                            <p>
                                or
                                <a href="/shop_All_Beds" class="text-primary font-medium text-decoration-none"> Continue Shopping<span
                                    aria-hidden="true"> &rarr;</span></a>
                            </p>
                        </div>
                    </div>
                </React.Fragment>
            )
        })
    } else if (localStorage.getItem('accessToken')) {
        return <div class='ms-3'>There are no items in your cart</div>
    } else {
        return (
            <div class='ms-3'>
                Please log in in to access your cart

            </div>
        )

    }

}
