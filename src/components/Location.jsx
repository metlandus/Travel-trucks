import React from "react";

function Location() {
	const locations = ["Turkey", "Serbia", "USA", "France", "UAE"];

	return (
		<div className="px-16 flex flex-col">
			<label htmlFor="location">Location</label>
			<div className="flex bg-inputs">
				<input name="location" placeholder="City" list="location" />
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
