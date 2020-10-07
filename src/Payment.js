import React, { Fragment, useEffect, useState } from "react";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import Axios from "axios";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();
	const history = useHistory();
	const stripe = useStripe();
	const elements = useElements();
	const [processing, setProcessing] = useState("");
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [disable, setDisable] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		// generate the special stripe secret which allows us to charge a customer
		const getClientSecret = async () => {
			const response = await Axios({
				method: "post",
				// Stripe expects the total in a currencies subunits
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [basket]);

	const handleSubmit = async (e) => {
		//do all the fancy stripe stuff
		e.preventDefault();
		setProcessing(true);
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				// paymentIntent - payment confirmation
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				history.replace("/orders");
			});
	};
	const handleChange = (e) => {
		// Listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setDisable(e.emtpy);
		setError(e.error ? e.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (
					<Link to="/checkout"> {basket?.length} items</Link>)
				</h1>
				{/* Payment section - delivery address */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>
				{/* Payment section - Review Items */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				{/* Payment section - Payment method */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/* Stripe tools */}
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => (
										<Fragment>
											<h3>Order Total: {value} </h3>
										</Fragment>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
							</div>
							<button
								disabled={processing || disable || succeeded}
							>
								<span>
									{processing ? <p>Processing</p> : "Buy Now"}
								</span>
							</button>
						</form>
					</div>
					{/* Error */}
					{error && <div>{error}</div>}
				</div>
			</div>
		</div>
	);
}

export default Payment;
