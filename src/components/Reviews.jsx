import React from "react";

const Reviews = ({ reviews }) => {
	return (
		<div className="flex gap-11 flex-col">
			{console.log(reviews)}
			{reviews.map((review) => (
				<p>{review.comment}</p>
			))}
		</div>
	);
};

export default Reviews;
