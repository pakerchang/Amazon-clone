import React from "react";
import "./Header.css";
import Product from "./Product";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header({ basketCount }) {
	basketCount = 0;
	const addBasketCount = () => {
		basketCount++;
	};
	return (
		<div className="header">
			<Link to="/">
				{/* header nav */}
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>
			{/* search bar */}
			<div className="header__search">
				<input className="searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionLine1">Hello Guest</span>
					<span className="header__optionLine2">Sign In</span>
				</div>
				<div className="header__option">
					<span className="header__optionLine1">Return</span>
					<span className="header__optionLine2">& Order</span>
				</div>
				<div className="header__option">
					<span className="header__optionLine1">Your</span>
					<span className="header__optionLine2">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__basketCount header__optionLine2">
							0
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
