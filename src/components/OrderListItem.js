import React, { useState } from "react";

const OrderListItem = ({ filteredArrayList }) => {
	const [option, setOption] = useState(1);
	const [quantityPrice, setQuantityPrice] = useState(0);

	// const totalPrice = quantityPrice.reduce((accumulator, currentValue) => {
	// 	console.log(accumulator);
	// 	console.log(currentValue);
	// 	return accumulator + currentValue;
	// }, 0);
	return (
		<div>
			{filteredArrayList?.map((list, index) => {
				let array = [];
				const price = list.price * option;
				array.push(price);

				console.log(array);
				console.log(
					array.reduce((accumilator, currentValue) => {
						return accumilator + currentValue;
					})
				);
				return (
					<div className="grid grid-cols-3 gap-y-2 sm:grid-cols-3 text-xl font-semibold bg-white/30 m-2 p-6 rounded-lg text-amber-950">
						<p className="text-left">{list.name}</p>
						<select
							onChange={(evt) => {
								setOption(evt.target.value);
							}}
							className="w-1/2 m-auto outline-none bg-white/30 rounded-md px-1">
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((list, index) => (
								<option key={index}>{list}</option>
							))}
						</select>
						<p>{price}</p>
					</div>
				);
			})}
			<p className="font-bold text-xl">Total Amount: </p>
		</div>
	);
};

export default OrderListItem;
