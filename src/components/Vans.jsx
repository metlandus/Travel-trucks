import { useEffect } from "react";
import SingleVan from "./SingleVan";
import { fetchVans, triggerSearch } from "../redux/vansSlice";
import { useSelector, useDispatch } from "react-redux";

const Vans = () => {
	const vans = useSelector((state) => state.vans.all);
	const filteredVans = useSelector((state) => state.vans.filteredVans);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchVans());
		dispatch(triggerSearch());
	}, [dispatch]);


    const vansToDisplay = filteredVans.length > 0 ? filteredVans : vans;
    
	return (
		<div>
			<ul>
				{vansToDisplay.map((van) => (
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
