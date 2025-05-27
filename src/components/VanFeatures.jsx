import svg from "../assets/icomoon/symbol-defs.svg";

const VanFeatures = ({ features }) => {
	return (
		<div className="flex gap-2 flex-wrap">
			{Object.entries(features).map((feature) => (
				<>
					{typeof feature[1] === "boolean" ? (
						feature[1] ? (
							<div className="flex items-center bg-badges mix-blend-multiply  rounded-full px-4.5 py-4 gap-2 font-medium text-main">
								<svg width={20} height={20}>
									<use href={`${svg}#icon-${feature[0]}`} />
								</svg>
								<p className="first-letter:capitalize">
									{feature[0]}
								</p>
							</div>
						) : (
							""
						)
					) : (
						<div className="flex items-center bg-badges mix-blend-multiply rounded-full px-4.5 py-4 gap-2 font-medium text-main">
							<svg width={20} height={20}>
								<use href={`${svg}#icon-${feature[0]}`} />
							</svg>
							<p className="first-letter:capitalize">
								{feature[1]}
							</p>
						</div>
					)}
				</>
			))}
		</div>
	);
};

export default VanFeatures;
