import React from "react";
import OrderSummaryItem from "../components/OrderSummaryItem";

const OrderSummary = ({ navigateTo }) => {
	const data = JSON.parse(localStorage.getItem("order-summary"));
	const time = new Date();
	const estTime = time.toLocaleString();

	const totalAmount = data.reduce((total, item) => {
		return total + item.price;
	}, 0);

	return (
		<div className="bg-green-400 p-6 min-h-screen relative">
			<h1 className="text-center text-6xl text-amber-950 uppercase tracking-widest mb-10">
				Order Summary
			</h1>
			<div
				onClick={() => {
					navigateTo("MenuListItem");
					localStorage.removeItem("order-summary");
					localStorage.removeItem("order-list");
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
				{data.map((order, index) => {
					return <OrderSummaryItem key={index} data={order} index={index} />;
				})}
			</div>
			<div className="text-amber-950 px-20 text-xl font-semibold text-center mt-4 bg-white/50 p-2 flex justify-between">
				<p>Estimated Time Of Arrival: </p> {estTime}{" "}
				<p>Total Amount: {totalAmount}</p>
			</div>
		</div>
	);
};

export default OrderSummary;
