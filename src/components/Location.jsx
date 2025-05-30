import svg from "../assets/icomoon/symbol-defs.svg";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/vansSlice";

function Location() {
	const dispatch = useDispatch();
	const locations = ["Any"];
	const loc = useSelector((state) => state.vans.all);
	loc.map((van) =>
		locations.includes(van.location) ? "" : locations.push(van.location)
	);

	function handleChange(event) {
		const selectedLocation = event.target.value;
		dispatch(setFilter(selectedLocation));
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
				<input
					name="location"
					placeholder="City"
					list="location"
					className="outline-none w-full"
					onChange={handleChange}
				/>
				<datalist id="location">
					{locations.map((location, index) => (
						<option key={index} value={location}>
							{location}
						</option>
					))}
				</datalist>
			</div>
		</div>
	);
}

export default Location;
