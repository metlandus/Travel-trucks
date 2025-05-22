import React from "react";

const SingleVan = ({ vanName, rating, location, img }) => {
	return (
		<div className="flex flex-col gap-8 border-1 rounded-2xl border-gray-light">
			<div className="flex">
				<img src={img} className="rounded-lg flex-1/3" />
				<div className="flex-2/3">
					<p>{vanName}</p>
					{rating}
					{location}
				</div>
			</div>
		</div>
	);
};

export default SingleVan;
