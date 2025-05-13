import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import Catalog from "../pages/Catalog";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/homepage" element={<Homepage />} />
			<Route path="/catalog" element={<Catalog />} />
		</Routes>
	);
}

export default AppRoutes;
