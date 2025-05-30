import svg from "../assets/icomoon/symbol-defs.svg";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/vansSlice";

const Equipment = () => {
	const dispatch = useDispatch();
	const filters = useSelector((state) => state.vans.filters);

	const features = [
		"AC",
		"bathroom",
		"kitchen",
		"TV",
		"radio",
		"refrigerator",
		"microwave",
		"gas",
		"water",
	];

	function handleFilter(feature) {
		dispatch(setFilter(feature));
	}

	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-main font-semibold text-xl border-b-1 border-b-gray-light pb-6">
				Vehicle Equipment
			</h2>
			<div className="flex flex-wrap gap-2 ">
				{features.map((feature, index) => (
					<div key={index}>
						<button
							onClick={() => handleFilter(feature)}
							className={`flex flex-col px-10 py-4 gap-2 border-1  items-center hover:border-button rounded-xl max-w-[114px] ${filters.includes(feature) ? "border-button" : "border-gray-light"}`}
						>
							<svg width={32} height={32}>
								<use href={`${svg}#icon-${feature}`} />
							</svg>
							<p className="first-letter:capitalize">{feature}</p>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Equipment;
