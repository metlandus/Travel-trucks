import React from "react";
import background from "../assets/Homepage Img 2.jpg";
import { Link } from "react-router-dom";

function Homepage() {
	return (
		<div className="h-[calc(100vh-74px)] flex items-center relative">
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: `url(${background})`,
					transform: "scaleX(-1)",
				}}
			></div>

			<div className="flex flex-col gap-10 relative z-10 text-inputs px-16 py-6 items-start">
				<div className="flex flex-col gap-4">
					<p className="font-semibold text-5xl">
						Camper of your dreams
					</p>
					<p className="font-semibold text-2xl">
						You can find everything you want in our catalog
					</p>
				</div>
				<Link
					to="/Catalog"
					className="bg-button rounded-full px-15 py-4 text-white font-medium hover:bg-button-hover"
				>
					View Now
				</Link>
			</div>
		</div>
	);
}

export default Homepage;
