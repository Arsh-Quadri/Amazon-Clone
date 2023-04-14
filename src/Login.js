import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { auth } from './Firebase';
// import { firebase } from './Firebase';
// const auth = firebase.auth();
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [submitButtonDisable, setSubmitButtonDisable] = useState(false)

    const login = (e) => {

        e.preventDefault();
        // setSubmitButtonDisable(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // setSubmitButtonDisable(false);

                navigate("/");
            })
            .catch((e) => alert(e.message))
    }

    const register = (e) => {
        e.preventDefault();
        // setSubmitButtonDisable(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                // setSubmitButtonDisable(false);
                //create a user and logged in
                navigate("/");
                // console.log(user)

            })
            .catch((e) => alert(e.message))

    }


    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://pngimg.com/uploads/amazon/small/amazon_PNG24.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button className='login__signInButton' onClick={login}>Sign in</button>
                </form>
                <p>By signing-in you agree to Amazon's conditions of use & sale. please see your privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login