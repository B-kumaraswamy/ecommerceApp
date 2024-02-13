import React from "react";
import {createContext, useContext, useState} from "react";

const CommerceContext = createContext();


export const useCartContext = () => {
    return useContext(CommerceContext)
    
}

export const CartProvider = (props) => {
    const {children} = props
    
    const [cartItems, setCartItems] = useState([]);
    const [productArray, setproductArray] = useState([])
    
    const onAddtoCart = (product, quantity) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === product.id)
        if (existingItem) {
            setCartItems(prevCartItems => {
                prevCartItems.map((cartItem) => 
                cartItem.id === product.id ? {...cartItem, quantity : cartItem.quantity + quantity} : cartItem
                )           
            })
        }
        // if existingItem is true, then we have to update only quantity of already existing product in the cart.
        // when we do mapping, it means we are iterating each product object in the list and we've to return the object after mapping.
        // That's why {...cartItem, quantity : cartItem.quantity + quantity}. 
        // ...cartItem means destructuring the product object and result will be only key-value pairs. 

        else {
            setCartItems(prevCartItems => {
                const newCartItems = [...prevCartItems, {...product, quantity}]
                return newCartItems

            })
        }
        // If the added cartItem is not in the cart, then we've to add such product to the list of already existing cartItems.
        // Products in the cartItem are an array of objects. 
        // ...prevCartItems gives only objects(products) without []. 
        // ...product gives all key-value pairs of an object but without {}. 
        // we will add quantity for the first time to the existing key-value pairs of an object(product)
        // and make it as object by writing {...product, quantity}. 

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
        for (let i=0; i<sortedArray.length; i++){
            for(let j=(i+1); j < sortedArray.length; j++){
                if (Number(sortedArray[i].price) < Number(sortedArray[j].price)) {
                    let temp = sortedArray[i]
                    sortedArray[i]= sortedArray[j]
                    sortedArray[j] = temp
                }
            }
            
        }
  
        console.log("descending order is", array)
  
        setproductArray(sortedArray)
  
        console.log("product array after desc", productArray
        )
        
  
    }

    else if (order === "Title(A-Z)") {
       sortedArray.sort((a, b) => a.title.localeCompare(b.title));
        setproductArray(sortedArray)
    }
  
    
  
    else {
        setproductArray(sortedArray)
    }
}
   

    const values = {cartItems, onAddtoCart, setCartItems, onSort, productArray, setproductArray}

    return (
       <CommerceContext.Provider value = {values}>
        {children}
       </CommerceContext.Provider>
    )
}
  
export default CommerceContext;


  