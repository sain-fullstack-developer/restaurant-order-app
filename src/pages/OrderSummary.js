import React from "react";
import OrderSummaryItem from "../components/OrderSummaryItem";

const OrderSummary = ({ navigateTo }) => {
	return (
		<div className="bg-green-400 p-6 min-h-screen relative">
			<div
				onClick={() => {
					navigateTo("MenuListItem");
				}}
				className="bg-white/50 w-10 h-10 rounded-full absolute bottom-7 left-6 grid place-items-center">
				<div className="w-4 h-4 bg-transparent border-2 border-black  border-r-0 border-b-0 -rotate-45"></div>
			</div>
			<div className="grid grid-cols-4 place-items-center font-semibold text-amber-950 text-xl bg-white/50 p-2">
				<p>Index</p>
				<p>Dish Name</p>
				<p>Quantity</p>
				<p>Price</p>
			</div>
			<div className="bg-white/40 grid-cols-1">
				<OrderSummaryItem />
				<OrderSummaryItem />
				<OrderSummaryItem />
				<OrderSummaryItem />
			</div>
			<p className="text-amber-950 text-xl font-semibold text-center mt-4 bg-white/50 p-2">
				<span>Estimated Time Of Arrival: </span> {Date.now()}{" "}
			</p>
		</div>
	);
};

export default OrderSummary;
