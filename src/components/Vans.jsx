import React, { useEffect } from "react";
import SingleVan from "./SingleVan";
import { fetchVans } from "../redux/vansSlice";
import { useSelector, useDispatch } from "react-redux";

const Vans = () => {
	const vans = useSelector((state) => state.vans.all);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchVans());
	}, [dispatch]);

	return (
		<div>
			<ul>
				{vans.map((van) => (
					<li key={van.id}>
						<SingleVan
							vanName={van.name}
							rating={van.rating}
							location={van.location}
							img={van.gallery[0].thumb}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Vans;
