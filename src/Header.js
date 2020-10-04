import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthenticaton = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<Link to="/">
				{/* header nav */}
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>
			{/* search bar */}
			<div className="header__search">
				<input className="searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div
						className="header__option"
						onClick={handleAuthenticaton}
					>
						<span className="header__optionLine1">
							Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header__optionLine2">
							{!user ? "Sign In" : "Sign Out"}
						</span>
					</div>
				</Link>
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
							{/* show basket number */}
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
