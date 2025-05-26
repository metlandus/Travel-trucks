import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import Catalog from "../pages/Catalog";
import VanDetailPage from "../pages/VanDetailsPage";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/homepage" element={<Homepage />} />
			<Route path="/catalog" element={<Catalog />} />
			<Route path="/van/:id" element={<VanDetailPage />} />
		</Routes>
	);
}

export default AppRoutes;
