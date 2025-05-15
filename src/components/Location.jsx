import React from "react";
import svg from "../assets/icomoon/symbol-defs.svg";

function Location() {
	const locations = ["Turkey", "USA", "France", "UAE"];

	return (
		<div className="flex flex-col text-main gap-2 my-10">
			<label htmlFor="location" className="text-gray">
				Location
			</label>
			<div className="flex items-center bg-inputs rounded-xl gap-2.5 px-4.5 py-5">
				<svg width={20} height={20} className="fill-gray">
					<use href={`${svg}#icon-map`} />
				</svg>
				<input
					name="location"
					placeholder="City"
					list="location"
					className="outline-none"
				/>
				<datalist id="location">
					{locations.map((location) => (
						<option key={location} value={location}>
							{location}
						</option>
					))}
				</datalist>
			</div>
		</div>
	);
}

export default Location;
