import React from "react";

import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Form from "./Form";

const LandingPage = () => {
	// useEffect(() => {
	// 	AOS.init();
	// }, []);

	return (
		<div class="wrapper">
			<h1 data-aos="zoom-in-right" data-aos-duration="800">
				Sara Amiri
			</h1>

			<p
				class="developer"
				data-aos="zoom-in-left"
				data-aos-duration="800">
				Front-end Developer
			</p>

			<NavBar />
			<AboutMe />
			<Projects />
			<Skills />
			<Form />
		</div>
	);
};

export default LandingPage;
