import React, { createContext, useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";
import axios from "axios";
import { Redirect } from "react-router";
import CartContext from "./CartContext";
// import { loadStripe } from "@stripe/stripe-js";


export default function CartProvider(props) {
  //state
  const [cart, setCart] = useState([]);
  const { user, token } = useContext(UserContext);
  const [cartUpdated, setCartUpdated] = useState(false);
//   const [stripeSession, setStripeSession] = useState(null);

const url = "https://6000-azure-whitefish-4d0hnk4z.ws-prod-ws-us19.gitpod.io/api/"


  //get and update cart
  useEffect(() => {
    //get cart function
    async function getCart() {
      const cart = await axios.get(url+ 'cart', {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
      setCart(cart.data);
    }

    //if token is set, get cart data
    if (user && token) {
      const cart = getCart();
      if (cart) {
        setCart(cart);
        setCartUpdated(false);
      }
    }

    //if token is not set, clear cart
    if (!user || !token) {
      setCart([]);
      setCartUpdated(false);
    }
  }, [user, token, cartUpdated]);

  //checkout with stripe if session id is set
//   useEffect(() => {
    //checkout with stripe
//     async function checkout() {
//       const stripe = await loadStripe(stripeSession.publishableKey);
//       if (stripeSession) {
//         stripe.redirectToCheckout({
//           sessionId: stripeSession.sessionId,
//         });
//       }
//     }
//     if (stripeSession) {
//       try {
//         checkout();
//       } catch (error) {
//         toast.update("checkoutCart", {
//           render: "Something went wrong. Please try again.",
//           isLoading: false,
//           autoClose: 3000,
//           type: "error",
//         });
//       }
//     }
//   }, [stripeSession]);
// }
const context={
   addToCart : async (item) => {
    try {
      if (user && token) {
        const data = await axios({
          method: "post",
          url: url+ 'cart/add',
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
          data: item,
        });

        if (data) {
          setCartUpdated(true);
          
        }
      } else {

        setTimeout(() => {
          Redirect("/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error)
    }
  },

  /*
   * @description: update cart item
   *
   * @param {Object} item
   * @param {Number} item.productId - product id
   * @param {Number} [item.productVariantId] - product variant id
   * @param {Number} [item.quantity] - quantity
   */
   updateCartItem : async (item) => {
    try {
      if (user && token) {
        const data = await axios({
          method: "post",
          url: url + 'cart/update',
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
          data: item,
        });

        if (data) {
          setCartUpdated(true);

        }
      } else {
        
        setTimeout(() => {
          Redirect("/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error)
    }
  },

  /*
   * @description: remove item from cart
   *
   * @param {Object} item
   * @param {Number} item.productId - product id
   * @param {Number} [item.productVariantId] - product variant id
   */
  removeFromCart : async (item) => {
    try {
      const { data } = await axios({
        method: "delete",
        url: url + 'cart/remove',
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
        data: item,
      });
      if (data) {
        setCartUpdated(true);
      }
    } catch (error) {
      console.log(error)
      
    }
  },

}
  

  return (
    <CartContext.Provider value={context}
    //   value={{
    //     cart: cart,
    //     addToCart: addToCart,
    //     removeFromCart: removeFromCart,
    //     setCart: setCart,
    //     updateCartItem: updateCartItem,
        // checkoutCart: checkoutCart,
    //   }}
    >
      {props.children}
    </CartContext.Provider>
  );

  }

 