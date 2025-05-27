import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchVans } from "../redux/vansSlice";
import svg from "../assets/icomoon/symbol-defs.svg";
import FeaturesBox from "../components/FeaturesBox";
import CampervanBook from "../components/CampervanBook";
import Reviews from "../components/Reviews";

function VanDetailsPage() {
	const [details, setDetails] = useState("Features");
	const { id } = useParams();
	const dispatch = useDispatch();

	const vans = useSelector((state) => state.vans.all);
	const van = vans.find((van) => van.id === id);

	const [loading, setLoading] = useState(!van);

	useEffect(() => {
		if (!van) {
			dispatch(fetchVans()).then(() => setLoading(false));
		}
	}, [dispatch, van]);

	if (loading) {
		return <p>Loading...</p>;
	}
	const features = {
		transmission: van.transmission,
		engine: van.engine,
		AC: van.AC,
		bathroom: van.bathroom,
		kitchen: van.kitchen,
		TV: van.TV,
		radio: van.radio,
		refrigerator: van.refrigerator,
		microwave: van.microwave,
		gas: van.gas,
		water: van.water,
	};

	const vehicleDetails = {
		form: van.form,
		length: van.length,
		width: van.width,
		height: van.height,
		tank: van.tank,
		consumption: van.consumption,
	};

	return (
		<div className="flex flex-col px-16 pt-12 gap-7 mb-50">
			<div className="flex flex-col gap-2">
				<p className="text-main font-semibold text-2xl">{van.name}</p>
				<div className="flex gap-4">
					<div className="flex items-center gap-1">
						<svg width={16} height={16} className="fill-rating">
							<use href={`${svg}#icon-rating`} />
						</svg>
						<p className="underline">
							{van.rating} ({van.reviews.length} Reviews)
						</p>
					</div>
					<div className="flex items-center gap-1">
						<svg width={16} height={16}>
							<use href={`${svg}#icon-map`} />
						</svg>
						<p>{van.location}</p>
					</div>
				</div>
				<p className="font-main font-semibold text-2xl">
					€{van.price}.00
				</p>
			</div>
			<div className="flex  justify-between">
				{van.gallery.map((image, index) => (
					<div
						key={index}
						className="max-w-100 h-70 rounded-xl overflow-hidden"
					>
						<img
							src={image.original}
							alt={`Gallery image ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>
			<p className="text-text">{van.description}</p>
			<div className="flex flex-col mt-3 gap-11">
				<div className="flex gap-10 relative">
					<button
						onClick={() => setDetails("Features")}
						className={`font-medium text-main text-xl cursor-pointer pb-6 z-1 ${
							details === "Features"
								? "border-b-5 border-button"
								: ""
						}`}
					>
						Features
					</button>
					<button
						onClick={() => setDetails("Reviews")}
						className={`font-medium text-main text-xl cursor-pointer pb-6 z-1 ${
							details === "Reviews"
								? "border-b-5 border-button"
								: ""
						}`}
					>
						Reviews
					</button>
					<div className="w-full h-[1px] bg-gray-light absolute bottom-0.5"></div>
				</div>
				<div className="flex gap-10">
					{details === "Features" ? (
						<div className="flex-1/2">
							<FeaturesBox
								features={features}
								details={vehicleDetails}
							/>
						</div>
					) : (
						<div className="flex-1/2">
							<Reviews reviews={van.reviews} />
						</div>
					)}
					<div className="flex-1/2">
						<CampervanBook />
					</div>
				</div>
			</div>
		</div>
	);
}

export default VanDetailsPage;
