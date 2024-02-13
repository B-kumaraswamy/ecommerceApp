import Login from "./components/login/login";
import Home from "./components/home/home";
import Products from "./components/products/products";
import NotFound from "./components/notfound/notfound";
import {CartProvider} from "./context/context";
import Cart from "./components/cart/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
    <CartProvider>
    <Routes>
      <Route exact path = "/login" element = {<Login/>}/>
      <Route exact path = "/" element = {<Home/>}/>
      <Route exact path = "/products/*" element = {<Products/>}/>
      <Route exact path="/cart" element = {<Cart/>}/>
      <Route  path = "*" element = {<NotFound/>}/>
      
    </Routes>
    </CartProvider>
    
    </BrowserRouter>
  )
}
// <Route exact path = "/cart" element = {<Cart/>}/>
//import Cart from "./components/cart/cart";
export default App;