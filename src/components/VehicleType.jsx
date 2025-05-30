import svg from "../assets/icomoon/symbol-defs.svg";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/vansSlice";

const VehicleType = () => {
	const dispatch = useDispatch();
	const filters = useSelector((state) => state.vans.filters);

	function handleFilter(filterType) {
		dispatch(setFilter(filterType));
	}

	return (
		<div className="flex flex-col gap-6 mb-5">
			<h2 className="text-main font-semibold text-xl border-b-1 border-b-gray-light pb-6">
				Vehicle Type
			</h2>
			<div className="flex flex-wrap gap-3">
				<button
					onClick={() => handleFilter("panelTruck")}
					className={`flex flex-col px-8 py-4 gap-2 border-1 items-center hover:border-button rounded-lg max-h-[98px] w-[114px] ${filters.includes("panelTruck") ? "border-button" : "border-gray-light"} `}
				>
					<svg width={32} height={32}>
						<use href={`${svg}#icon-bi_grid-1x2`} />
					</svg>
					<p className="font-medium text-main">Van</p>
				</button>
				<button
					onClick={() => handleFilter("fullyIntegrated")}
					className={`flex flex-col px-8 py-1 justify-center gap-2 border-1 items-center hover:border-button rounded-lg max-h-[98px] w-[114px] ${filters.includes("fullyIntegrated") ? "border-button" : "border-gray-light"} `}
				>
					<svg>
						<use href={`${svg}#icon-bi_grid`} />
					</svg>
					<p className="font-medium text-main text-wrap text-center">
						Fully Integrated
					</p>
				</button>
				<button
					onClick={() => handleFilter("alcove")}
					className={`flex flex-col px-8 py-4 gap-2 border-1 items-center hover:border-button rounded-lg max-h-[98px] w-[114px] ${filters.includes("alcove") ? "border-button" : "border-gray-light"} `}
				>
					<svg width={32} height={32}>
						<use href={`${svg}#icon-bi_grid-3x3-gap`} />
					</svg>
					<p className="font-medium text-main">Alcove</p>
				</button>
			</div>
		</div>
	);
};

export default VehicleType;
