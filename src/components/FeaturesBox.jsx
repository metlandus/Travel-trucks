import VanFeatures from "./VanFeatures";

const FeaturesBox = ({ features, details }) => {
	return (
		<div className="rounded-xl px-14 py-11 flex flex-col h-[560px] justify-between bg-inputs">
			<VanFeatures features={features} />
			<div className="flex flex-col gap-6">
				<p className="text-main text-xl font-semibold">
					Vehicle Details
				</p>
				<div className="w-full h-[1px] bg-gray-light"></div>
				<div className="flex flex-col gap-4">
					<div className="flex justify-between">
						<p className="text-main font-medium">Form</p>
						<p className="text-main font-medium first-letter:capitalize">
							{details.form === "panelTruck"
								? "Panel Truck"
								: details.form === "fullyIntegrated"
									? "Fully Integrated"
									: details.form}
						</p>
					</div>
					<div className="flex justify-between">
						<p className="text-main font-medium">Length</p>
						<p className="text-main font-medium">
							{details.length.replace("m", " m")}
						</p>
					</div>
					<div className="flex justify-between">
						<p className="text-main font-medium">Width</p>
						<p className="text-main font-medium">
							{details.width.replace("m", " m")}
						</p>
					</div>
					<div className="flex justify-between">
						<p className="text-main font-medium">Height</p>
						<p className="text-main font-medium">
							{details.height.replace("m", " m")}
						</p>
					</div>
					<div className="flex justify-between">
						<p className="text-main font-medium">Tank</p>
						<p className="text-main font-medium">
							{details.tank.replace("l", " l")}
						</p>
					</div>
					<div className="flex justify-between">
						<p className="text-main font-medium">Consumption</p>
						<p className="text-main font-medium">
							{details.consumption.replace("/", " / ")}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesBox;
