import './login.css'
import Cookies from 'js-cookie'
import {Navigate, useNavigate} from 'react-router-dom'
 

function Login() {
    const history = useNavigate()
    const token  = Cookies.get("jwt-token")
    if(token !== undefined) {
        <Navigate to = "/"/>
    }
    const onLogin = async() => {
        const userDetails = {username: 'rahul', password: 'rahul@2021'};
        const apiUrl = "https://apis.ccbp.in/login";
        const options = {
            method : 'POST',
            body : JSON.stringify(userDetails)
        }
        const response = await fetch(apiUrl, options)
        const responseData = await response.json()
        console.log(responseData)
        
        if(response.ok === true) {
            const jwtToken = responseData.jwt_token
            console.log(Cookies)
            Cookies.set('jwt-token', jwtToken)
            history('/')

        }


    }







    return (
        <div className="login-container">
            <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIrmKfK63dep5cC7yntyo0a-U1BVFpKDI0Q&usqp=CAU' className="login-image" alt = "loading"/>
            <div className="login-cart">
                <h1 className="login-heading">Welcome Bro</h1>
                <p className="login-p">USERNAME</p>
                <input type = "text" className="login-input" placeholder="Username"/>
                <p className="login-p">PASSWORD</p>
                <input type = "password" placeholder="Password" className="login-input"/> <br/> <br/>
                <button type="button" className="login-button" onClick={onLogin}>Login</button>

            </div>

        </div>
    )
}

export default Login