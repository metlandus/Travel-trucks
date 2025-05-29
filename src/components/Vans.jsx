import { useEffect, useMemo } from "react";
import SingleVan from "./SingleVan";
import { fetchVans } from "../redux/vansSlice";
import { useSelector, useDispatch } from "react-redux";

const Vans = () => {
	const vans = useSelector((state) => state.vans.all);
	const filters = useSelector((state) => state.vans.filters);
	const searchTriggered = useSelector((state) => state.vans.searchTriggered);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchVans());
	}, [dispatch]);

	const filteredVans = useMemo(() => {
		if (!searchTriggered || filters.length === 0) {
			return vans;
		}

		return vans.filter((van) => filters.every((filter) => van[filter]));
	}, [vans, filters, searchTriggered]);

	return (
		<div>
			<ul>
				{filteredVans.map((van) => (
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
