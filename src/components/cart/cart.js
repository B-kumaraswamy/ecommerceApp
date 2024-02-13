import React from "react";
import Header from "../header/header";
import { useCartContext } from "../../context/context";
import "./cart.css"

function Cart() {
  const { cartItems, setCartItems } = useCartContext();

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    });
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((cartItem) =>
        cartItem.id === id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    });
  };

  const handleRemoveProduct = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== id)
    );
  };

  return (
    <div>
      <Header />
      
      {
        cartItems.length === 0 ? <div className="cart-empty"> <img alt = "loading" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" className="empty-cart-image"/> 
        <h1 className="empty-heading">Your cart is empty</h1> </div>: 
        
        <ul>
        <h2>Your Cart</h2>
        {cartItems.map((eachCartItem) => (
          <li key={eachCartItem.id} className="cart-li">
            <img
              src={eachCartItem.image}
              alt={`Product: ${eachCartItem.id}`}
              style={{ width: "50px", height: "50px" }}
              className="cart-image"
            />
           
            
            
            
            <button className="cart-quantity" onClick={() => handleDecreaseQuantity(eachCartItem.id)}>
              Decrease Quantity
            </button>

            <span className="cart-value">{eachCartItem.quantity}</span>

            <button className="cart-quantity" onClick={() => handleIncreaseQuantity(eachCartItem.id)}>
              Increase Quantity
            </button>


            <button className="cart-remove" onClick={() => handleRemoveProduct(eachCartItem.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      }
      
      
    </div>
  );
}

export default Cart;
