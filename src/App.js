import OrderList from "./pages/OrderList";
import MenuItemsList from "./pages/MenuItemsList";
import { useState } from "react";
import OrderSummary from "./pages/OrderSummary";

function App() {
	const [currentPage, setCurrentPage] = useState("MenuItemsList");

	const navigateTo = (page) => {
		setCurrentPage(page);
	};

	let pageComponent;

	switch (currentPage) {
		case "MenuItemsList":
			pageComponent = <MenuItemsList navigateTo={navigateTo} />;
			break;
		case "OrderList":
			pageComponent = <OrderList navigateTo={navigateTo} />;
			break;
		case "OrderSummary":
			pageComponent = <OrderSummary navigateTo={navigateTo} />;
			break;

		default:
			pageComponent = <MenuItemsList navigateTo={navigateTo} />;
			break;
	}

	return <main>{pageComponent}</main>;
}

export default App;
