import React from "react";
import "./Checkout.css";
import Products from "./Product";
import Subtotal from "./Subtotal";


function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>
				<div className="checkout__title">
					<h2>Your Shopping Basket</h2>
				</div>
				<div className="checkout__basketView">
					<Products />
				</div>
			</div>
			<div className="checkout__right">
                <Subtotal />
                {/* <h2>Subtotal (1 items): <strong>$1234</strong></h2>
				<input type="checkbox" name="" id="" /> This order contains a
				gift
				<button>Proceed to Checkout</button> */}
			</div>
		</div>
	);
}

export default Checkout;
