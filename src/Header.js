import React from "react";

function Header() {
	return (
		<div className="header">
			{/* header nav */}
			<img
				className="header-logo"
				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
			/>
			{/* search bar */}
			<div className="header-search">
				<input className="searchInput" type="text" />
			</div>
			<div className="header-nav">
				<div className="header-option">
					<span className="header-optionLine1">Hello Guest</span>
					<span className="header-optionLine2">Sign In</span>
				</div>
				<div className="header-option">
					<span className="header-optionLine1">Return</span>
					<span className="header-optionLine2">& Order</span>
				</div>
				<div className="header-option">
					<span className="header-optionLine1">Your</span>
					<span className="header-optionLine2">Prime</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
