import Header from "./components/Header";
import AppRoutes from "./routes/approutes";

function App() {
	return (
		<div className="overflow-hidden">
			<Header />
			<AppRoutes />
		</div>
	);
}

export default App;
