import React from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
	return (
		<div className="header">
			{/* header nav */}
			<img
				className="header__logo"
				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
			/>
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
			</div>
		</div>
	);
}

export default Header;
