import React, { createContext, useContext, useState } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Create a custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Create a provider component to wrap the application
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add more functions as needed for manipulating the cart state

  const addToCart = (item, quantity) => {
    console.log("Cart Items inside the addToCart func ", cartItems);
        console.log("product sent to addToCart function is ", item);
        console.log("quantity sent to addToCart is ", quantity);
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        console.log("existing item is ", existingItem);
        if (existingItem) {
            setCartItems((prevCartItems) =>
                prevCartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
                )
            );
            console.log("Cart Items inside the if block ", cartItems);
        } else {
            setCartItems((prevCartItems) => {
                const newCartItems = [...prevCartItems, { ...item, quantity }];
                console.log("Cart Items inside the else block ", newCartItems);
                return newCartItems;
            });
        }
  };

  
  const cartContextValue = {
    cartItems,
    setCartItems,
    addToCart
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;



const onSort = (array, order) => {
        
  if (order === "Low-High") {
    
      for (let i=0; i<array.length; i++){
          for(let j=(i+1); j < array.length; j++){
              if (Number(array[i].price) > Number(array[j].price)) {
                  let temp = array[i]
                  array[i]= array[j]
                  array[j] = temp
              }
          }
          
      }

      console.log("ascending order is", array)

      setproductArray(array)
      console.log("product array after asc", productArray
      )
      

      
  }

  else if (order === "High-Low") {
      for (let i=0; i<array.length; i++){
          for(let j=(i+1); j < array.length; j++){
              if (Number(array[i].price) < Number(array[j].price)) {
                  let temp = array[i]
                  array[i]= array[j]
                  array[j] = temp
              }
          }
          
      }

      console.log("descending order is", array)

      setproductArray(array)

      console.log("product array after desc", productArray
      )
      

  }

  

  else {
      setproductArray(array)
  }

  
  
}

const onSort = (array, order) => {
    let sortedArray = [...array]

        
  if (order === "Low-High") {


      for (let i=0; i<sortedArray.length; i++){
          for(let j=(i+1); j < sortedArray.length; j++){
              if (Number(sortedArray[i].price) > Number(sortedArray[j].price)) {
                  let temp = sortedArray[i]
                  sortedArray[i]= sortedArray[j]
                  sortedArray[j] = temp
              }
          }
          
      }

      console.log("ascending order is", array)

      setproductArray(sortedArray)
      console.log("product array after asc", productArray
      )
      

      
  }

  else if (order === "High-Low") {
      for (let i=0; i<array.length; i++){
          for(let j=(i+1); j < array.length; j++){
              if (Number(array[i].price) < Number(array[j].price)) {
                  let temp = array[i]
                  array[i]= array[j]
                  array[j] = temp
              }
          }
          
      }

      console.log("descending order is", array)

      setproductArray(array)

      console.log("product array after desc", productArray
      )
      

  }

  

  else {
      setproductArray(array)
  }


  

  setproductArray(sortedArray);
};


    let sortedArray = [];

    if (order === "Low-High") {
        sortedArray = array.slice().sort((a, b) => Number(a.price) - Number(b.price));
    } else if (order === "High-Low") {
        sortedArray = array.slice().sort((a, b) => Number(b.price) - Number(a.price));
    } else {
        sortedArray = array.slice(); // Keep the original order
    }

    setproductArray(sortedArray);
};
