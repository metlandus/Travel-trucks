import React from "react";
import SideBar from "../components/SideBar";
import Vans from "../components/Vans";

function Catalog() {
	return (
		<div className="flex flex-row mt-12 mb-10">
			<div className="flex-1/3">
				<SideBar />
			</div>
			<div className="flex-2/3">
				<Vans />
			</div>
		</div>
	);
}

export default Catalog;
