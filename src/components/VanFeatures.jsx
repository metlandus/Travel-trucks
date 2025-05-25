import svg from "../assets/icomoon/symbol-defs.svg";

const VanFeatures = ({ features }) => {
	return (
		<div className="flex gap-2 flex-wrap">
			{/* <div className="flex gap-2 px-4.5 py-4 bg-badges rounded-full items-center">
				<svg width={32} height={32}>
					<use href={`${svg}#icon-transmission`} />
				</svg>
				<p className="">{features.transmission}</p>
			</div>
			<div className="flex gap-2 px-4.5 py-4 bg-badges rounded-full items-center">
				<svg width={32} height={32}>
					<use href={`${svg}#icon-engine`} />
				</svg>
				<p className="">{features.engine}</p>
			</div> */}
			{Object.entries(features).map((feature) => (
				<div className="flex gap-2 px-4.5 py-4 font-medium bg-badges rounded-full items-center text-main">
					<svg width={20} height={20}>
						<use href={`${svg}#icon-${feature[0]}`} />
					</svg>
					<p className="">
						{typeof feature[1] === "boolean"
							? feature[0]
							: feature[1]}
					</p>
				</div>
			))}
		</div>
	);
};

export default VanFeatures;
