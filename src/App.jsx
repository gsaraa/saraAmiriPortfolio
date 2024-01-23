import React from "react";
import '../styles/sass/styles.scss';
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {
	return (
        <>
            <LandingPage />
            <NavBar />
            <Footer />
        </>
    )
};
export default App;
