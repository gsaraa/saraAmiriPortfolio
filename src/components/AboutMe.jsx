import React from "react";

const AboutMe = () => {

	return (
		<>
            <section class="aboutSection" id="about"> 
                {/* <!-- About --> */}
                <div class="aboutImg" data-aos="fade-right">
                    {/* <img src={require('../../public/assets/me.jpg')} alt="a picture of me, Sara"></img> */}
                </div>

                <div class="aboutText" data-aos="fade-left"> 
                    <h2>
                        About me!
                    </h2>
    
                    <p>
                        Oh hello there! I am Sara and I am a front-end developer based in Toronto, Ontario. 
                    </p>

                    <p>
                        Due to my creative background in hairstyling, I have always been passionate about design and with my extensive customer service history, I am passionate about building responsive and accessible websites. My transition to tech felt very natural as I am a fast-learner and always eager to solve complex problems.
                    </p>

                    <p>
                        When I am not coding, you can find me trying new recipes 👩🏼‍🍳 , going on hikes 🥾 or trying new hairstyles on my clients 💇🏻‍♀️
                    </p>
                </div>
            </section>
        </>
	);
};

export default AboutMe;