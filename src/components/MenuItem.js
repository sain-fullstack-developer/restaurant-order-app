import React from "react";

const MenuItem = (props) => {
	const { data, handleSelectClick } = props;

	return (
		<div className="p-4 rounded-xl bg-white/30 h-[500px] shadow-md hover:scale-105 transition-all">
			<img
				className="w-full h-64 rounded-xl mb-2"
				src={data.image_url}
				alt={data.name}
			/>
			<h4 className="uppercase mb-2 font-bold text-lg text-amber-900 tracking-wider">
				{data.name}
			</h4>
			<p className="mb-3 font-semibold text-lg text-amber-900 tracking-wider h-28 overflow-hidden">
				{data.description}
			</p>
			<p className="mb-2 font-bold text-md text-amber-900 tracking-wider flex justify-between">
				PRICE: {data.price}rs
				<button
					onClick={handleSelectClick}
					className="bg-amber-950 hover:scale-105 p-1 px-2 outline-none text-white rounded-full text-sm font-medium">
					Select
				</button>
			</p>
		</div>
	);
};

export default MenuItem;
