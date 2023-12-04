import React from "react";

const NavBar = () => {

	return (
		<>
            <nav>
                <div class="openNav"><i class="fas fa-bars"></i></div>

                <ul class="navigationBar">
                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#skills">Skills</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>

                    {/* <li class="closeNav"><i class="fas fa-times"></i></li> */}
                </ul>

            </nav>
        </>
	);
};

export default NavBar;