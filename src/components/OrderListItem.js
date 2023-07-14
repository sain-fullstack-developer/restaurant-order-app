import React, { useState } from "react";

const OrderListItem = ({ data, handleQuantityChange, index }) => {
	const [option, setOption] = useState(1);

	return (
		<div className="grid grid-cols-3 gap-y-2 sm:grid-cols-3 text-xl font-semibold bg-white/30 m-2 p-6 rounded-lg text-amber-950">
			<p className="text-left">{data.name}</p>
			<select
				onChange={(evt) => {
					handleQuantityChange(index, parseInt(evt.target.value), data);
					setOption(evt.target.value);
				}}
				className="w-1/2 m-auto outline-none bg-white/30 rounded-md px-1">
				{["Select", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
					(list, i) => (
						<option key={i}>{list}</option>
					)
				)}
			</select>
			<p className="bg-transparent border-none outline-none text-center">
				{data.price * option}
			</p>
		</div>
	);
};

export default OrderListItem;
