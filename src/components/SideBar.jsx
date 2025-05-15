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
			</div>
		</div>
	);
}

export default SideBar;
