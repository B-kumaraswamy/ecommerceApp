import "./products.css"
import { Routes, Route } from "react-router-dom";
import ProductArrayComponent from "../productarraycomponent/ProductArrayComponent";
import Header from "../header/header";
import SingleProduct from "../singleproduct/singleproduct";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {useEffect, useState} from 'react'
import { useCartContext } from "../../context/context";

function Products() {
   const {productArray, setproductArray, onSort} = useCartContext()
    const [loading, setloading] = useState(true)


   
    const productsUrl = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"

    useEffect(() => {
        const fetchData = async() => {
           
            const response = await fetch(productsUrl)
            const data = await response.json()
           // print the above url in the browser and see the data structure for better understanding. 
            const duplicate = []
            for(let i=0; i<data.categories.length; i++) {
                duplicate.push(...data.categories[i].category_products)
    
               
                    
            }
            setproductArray(duplicate)
            setloading(false)
            console.log(productArray)
        

           
           
        }
        fetchData()

    }, [])

    
    


    const Showproducts = () => {
        return (
            <div className="product-row">
            {productArray.map(each => <ProductArrayComponent key = {each.id} productDetails = {each}/>)}
            </div>

        )
    }

    const Dummycomponent = () => {
        
        const {id} = useParams();
        const selectedProduct = productArray.find(product => product.id === id)
        return <SingleProduct product = {selectedProduct} />

    }

    // We've written the dummycomponent to avoid the error. And the error occurs when product component is rendered
    // and when control comes to the line const {id} = useParams(), there'll no id in the url and url will be 
    // localhost:3000/products. And that's why to avoid this error we write dummycomponent. 

    // we get the product id inside dummycomponent, using find method we get the entire concern/respective 
    // product details. And the same product is send as a prop to singleproduct for the detailed description of the product.
   
    const onFiltering = (event) => {
        onSort(productArray, event.target.value)
    }
   
    return  (
        <div className="products-container">
        <Header/>

        <h1>All Products</h1>
        <select onChange = {onFiltering}>
            <option>-select-</option>
            <option>Low-High</option>
            <option>High-Low</option>
            <option>Title(A-Z)</option>
        </select>
        {loading? <AiOutlineLoading3Quarters/>: 
        <Routes>
        <Route path = "/" element = {<Showproducts/>}/>
        <Route path = "/:id" element = {<Dummycomponent/>}/>
        </Routes>
        
}



</div>
    )
        
}


export default Products;


/*
We can display the items added by the user when he/she clicks on the add to cart button in the cart component.
But it comes with some limitations/extra lines of code/extra flow of the code. 

To achieve that,  cart route should be removed in the App.js and same route is given in the product.js
but whenever the user search for cartitems in his/her account..then the cart component will be displayed through
product component bcz route for cart is given in the product component. But this is not the practise. 
Whatever the extra lines of code which is being returned by the product component (say <h1>All Products</h1>)
will also be displayed in the cart component. 

The above mentioned is the process/consequences we have to follow/will get when we don't use react context. 
*/

// https://blog.bitsrc.io/when-to-use-context-api-vs-redux-in-your-next-react-project-59fb0d78840e
