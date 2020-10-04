import React, { useEffect } from "react";
import "./App.css";
import "./firebase.js";
import Header from "./Header.js";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "firebase";
import { useStateValue } from "./StateProvider";

function App() {
	const [{}, dispathch] = useStateValue();
	useEffect(() => {
		auth().onAuthStateChanged((authUser) => {
			console.log("this user ->>>", authUser);
			if (authUser) {
				// the user just login in / the user was login in
				dispathch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is login out
				dispathch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
