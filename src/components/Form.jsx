import React from "react";

const Form = () => {
    return (
        <>

            <div class="contactArrow arrow">
                <i class="fas fa-angle-double-down"></i>
            </div>

            <section class="contactSection" id="contact">

                <div class="wrapper">
                    {/* <!-- Contact --> */}
                    <h4>
                        Get in touch!
                    </h4>
                    <div class="formContainer">

                        <div class="formText" data-aos="zoom-in-right">
                            <p>
                                Want to build something together, inquire about something I've built or just want to chat? Feel free to reach out
                            </p>
        
                            <p>
                                I'd love to hear from you!
                            </p>

                            <div class="socials">
                                <a href="https://www.linkedin.com/in/sara-amiri-73b28421b/"><i class="fab fa-linkedin"></i></a>

                                <a href="https://github.com/gsaraa"><i class="fab fa-github"></i></a>

                                <a href="https://www.loom.com/share/221c17b8f7584244b595808610e87d07"><i class="fas fa-video"></i></a>
                                
                                
                                
                            </div>
        
                        </div>
        
                        <form id="form" name="contactForm" accept-charset="utf-8" action="https://formspree.io/f/xgerbzjw" method="post" data-aos="zoom-in-left">
                            <div class="inputs">
                                <label for="name" class="sr-only">Full Name</label>
                                <input type="text" name="name" id="name" placeholder="Your Name" required=""></input>
                                <label for="emailAddress" class="sr-only">Email Address</label>
                                <input type="email" name="email" id="emailAddress" placeholder="Your Email" required=""></input>
                            </div>

                            <label for="message" class="sr-only">Message</label>
                            <textarea name="message" id="message" placeholder="Let's chat!" required=""></textarea>

                            <button type="submit">Send Message</button>
                                {/* <!-- <input type="submit" value="Submit"> --> */}

                        </form>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Form;