import React from "react";
import Location from "./Location";
import Equipment from "./Equipment";
import VehicleType from "./VehicleType";

function SideBar() {
	return (
		<div className="px-16">
			<Location />
			<div className="flex flex-col gap-8">
				<p className="text-text font-medium">Filters</p>
				<Equipment />
				<VehicleType />
				<button className="bg-button hover:bg-button-hover text-white rounded-full px-15 py-4 self-start">
					Search
				</button>
			</div>
		</div>
	);
}

export default SideBar;
