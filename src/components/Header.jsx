import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
	const location = useLocation();
	return (
		<div className="flex py-6 px-16 xl:gap-140 gap-112 border-b-2 bg-inputs border-badges items-center">
			<Link to="Homepage">
				<div className="flex items-center">
					<p className="text-main font-extrabold text-xl max-h-6 ">
						Travel
						<span className="text-text">Trucks</span>
					</p>
				</div>
			</Link>

			<div className="flex gap-8 font-medium items-center">
				<Link
					to="/Homepage"
					className={`${
						location.pathname === "/Homepage"
							? "text-button-hover"
							: ""
					}`}
				>
					Home
				</Link>
				<Link
					to="/Catalog"
					className={`${
						location.pathname === "/Catalog"
							? "text-button-hover"
							: ""
					}`}
				>
					Catalog
				</Link>
			</div>
		</div>
	);
}

export default Header;
