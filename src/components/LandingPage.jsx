import React from "react";

import me from "../../public/assets/me2.png";

const LandingPage = () => {
	return (
		<div class="header">
			<div class="aboutImg">
				<img src={me} alt="A photo of Sara Amiri" />
			</div>
			<div class="wrapper title">
				<h1 data-aos="zoom-in-right" data-aos-duration="800">
					Sara Amiri
				</h1>

				<p
					class="developer"
					data-aos="zoom-in-left"
					data-aos-duration="800">
					Front-end Developer
				</p>
			</div>
		</div>
	);
};

export default LandingPage;
