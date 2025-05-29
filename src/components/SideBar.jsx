import { useDispatch } from "react-redux";
import { triggerSearch } from "../redux/vansSlice";
import Location from "./Location";
import Equipment from "./Equipment";
import VehicleType from "./VehicleType";

function SideBar() {
	const dispatch = useDispatch();

	function handleSearch() {
		dispatch(triggerSearch());
	}
	return (
		<div className="px-16">
			<Location />
			<div className="flex flex-col gap-8">
				<p className="text-text font-medium">Filters</p>
				<Equipment />
				<VehicleType />

				<button
					onClick={handleSearch}
					className="bg-button hover:bg-button-hover text-white rounded-full px-15 py-4 self-start"
				>
					Search
				</button>
			</div>
		</div>
	);
}

export default SideBar;
