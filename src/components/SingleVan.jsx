import React from "react";

const SingleVan = ({ vanName, rating, location, img }) => {
	return (
		<div className="flex flex-col gap-8 border-1 rounded-2xl border-gray-light">
			<img src={img} />
			{rating}
			{location}
			{vanName}
		</div>
	);
};

export default SingleVan;
