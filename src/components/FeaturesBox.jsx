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
							{details.form}
						</p>
					</div>
					<div className="flex justify-between">
						<p className="text-main font-medium">Length</p>
						<p className="text-main font-medium">
							{details.length}
						</p>
					</div>
					<div className="flex justify-between">
						<p className="text-main font-medium">Width</p>
						<p className="text-main font-medium">{details.width}</p>
					</div>
					<div className="flex justify-between">
						<p className="text-main font-medium">Height</p>
						<p className="text-main font-medium">
							{details.height}
						</p>
					</div>
					<div className="flex justify-between">
						<p className="text-main font-medium">Tank</p>
						<p className="text-main font-medium">{details.tank}</p>
					</div>
					<div className="flex justify-between">
						<p className="text-main font-medium">Consumption</p>
						<p className="text-main font-medium">
							{details.consumption}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesBox;
