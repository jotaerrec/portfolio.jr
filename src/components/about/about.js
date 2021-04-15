import React from 'react';
import './about.css'

function About() {
    return (
 
        <div className="block mt-10 md:mt-36">
            <section className=" mx-auto max-w-7xl px-4">
                <div className="text-center">
                    <h1 className="about stroke text-5xl mt-1.5 md:text-7xl uppercase">About Me</h1>
                </div>
                <div className="grid grid-cols-2 md:ml-16 mt-16 md:mt-4">
                    <div className="text-left  lg:ml-20 lg:relative">
                        <h1 className="skills block stroke shineskill text-3xl md:text-5xl -mb-2.5">SKILLS :</h1>
                        <h1 className="skills block text-white text-3xl md:text-5xl ">SKILLS :</h1>
                        <h1 className="skills block stroke shineskill text-3xl -mt-2.5 md:text-5xl  ">SKILLS :</h1>
                    </div>

                    <div className="text-left md:-ml-28">
                        <div className="shine">
                            <h1 className="skills bshadow block stroke text-2xl md:text-5xl">HTML</h1>
                        </div>
                        <div className="shine">
                            <h1 className="skills bshadow block stroke text-2xl md:text-5xl">CSS</h1>
                        </div>
                        <div className="shine">
                            <h1 className="skills bshadow block stroke text-2xl md:text-5xl">GIT</h1>
                        </div>
                        <div className="shine">
                            <h1 className="skills bshadow block stroke text-2xl md:text-5xl">NODEJS</h1>
                        </div>
                        <div className="shine">
                            <h1 className="skills bshadow block stroke text-2xl md:text-5xl">REACTJS</h1>
                        </div>
                        <div className="shine">
                            <h1 className="skills bshadow block stroke text-2xl md:text-5xl">JAVASCRIPT</h1>
                        </div>
                        <div className="shine">
                            <h1 className="skills bshadow block stroke text-2xl md:text-5xl">JAVA</h1>
                        </div>
                        <div className="shine">
                            <h1 className="skills bshadow block stroke text-2xl md:text-5xl">MYSQL</h1>
                        </div>
                        <div className="shine">
                            <h1 className="skills bshadow block stroke text-2xl md:text-5xl">MONGODB</h1>
                        </div>    
                    </div>

                </div>
            </section>

            <section id="contact" className="mx-auto ml- mt-14 md:mt-7">
                <div className="">
                    <div className="mt-3">
                        <h3 className="contact-text text-center text font-normal text-base">Want to colaborate? Contact me:</h3>
                    </div>
                    <div className="ml-0 mr-0 text-center">
                        <a href="mailto:javi.r49915@gmail.com?" className="inline-flex"><img src="https://img.icons8.com/nolan/64/gmail.png" alt="gmail icon"/></a>
                        <a href="https://github.com/jotaerrec" className="inline-flex"><img src="https://img.icons8.com/nolan/64/github.png" alt="github icon"/></a>
                        <a href="https://www.instagram.com/javi.jpg_/" className="inline-flex"><img src="https://img.icons8.com/nolan/64/instagram-new.png" alt="instagram icon" /></a>
                        <a href="https:www.linkedin.com/in/jotaerrec" className="inline-flex"><img src="https://img.icons8.com/nolan/64/linkedin.png" alt="linkedin icon"/></a>
                    </div>
                </div>
            </section>

            <div className="patron bg-wave-pattern h-3 bg-repeat-x relative -mt-20"></div>
            <hr className="separador bg-white mx-auto w-1/2 relative mt-8 h-2 md:hidden" />

        </div>


    )
}

export default About;