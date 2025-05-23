import svg from "../assets/icomoon/symbol-defs.svg";

const SingleVan = ({
	vanName,
	rating,
	location,
	img,
	price,
	reviewCount,
	desc,
}) => {
	return (
		<div className="flex flex-col gap-8 border-1 p-6 rounded-2xl border-gray-light">
			<div id="vanContent" className="flex gap-6">
				<div id="vanPhoto" className="flex-1">
					<img src={img} className="rounded-lg" />
				</div>
				<div id="vanInfo" className="flex flex-col flex-2 gap-2">
					<div
						id="header"
						className="font-semibold text-2xl flex flex-row justify-between"
					>
						<p>{vanName}</p>
						<div id="priceLike" className="flex gap-3">
							<p>€ {price}.00</p>
							<svg width={32} height={32}>
								<use href={`${svg}#icon-like`} />
							</svg>
						</div>
					</div>
					<div className="gap-4 flex items-center">
						<div className="flex items-center">
							<svg width={20} height={20} className="fill-rating">
								<use href={`${svg}#icon-rating`} />
							</svg>
							{rating} ({reviewCount} Reviews)
						</div>
						<div className="flex gap-1 items-center">
							<svg width={20} height={20}>
								<use href={`${svg}#icon-map`} />
							</svg>
							{location}
						</div>
					</div>
					<div>{desc}</div>
				</div>
			</div>
		</div>
	);
};

export default SingleVan;
