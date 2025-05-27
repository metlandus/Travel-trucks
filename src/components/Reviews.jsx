import svg from "../assets/icomoon/symbol-defs.svg";
import Rating from "react-rating";

const Reviews = ({ reviews }) => {
	return (
		<div className="flex gap-11 flex-col">
			{console.log(reviews)}
			{reviews.map((review) => (
				<div className="flex flex-col gap-4">
					<div className="flex gap-4">
						<div className="flex justify-center items-center rounded-full w-[60px] h-[60px] text-2xl bg-badges text-button font-semibold">
							{review.reviewer_name[0]}
						</div>
						<div className="flex flex-col gap-1">
							<p>{review.reviewer_name}</p>
							<Rating
								start={0}
								stop={5}
								readonly
								initialRating={review.reviewer_rating}
								emptySymbol={
									<svg
										width={16}
										height={16}
										className="fill-badges"
									>
										<use href={`${svg}#icon-rating`} />
									</svg>
								}
								fullSymbol={
									<svg
										width={16}
										height={16}
										className="fill-rating"
									>
										<use href={`${svg}#icon-rating`} />
									</svg>
								}
							/>
						</div>
					</div>

					<p className="text-text">{review.comment}</p>
				</div>
			))}
		</div>
	);
};

export default Reviews;
