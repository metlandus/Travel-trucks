import { useState } from "react";
import SideBar from "../components/SideBar";
import Vans from "../components/Vans";

function Catalog() {
	const [page, setPage] = useState(1);
	return (
		<div className="flex flex-row mt-12 mb-10">
			<div className="flex-1/3">
				<SideBar setPage={setPage} />
			</div>
			<div className="flex-2/3 pr-16">
				<Vans setPage={setPage} page={page} />
			</div>
		</div>
	);
}

export default Catalog;
