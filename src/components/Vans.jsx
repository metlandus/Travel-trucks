import { useEffect } from "react";
import SingleVan from "./SingleVan";
import { fetchVans } from "../redux/vansSlice";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Vans = ({ page, setPage }) => {
	const vans = useSelector((state) => state.vans.all);
	const filteredVans = useSelector((state) => state.vans.filteredVans);
	const filters = useSelector((state) => state.vans.filters);
	const error = useSelector((state) => state.vans.error); // Redux error state
	const dispatch = useDispatch();

	// Local state for pagination
	const itemsPerPage = 5; // Number of items per page

	useEffect(() => {
		dispatch(fetchVans());
	}, [dispatch]);

	useEffect(() => {
		// Show toast if there is an error
		if (error && filters.length > 0) {
			toast.error(error, { duration: 3000 });
		}
	}, [error, filters]);

	const vansToDisplay = filteredVans.length > 0 ? filteredVans : vans;
	const paginatedVans = vansToDisplay.slice(0, page * itemsPerPage);

	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<div className="flex flex-col">
			<Toaster /> {/* Toast container */}
			<ul>
				{paginatedVans.map((van) => (
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
			{/* Show "Load More" button only if there are more items to load */}
			{paginatedVans.length < vansToDisplay.length && (
				<button
					onClick={handleLoadMore}
					className="cursor-pointer self-center border-1 border-gray-light text-main rounded-full px-8 py-4 mt-2"
				>
					Load More
				</button>
			)}
		</div>
	);
};

export default Vans;
