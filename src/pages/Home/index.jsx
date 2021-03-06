import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import UrlShortener from "./components/UrlShortener";

const Home = () => {
	return (
		<div>
			<Header />
			<UrlShortener />
			<Statistics />
			<Footer />
		</div>
	);
};

export default Home;
