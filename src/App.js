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
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51HZkaXDRyVS1dWho0gUdBCf9CD2Vk4jobdrPXa1YgmAsa7kpDIu4zrS0Jy2WIuXj3SEkiWTkHgqbmsneEpGBQzHe00cabBJvQu"
);

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
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
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
