import svg from "../assets/icomoon/symbol-defs.svg";

const SingleVan = ({ vanName, rating, location, img, price }) => {
	return (
		<div className="flex flex-col gap-8 border-1 p-6 rounded-2xl border-gray-light">
			<div id="vanContent" className="flex gap-6">
				<img src={img} className="rounded-lg overflow-clip flex-1" />
				<div id="vanInfo" className="flex flex-col flex-2">
					<div
						id="header"
						className="font-semibold size-6 flex flex-nowrap"
					>
						<p>{vanName}</p>
						<p>€{price}.00</p>
						<svg width={32} height={32}>
							<use href={`${svg}#icon-like`} />
						</svg>
					</div>
					{rating}
					{location}
				</div>
			</div>
		</div>
	);
};

export default SingleVan;
