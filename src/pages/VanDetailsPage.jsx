import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchVans } from "../redux/vansSlice";

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
		<div className="px-16 pt-12">
			<h1>{van.name}</h1>
			<p>{van.rating}</p>
		</div>
	);
}

export default VanDetailsPage;
