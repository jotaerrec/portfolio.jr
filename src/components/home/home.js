import React from 'react';
import "./home.css"
import Particles from 'react-particles-js';

function Home() {
    return (
        <div className="mx:auto">
            {/* -------------
        Home section start 
        ----------------*/}
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 18
                        },
                        "size": {
                            "value": 3
                        },
                        "color": "rgba(183,33,238,1)",
                        "line_linked": {
                            "shadow": {
                                "enable": true,
                                "color": "rgba(183,33,238,1)",
                                "blur": 1
                            }
                        }

                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    },
                    "style": {
                        "height": "100vh",
                        "width": "100vh",
                        "z-index":"-1"
                    }
                }}
                className="particles absolute h-screen w-screen"
            />
            <div className="block top-0 right-0 left-0">
                <div className=" mx-auto ">
                    <nav className="nav-pc  lg:flex flex justify-center lg:justify-around  lg:justify-items-stretch  animate__animated animate__backInDown">
                        <div className="contact lg:mt-4">
                            <div className="text-shine font-extrabold">
                                <a href="#contact" className="text-white text-3xl " >
                                    Contact <img className="w-8 inline" src="https://img.icons8.com/nolan/64/new-contact.png" alt="contact" /></a>
                        </div>

                        </div>
                        <div className="logo mt-4 lg:p-2 md:mt-auto lg:ml-4 ">
                            <a href="index.html" className="stroke text-5xl md:text-4xl" >JOTAERRE</a>
                        </div>
                        <div className="tech lg:mt-4">
                            <div className="curriculum text-shine font-extrabold">
                                <a href="https://pdfhost.io/v/4IpQwAD64_Azul_Lneas_Simple_Currculum.pdf"className="text-white text-3xl inline" >
                                    Curriculum <img className="w-8 inline" src="https://img.icons8.com/nolan/64/open-resume.png" alt="cv" />
                                </a>
                            </div>
                        </div>

                    </nav>

                    <nav className="nav-mb flex justify-center md:hidden animate__animated animate__backInDown">

                        <div className="contact-mb mx-auto ml-6 text-left text-shine font-extrabold ">
                            <a href="index.html" className="text-base " >
                                Contact </a>
                        </div>

                        <div className="curriculum-mb text-right mr-4 text-shine font-extrabold ">
                            <a href="https://pdfhost.io/v/4IpQwAD64_Azul_Lneas_Simple_Currculum.pdf"className=" text-base" >
                                Curriculum vitae </a>
                        </div>
                        <br />
                    </nav>
                </div>

                <div className="megaBox lg:grid lg:grid-cols-2 mb-auto ml-10 mx-auto  md:ml-40 lg:mb-12 lg:mt-36 animate__animated animate__fadeInLeft">
                    
                    <div className="present text-white mt-10">
                            <p className="font-bold md:font-medium md:m-auto">Hello I'm </p>
                            <div className="name-box ml-6">
                                <h2 className="name block stroke text-5xl -mb-1.5 ">Javier Rodriguez</h2>
                                <h2 className="name block text-5xl ">Javier Rodriguez</h2>
                                <h2 className="name block stroke text-5xl -mt-1.5 ">Javier Rodriguez</h2>
                            </div>
                            <p className="textpro md:ml-96 mt-2 font-black text-xl">Full Stack Developer</p>
                        </div>      
                    <div className="img-box">
                        <img className=" justify-items-center img-face md:top-auto shadow-2xl ml-3 lg:ml-14 z-40" src="https://i.imgur.com/JLg9HG7.png" alt="" />
                    </div>
                </div>

                
                <div className="patron bg-wave-pattern h-6 bg-repeat-x relative"></div>
                <hr className="separador bg-white mx-auto w-1/2 relative mt-4 h-2 md:hidden"/>

            </div>
        
            
        </div>

    )

}

export default Home;
