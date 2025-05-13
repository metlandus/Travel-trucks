import React from "react";
import SideBar from "../components/SideBar";

function Catalog() {
	return (
		<div className="flex flex-row">
			<div className="flex-1/3">
				<SideBar />
			</div>
			<div className="flex-2/3">Ece</div>
		</div>
	);
}

export default Catalog;
