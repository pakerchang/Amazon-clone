import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
    const signIn = e => {
        e.preventDefault()
    }
    const register = e => {
        e.preventDefault()
    }

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign-In</h1>
				<form className="login__form" action="">
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autofocus
						placeholder="Your email account"
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button className="login__signInBtn" type='submit' onClick={signIn}>Login In</button>
				</form>
				<p>
					by signing-in you agree to the
					<strong> AMAZON FAKE CLONE</strong> Conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and
					our Interest-Based Ads Notice.
				</p>
				<button className="login__registerBtn" onClick={register}>
					Create your Amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;
