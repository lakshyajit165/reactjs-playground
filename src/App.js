import React from "react";
import "./App.css";
import { Dashboard } from "./components/dashboard/Dashboard";
import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Admin } from "./components/admin/Admin";

const PrivateRoute = ({ isAdmin, redirectPath = "/" }) => {
	if (!isAdmin) {
		return <Navigate to={redirectPath} replace />;
	}

	return <Outlet />;
};

function App() {
	const isAdmin = false;
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />

					<Route element={<PrivateRoute isAdmin={isAdmin} />}>
						<Route path="/admin" element={<Admin />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
/**
 * what are hooks?
 * Example of hooks like useEffect and useMemo
 * Difference between functional and class based components
 * what is context api?
 * how to setup routing in react?
 * how to setup private route? - https://www.robinwieruch.de/react-router-private-routes/
 * What is virtual dom and it's working ? How is different from actual DOM?
 * React uses diffing algorithm to update the virtual DOM
 * how to setup a react application without create-react-app
 * Difference between package.json and package-lock.json
 * Entry point of a react application.
 * What is prop drilling?
 * How to pass state down to child component?
 * How to lift state up from child to parent component
 *
 */

export default App;
