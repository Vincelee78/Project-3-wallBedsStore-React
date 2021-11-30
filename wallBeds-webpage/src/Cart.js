import React, { useContext, useEffect } from "react";
import UserContext from "./UserContext";
// import CartItem from "../components/CartItem";
import CartContext from "./CartProvider";
import { Redirect } from "react-router";


export default function Cart() {

    // const url = "https://6000-azure-whitefish-4d0hnk4z.ws-prod-ws-us19.gitpod.io/api/"


    // const [cart, setCart] = useState({});
    const { token, user} = useContext(UserContext);
    const { cart, checkoutCart} = useContext(CartContext);
    // const context = useContext(WallBedContext);

    // useEffect(() => {
    //     const getData = async () => {
    //         let wantedCart = await context.getCartByID();
    //         console.log(wantedCart)
    //         setCart(wantedCart);
    //     }
    //     getData()
    // }, [])
//form


  //redirect to login
  if (!token && !user) {
    return <Redirect to="/login" />;
  }

  //total price
  let totalPrice = 0;
  if (cart && cart?.length > 0) {
    totalPrice = cart?.reduce((acc, item) => {
      return acc + item.quantity * item.originalPrice;
    }, 0);
  }

    return (
        <React.Fragment>

            <h2 class="text-lg font-medium my-3 mx-2" style={{'color':'#AA6B39'}}>
                Shopping cart
            </h2>


            <div class="mt-8 card my-3 mx-2">

                <div class="card-body">

                    <div class="py-6 flex">
                        {/* {{ #if this.wallBed.image_url }} */}

                        <div style={{'width':'25%'}}>
                            <img src="{{this.wallBed.image_url}}" alt="{{this.wallBed.name}}" />
                        </div>
                        {/* {{ else}} */}
                        <div style={{'width':'25%'}}>
                            <img src="https://via.placeholder.com/150" alt="placeholder" />
                        </div>
                        {/* {{/if}} */}

                        <div class="ml-4 flex-1 flex flex-col ">
                            <div class='card-title'>
                                <div class="flex justify-between text-base font-medium ">
                                    <p class="ms-5" style={{'font-size': '25px'}}>
                                        {/* <b>{{ this.wallBed.name }}</b> */}
                                    </p>
                                    <p class="me-4">
                                        {/* Total: ${{ this.costInDollars }} */}
                                    </p>
                                </div>

                                <p class="ms-5 text-lg" style={{'font-size':'20px','font-family': 'Merriweather'}}>
                                    {/* Description: {{ this.wallBed.description }} */}
                                </p>
                                <ul class='ms-5'>
                                    {/* <li>Bed Size: {{ this.wallBed.bedSize.name }}</li> */}
                                    {/* <li>Mattress Type: {{ this.wallBed.mattressType.name }}</li> */}
                                    {/* <li>Bed Orientation: {{ this.wallBed.bedOrientation.name }}</li> */}
                                    {/* <li>Frame Colour: {{ this.wallBed.frameColour.name }}</li> */}
                                </ul>
                            </div>

                            <div class="flex items-end justify-between ms-5">
                                <div>
                                    <form method="POST" action="/cart/{{this.product_id}}/quantity/update">
                                        <input type="hidden" name="_csrf" value="{{@root.csrfToken}}" />
                                        <label style={{'color':'brown'}}> Quantity: </label>
                                        <input type="text" name='newQuantity' value="{{this.quantity}}"
                                            style={{'width':'50px', 'border': '1px solid black', 'text-align':'center'}} />
                                        <input type="submit" class="btn btn-success btn-sm" value="Update" />
                                    </form>
                                </div>

                                <div>
                                    <form method="POST" action="/cart/{{this.product_id}}/delete">
                                        <input type="hidden" name="_csrf" value="{{@root.csrfToken}}" />
                                        <input type="submit" class="btn btn-danger btn-sm" value="Remove from Cart" />
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* {{/ each}} */}
            {/* {{ else}} */}
            <div class="py-6 flex mt-0.5 text-sm text-secondary mb-3">
                There are no items in your cart.
            </div>
            {/* {{/if}} */}


            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    {/* <p>${{ totalCost }}</p> */}
                </div>
                <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes are included in the subtotal</p>
                <div class="mt-6">
                    <button 
                        class="flex justify-center items-center px-6 py-3 border border-transparent rounded-3 shadow-sm text-base font-medium text-white"
                        style={{'background-color': 'rgb(65, 105, 225)'}}
                        onClick={() => {
                            checkoutCart();
                          }}
                        >Checkout</button>
                </div>
                <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
                    <p>
                        or
                        <a href="/allproducts" class="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span
                            aria-hidden="true"> &rarr;</span></a>
                    </p>
                </div>
            </div>

            </React.Fragment>)
}
