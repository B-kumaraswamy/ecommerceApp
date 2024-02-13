import "./ProductArrayComponent.css"
import { Link } from "react-router-dom"

function ProductArrayComponent(props) {
    const {productDetails} = props

    return (
        <Link to = {productDetails.id} className="product-container" >
        <div >
            <div className="product-image">
            <img src = {productDetails.image} alt = {productDetails.second_image}/>
            </div> 

            <div className="product-title">
                <h1>{productDetails.title}</h1>
            </div>

            <div className="product-vendor">
                <p>{productDetails.vendor}</p>
            </div>

            <div className="product-price">
                <h2>{`${productDetails.price}/-`}</h2>
            </div>





        </div>
        </Link>
    )
    

}

export default ProductArrayComponent

// image, title, vendor, price