import React, { useState } from "react";
import "./styles/Dashboard.css";
import { Link } from "react-router-dom";

export const Dashboard = () => {
	const [cities, setCities] = useState([]);
	const [loading, setLoading] = useState(false);
	const findCities = (e) => {
		setLoading(true);
		setTimeout(() => {
			if (e.target.value && e.target.value !== "") {
				fetch("https://mocki.io/v1/098c22ff-1f64-42f6-942b-f4150908e706")
					.then((response) => response.json())
					.then((data) => {
						setLoading(false);
						setCities(data.cities);
						filterCities(e.target.value, data.cities);
					})
					.catch((err) => {
						console.log("Error occurred while searching for cities: " + err);
						setLoading(false);
						setCities([]);
					});
			} else {
				setLoading(false);
				setCities([]);
			}
		}, 1000);
	};

	const filterCities = (searchKey, cities) => {
		if (searchKey && searchKey !== "" && cities && cities.length !== 0) {
			const result = cities.filter((city) => {
				if (city.toLowerCase().includes(searchKey.toLowerCase())) {
					return city;
				}
			});
			setCities(result);
		}
	};

	const getCitiesList = () => {
		if (cities && cities.length !== 0) {
			const listOfCities = cities.map((city) => (
				<li key={city} className="city">
					{city}
				</li>
			));
			return <ul className="cityList">{listOfCities}</ul>;
		}
	};
	return (
		<section className="dashboard">
			<h2 className="heading">React.js Playground</h2>
			<div className="navigation">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
			<div>
				<input type="text" placeholder="Search cities" onChange={findCities} className="searchBar"></input>
				{loading ? <div>Loading...</div> : getCitiesList()}
			</div>
		</section>
	);
};
