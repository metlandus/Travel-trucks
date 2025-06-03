import svg from "../assets/icomoon/symbol-defs.svg";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/vansSlice";
import { useState } from "react";

function Location() {
	const dispatch = useDispatch();
	const [selectedLocation, setSelectedLocation] = useState();
	const locations = [];
	const loc = useSelector((state) => state.vans.all);

	// Populate the locations array with unique values
	loc.forEach((van) => {
		if (!locations.includes(van.location)) {
			locations.push(van.location);
		}
	});

	// Handle location selection
	function handleChange(event) {
		setSelectedLocation();
		const location = event.target.value;
		setSelectedLocation(location);
		dispatch(setFilter(location));
	}

	return (
		<div className="flex flex-col text-main gap-2 mb-10">
			<label htmlFor="location" className="text-gray">
				Location
			</label>
			<div className="flex items-center bg-inputs rounded-xl gap-2.5 px-4.5 py-5">
				<svg width={20} height={20} className="fill-gray">
					<use href={`${svg}#icon-map`} />
				</svg>
				<select
                    name="location"
                    aria-placeholder="City"
					className={`outline-none w-full bg-transparent ${
						selectedLocation === "" ? "text-gray" : "text-main"
					}`}
					onChange={handleChange}
				>
					<option value="" className="text-gray">
						City
					</option>
					{locations.map((location, index) => (
						<option
							className="text-main"
							key={index}
							value={location}
						>
							{location}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default Location;
