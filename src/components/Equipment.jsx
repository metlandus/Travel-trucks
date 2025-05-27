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
			{/* <div className="flex flex-wrap gap-2">
				<button className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-AC`} />
					</svg>
					<p className="font-medium text-main">AC</p>
				</button>
				<button className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-transmission`} />
					</svg>
					<p className="font-medium text-main">Automatic</p>
				</button>
				<button className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-kitchen`} />
					</svg>
					<p className="font-medium text-main">Kitchen</p>
				</button>
				<button className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-TV`} />
					</svg>
					<p className="font-medium text-main">TV</p>
				</button>
				<button className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-radio`} />
					</svg>
					<p className="font-medium text-main">Radio</p>
				</button>
				<button className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-refrigerator`} />
					</svg>
					<p className="font-medium text-main">Refrigerator</p>
				</button>
				<button className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32} className="text-black">
						<use href={`${svg}#icon-gas`} />
					</svg>
					<p className="font-medium text-main">Gas</p>
				</button>
				<button className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32} className="text-black">
						<use href={`${svg}#icon-water`} />
					</svg>
					<p className="font-medium text-main">Water</p>
				</button>
				<button className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-engine`} />
					</svg>
					<p className="font-medium text-main">engine</p>
				</button>
				<button className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32} className="text-black">
						<use href={`${svg}#icon-microwave`} />
					</svg>
					<p className="font-medium text-main">Microwave</p>
				</button>
				<button className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32} className="text-black">
						<use href={`${svg}#icon-bathroom`} />
					</svg>
					<p className="font-medium text-main">Bathroom</p>
				</button>
			</div> */}
		</div>
	);
};

export default Equipment;
