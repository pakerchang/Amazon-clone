import React from "react";
import "./App.css";
import "./firebase.js";
import Header from "./Header.js";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path='/login'>
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
