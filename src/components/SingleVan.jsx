import svg from "../assets/icomoon/symbol-defs.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/vansSlice";
import VanFeatures from "./VanFeatures";

const SingleVan = ({
	id,
	vanName,
	rating,
	location,
	img,
	price,
	reviewCount,
	desc,
	features,
}) => {
	const dispatch = useDispatch();
	const favs = useSelector((state) => state.vans.favorites);

	function handleFavorite() {
		console.log("Van is added to favorites");
		console.log(favs);
		dispatch(toggleFavorite(id));
	}

	return (
		<div className="flex flex-col gap-8 border-1 p-6 rounded-2xl border-gray-light">
			<div id="vanContent" className="flex gap-6">
				<div id="vanPhoto" className="flex-1">
					<img
						src={img}
						className="rounded-lg aspect-[1.123] object-cover"
					/>
				</div>
				<div
					id="vanInfo"
					className="flex flex-col flex-2 gap-6 relative"
				>
					<div className="flex flex-col gap-2">
						<div
							id="header"
							className="font-semibold text-2xl flex flex-row justify-between"
						>
							<p>{vanName}</p>
							<div id="priceLike" className="flex gap-3">
								<p>€ {price}.00</p>
								<button
									onClick={() => handleFavorite()}
									className="cursor-pointer"
								>
									{favs.includes(id) ? (
										<svg
											width={32}
											height={32}
											className="fill-button"
										>
											<use href={`${svg}#icon-like`} />
										</svg>
									) : (
										<svg width={32} height={32}>
											<use href={`${svg}#icon-like`} />
										</svg>
									)}
								</button>
							</div>
						</div>
						<div className="gap-4 flex items-center">
							<div className="flex items-center gap-1">
								<svg
									width={20}
									height={20}
									className="fill-rating"
								>
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
					</div>
					<p className="text-text">{`${desc.split(" ").slice(0, 9).join(" ")}...`}</p>
					<div id="features">
						<VanFeatures features={features} />
					</div>
					<button className=" absolute left-0 bottom-0 bg-button hover:bg-button-hover rounded-full text-white font-medium px-10 py-4 cursor-pointer">
						Show more
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleVan;
