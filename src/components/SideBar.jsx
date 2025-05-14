import React from "react";
import Location from "./Location";
import Equipment from "./Equipment";
import VehicleType from "./VehicleType";

function SideBar() {
	return (
		<div className="px-16">
			<Location />
			<p className="text-text font-medium">Filters</p>
			<Equipment />
			<VehicleType />
		</div>
	);
}

export default SideBar;
