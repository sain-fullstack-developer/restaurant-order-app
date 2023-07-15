import React, { FC, useState } from "react";
import OrderListItem from "../components/OrderListItem";

interface OrderListTypes {
	navigateTo: (page: string) => void;
}

const OrderList: FC<OrderListTypes> = ({ navigateTo }) => {
	const [updatedArr, setUpdatedArr] = useState<Object[]>([]);
	const data = JSON.parse(localStorage.getItem("order-list") as string);
	const seen: { [key: string]: boolean } = {};
	const filteredArrayList: any[] = [];

	for (const element of data) {
		const key = JSON.stringify(element);
		if (!seen.hasOwnProperty(key)) {
			filteredArrayList.push(element);
			seen[key] = true;
		}
	}

	const handleQuantityChange = (
		index: number,
		newQuantity: number,
		data: any
	) => {
		setUpdatedArr((prevArr) => {
			const updatedItem = {
				...prevArr[index],
				name: data.name,
				quantity: newQuantity,
				price: data.price * newQuantity,
			};
			const newArr = [...prevArr];
			newArr[index] = updatedItem;
			return newArr;
		});
	};

	return (
		<div className="bg-green-400 text-amber-950 min-h-screen p-4 text-center">
			<h1 className="text-4xl sm:text-5xl md:text-6xl mb-10">
				Your Order List
			</h1>
			<div className="grid sm:w-2/3 m-auto rounded-xl bg-amber-950/50 shadow-md transition-all sm:p-4">
				<div className="grid grid-cols-3 text-xl font-semibold p-6 uppercase tracking-widest text-white">
					<p>Name</p>
					<p>Quantity</p>
					<p>Price</p>
				</div>
				{filteredArrayList.map((list, index) => (
					<OrderListItem
						data={list}
						key={index}
						index={index}
						handleQuantityChange={handleQuantityChange}
					/>
				))}

				<button
					onClick={() => {
						navigateTo("OrderSummary");
						localStorage.setItem("order-summary", JSON.stringify(updatedArr));
					}}
					className="m-auto mt-4 bg-amber-950 w-64 hover:scale-105 transition-all p-2 outline-none text-white rounded-full text-sm font-medium">
					Place Order
				</button>
			</div>
		</div>
	);
};

export default OrderList;
