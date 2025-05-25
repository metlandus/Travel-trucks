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
					<li key={van.id} className="mb-8">
						<SingleVan
							id={van.id}
							vanName={van.name}
							rating={van.rating}
							location={van.location}
							img={van.gallery[0].thumb}
							price={van.price}
							reviewCount={van.reviews.length}
							desc={van.description}
							features={{
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
							}}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Vans;
