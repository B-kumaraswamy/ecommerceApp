import "./singleproduct.css"
import  {useState }  from "react";
import { useCartContext } from "../../context/context";




function SingleProduct(props) {
    const {product} = props
    const [quantity, setQuantity] = useState(1);
    const {onAddtoCart} = useCartContext();

    

    const onIncrease = () => {
        console.log("inside increase", quantity)
        setQuantity(prevquantity =>  prevquantity + 1 );
    }

    const onDecrease = () => {
        console.log("inside decrease", quantity)
        if (quantity > 1) {
            setQuantity(prevquantity => prevquantity - 1 );
        }

    }

    const onAdding = () => {
        onAddtoCart(product, quantity)
    }

   
    
    //newCartItems = [{
        //"id": "1",
        //"title": "Mens Kurta",
        //"price": "1199",
        //"compare_at_price": "1299",
        //"vendor": "Manyvar",
        //"badge_text": "Wedding Special",
        //"image": "https://plus.unsplash.com/premium_photo-1682090786689-741d60a11384",
        //"second_image": "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267"
        // "quantity" : "1"
    //}, {},{}, {id,title, price, quantity}]



    return (
            <div className="product-description-container">
    <div className="product-image">
    <img src = {product.image} alt = "loading"/>

    </div>

    <div className="product-heading">
    <h1>{product.title}</h1>
    </div>

    <div className="product-price">
    <h2>{`Price: ${product.price}/-`}</h2>
    </div>

    <div className="product-available">
    <span>Available: </span><span>In Stock</span>
    </div>

    <div className="product-vendor">
    <h2>Brand : {product.vendor}</h2>
    </div>

    <div>
    <button className = "in-button" onClick={onDecrease}> - </button><button className="in-quantity">{quantity}</button><button  className = "button" onClick={onIncrease}> + </button>
    </div> <br/> 

    <div className="add-to-cart-button">
    <button type="button"  onClick={onAdding}>Add to cart</button>
    </div>

    </div>




        )
    }

export default SingleProduct