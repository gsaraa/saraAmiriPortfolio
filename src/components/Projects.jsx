import React from "react";

const Projects = () => {
return (
    <>
    <div class="projectArrow arrow">
                <i class="fas fa-angle-double-down"></i>
            </div>

            <section class="projectSection" id="projects">
                {/* <!-- Projects --> */}
                <h2>
                    My Projects
                </h2>
                <div class="projectList">

                    <div class="skillsArrow arrow">
                        <i class="fas fa-angle-double-down"></i>
                    </div>

                    <div class="projectOne" data-aos="fade-right">

                        <div class="projectOneImg">
                            {/* <img src="./assets/whatDoYouNoDesktop.png" alt="a picture of What Do You No project"> */}
                        </div>

                        <div class="projectOneText">
                            <h3>
                                What Do You No?
                            </h3>
    
                            <div class="languages">
                                <ul>
                                    <li class="react">React</li>
                                    <li class="firebase">Firebase</li>
                                    <li class="api">API</li>
                                    <li class="css">css</li>
                                    <li class="html">Html</li>
                                </ul>
                            </div>

                            <p>
                                A game app that presents users with two homophones and definition and the user has to match the definition to the right word
                            </p>
    
                            <button>
                                <a href="https://github.com/whatDoYouNoProjectFour/bootcampProjectFour">GitHub</a>
                            </button>
    
                            <button>
                                <a href="https://tender-lichterman-e3d39c.netlify.app/">Live</a>
                            </button>
                        </div>
                        

                    </div>

                    <div class="projectTwo" data-aos="fade-left">

                        <div class="projectTwoImg">
                            {/* <img src="./assets/diaryDesktop.png" alt="a picture of Community Diary project"> */}
                        </div>

                        <div class="projectTwoText">
                            <h3>
                                Community Diary
                            </h3>
    
                            <div class="languages">
                                <ul>
                                    <li class="react">React</li>
                                    <li class="firebase">Firebase</li>
                                    <li class="css">css</li>
                                    <li class="html">Html</li>
                                </ul>
                            </div>
    
                            <p>
                                A diary app, where users can type in a message and share their feelings with others, react to other messages, and delete messages
                            </p>
    
                            <div class="projectLinks">
                                <button>
                                    <a href="https://github.com/gsaraa/sara-amiri-project-three">GitHub</a>
                                </button>
        
                                <button>
                                    <a href="https://stupefied-spence-218c78.netlify.app/">Live</a>
                                </button>
                            </div>
                        </div>
                        
                    </div>

                    <div class="projectThree" data-aos="fade-right">

                        <div class="projectThreeImg">
                            {/* <img src="./assets/movieAppDesktop.png" alt="a picture of Movie App project"> */}
                        </div>

                        <div class="projectThreeText">
                            <h3>
                                Movie App
                            </h3>
    
                            <div class="languages">
                                <ul>
                                    <li class="js">javascript</li>
                                    <li class="api">API</li>
                                    <li class="sass">Sass</li>
                                    <li class="html">Html</li>
                                </ul>
                            </div>
    
                            <p>
                                Movie generator app, generates movie based on user choice of genre, year or cast 
                            </p>
                            
                            <button>
                                <a href="https://github.com/bootcampProjectTwo/movieApp">GitHub</a>
                            </button>
    
                            <button>
                                <a href="https://bootcampprojecttwo.github.io/movieApp/">Live</a>
                            </button>
                        </div>

                    </div>

                    <div class="projectFour" data-aos="fade-left">

                        <div class="projectFourImg">
                            {/* <img src="./assets/plantedDesktop.png" alt="a picture of Planted project"> */}
                        </div>
                        
                        <div class="projectFourText">
                            <h3>
                                Planted
                            </h3>
    
                            <div class="languages">
                                <ul>
                                    <li class="sass">sass</li>
                                    <li class="html">Html</li>
                                </ul>
                            </div>
    
                            <p>
                                Multi-page PSD conversion made using a client brief and design files. Responsive across all devices
                            </p>
                            
                            <div class="projectLinks">
                                <button>
                                    <a href="https://github.com/gsaraa/saraAmiriProjectOne">GitHub</a>
                                </button>
                                
                                <button>
                                    <a href="https://gsaraa.github.io/saraAmiriProjectOne/">Live</a>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
    </>
);
}

export default Projects;