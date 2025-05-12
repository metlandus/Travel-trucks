import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Header() {
	return (
		<div className="flex">
			<img src={logo} alt="logo" />
			<div>
				<a>Home</a>
				<a>Catalog</a>
			</div>
		</div>
	);
}

export default Header;
