import React from "react";

const CampervanBook = () => {
	return (
		<div className="flex flex-col gap-6 border-1 border-gray-light px-15 py-11 rounded-xl">
			<div className="flex flex-col gap-2">
				<p className="font-medium text-main text-xl">
					Book your campervan now
				</p>
				<p className="text-gray">
					Stay connected! We are always ready to help you.
				</p>
			</div>
			<div className="flex flex-col gap-3.5">
				<input
					required
					placeholder="Name*"
					className="bg-inputs p-4.5 rounded-xl"
				></input>
				<input
					required
					placeholder="Email*"
					className="bg-inputs p-4.5 rounded-xl"
				></input>
				<input
					required
					placeholder="Booking Date*"
					className="bg-inputs p-4.5 rounded-xl"
				></input>
				<textarea
					placeholder="Comment"
					className="bg-inputs p-4.5 rounded-xl"
				></textarea>
			</div>
			<button className="self-center bg-button hover:bg-button-hover text-white rounded-full px-15 py-4 ">
				Send
			</button>
		</div>
	);
};

export default CampervanBook;
