import React from "react";
import svg from "../assets/icomoon/symbol-defs.svg";

const Equipment = () => {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-main font-semibold text-xl border-b-1 border-b-gray-light pb-6">
				Vehicle Equipment
			</h2>
			<div className="flex flex-wrap gap-2">
				<div className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-wind`} />
					</svg>
					<p className="font-medium text-main">AC</p>
				</div>
				<div className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-diagram`} />
					</svg>
					<p className="font-medium text-main">Automatic</p>
				</div>
				<div className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-cup-hot`} />
					</svg>
					<p className="font-medium text-main">Kitchen</p>
				</div>
				<div className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-tv`} />
					</svg>
					<p className="font-medium text-main">TV</p>
				</div>
				<div className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32} className="stroke-0">
						<use href={`${svg}#icon-radio`} />
					</svg>
					<p className="font-medium text-main">Radio</p>
				</div>
				<div className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-fridge`} />
					</svg>
					<p className="font-medium text-main">Refrigerator</p>
				</div>
				<div className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg
						width={32}
						height={32}
						className="text-black fill-none"
					>
						<use href={`${svg}#icon-gas-stove`} />
					</svg>
					<p className="font-medium text-main">Gas</p>
				</div>
				<div className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg
						width={32}
						height={32}
						className="text-black fill-none"
					>
						<use href={`${svg}#icon-water`} />
					</svg>
					<p className="font-medium text-main">Water</p>
				</div>
				<div className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg width={32} height={32}>
						<use href={`${svg}#icon-petrol`} />
					</svg>
					<p className="font-medium text-main">Petrol</p>
				</div>
				<div className="flex flex-col px-10 py-4 gap-2 border-1 border-gray-light items-center hover:border-button rounded-xl max-w-[114px]">
					<svg
						width={32}
						height={32}
						className="text-black fill-none"
					>
						<use href={`${svg}#icon-microwave`} />
					</svg>
					<p className="font-medium text-main">Microwave</p>
				</div>
			</div>
		</div>
	);
};

export default Equipment;
