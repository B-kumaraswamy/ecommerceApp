import "./home.css"
import Header from "../header/header";
import {useNavigate} from 'react-router-dom'
 

function Home() {
    const history = useNavigate()
    const onShopnow = () => {
        history('/products')

    }
    return (
        <div className="home-container">
            <Header/>
            <div className="home-heading"><h1 >Clothes That Get YOU Noticed</h1></div>
            <div className="home-para"><p >Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.</p></div>
            <div className="shopnow-button"><button onClick={onShopnow}>Shop Now</button></div>

            <div className="homepage-image">
                <img src="https://media.istockphoto.com/id/1171895601/photo/full-body-photo-of-enthusiastic-candid-lady-in-eyewear-eyeglasses-go-shopping-buy-purchases.jpg?s=612x612&w=0&k=20&c=e1R5t5V29b6FHeFz0fg9FHn43Jn5u--C1rdBr4Yv0h0=" alt = "loading" />
            </div>
        </div>
    )
}


export default Home;