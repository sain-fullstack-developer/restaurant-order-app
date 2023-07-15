import React, { FC } from "react";

interface summary {
	data: { name: string; quantity: number; price: number };
	index: number;
}

const OrderSummaryItem: FC<summary> = ({ data, index }) => {
	return (
		<div className="grid grid-cols-4 text-xl font-semibold m-2 p-6 rounded-lg text-amber-950 place-items-center">
			<p>{index}</p>
			<p className="text-left">{data?.name}</p>
			<p>{data?.quantity}</p>
			<p>{data?.price}</p>
		</div>
	);
};

export default OrderSummaryItem;
