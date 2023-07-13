import { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "../components/MenuItem";

function MenuItemsList({ navigateTo }) {
	const [data, setData] = useState([]);
	const [selectAll, setSelectAll] = useState(false);

	useEffect(() => {
		async function fetchApiData() {
			const response = await axios.get(
				"http://localhost:5500/restaurant/dishes"
			);
			return setData(response.data);
		}
		fetchApiData();
	}, []);

	console.log("data", data);

	const localData = JSON.parse(localStorage.getItem("order-list"));

	return (
		<div className="bg-green-400 text-white min-h-screen p-4 relative">
			<h1 className="text-3xl sm:text-4xl md:text-6xl uppercase text-center text-amber-950 mb-8">
				The Garden of Eat'n Restaurant
			</h1>
			<h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
				Menu List
			</h2>
			<div className="grid grid-col-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-14">
				{data.map((list, index) => {
					return (
						<MenuItem
							key={index}
							data={list}
							handleSelectClick={async () => {
								let orderList = JSON.parse(localStorage.getItem("order-list"));
								if (!orderList) {
									orderList = [];
								}
								const orderListId = orderList.map((list, id) => list.id);
								console.log(orderListId);
								orderList.push(list);
								localStorage.setItem("order-list", JSON.stringify(orderList));
								setSelectAll(true);
							}}
						/>
					);
				})}
			</div>
			{selectAll && (
				<button
					onClick={() => {
						navigateTo("OrderList");
					}}
					className="bg-amber-950 fixed top-24 right-4 hover:scale-105 p-1 px-2 outline-none text-white rounded-full text-sm font-medium">
					{`View Selected Items`}
				</button>
			)}
		</div>
	);
}

export default MenuItemsList;
