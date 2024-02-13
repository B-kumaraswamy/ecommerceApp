import './header.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Header() {
    const history = useNavigate()

    const onLogout = () => {
       Cookies.remove('jwt-token')
       history("/login")


    }
    return (
        <nav>
            <div  className='header-logo'>
                <Link to = "/">
                <img  alt = "loading" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAC3BmBcbIt7ZIklrvFDbjjPPZwQeQFUFmg&usqp=CAU"/>
                </Link>
                
                </div>
            
            <div className='header-text'><Link to = "/" >Home</Link></div>
            <div className='header-text'><Link to = "/products" >Products</Link></div>
            <div className='header-text'><Link to = "/cart" >Cart</Link></div>
            <div className='logout-button'><button type = "button"  onClick={onLogout}>Logout</button></div>
            
            


        </nav>
        
    )
}

export default Header;