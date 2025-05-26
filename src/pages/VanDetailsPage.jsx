import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchVans } from "../redux/vansSlice";
import svg from "../assets/icomoon/symbol-defs.svg";

function VanDetailsPage() {
	const { id } = useParams();
	const dispatch = useDispatch();

	const vans = useSelector((state) => state.vans.all);
	const van = vans.find((van) => van.id === id);

	useEffect(() => {
		if (!vans.length) {
			dispatch(fetchVans());
		}
	}, [dispatch, vans]);

	if (!van) {
		return <p>Loading...</p>;
	}
	console.log(van);
	return (
		<div className="flex flex-col px-16 pt-12 gap-7">
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
		</div>
	);
}

export default VanDetailsPage;
