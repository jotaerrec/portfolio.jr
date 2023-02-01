import React from "react";
import "./project.css";

const Projects = () => {
  return (
    <section className=" mx-auto max-w-7xl px-4 mt-10 md:mt-36 h-screen flex align-middle items-center flex-col">
      <div className="text-center">
        <h1 className="about stroke text-5xl mt-1.5 md:text-7xl uppercase">
          Projects
        </h1>
      </div>

      <article className="m-auto pp sm:w-9/12  w-11/12 gap-5 grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 py-24 px-10 bg-difuminado rounded-xl border  border-solid text-white border-gray-500 ">
        <div className="flex flex-col align-top gap-3">
          <h1 className="  font-bold text-2xl">
            DomoticMood <br />
            <p className="text-xs text-gray-800">2022</p>
          </h1>
          <button className="  rounded-xl p-2 text-xs bg-transparent w-max border border-gray-400 hover:bg-purple-900">
            <a href="https://publicdomoticmood.netlify.app/">
              {" "}
              Visite la pagina{" "}
            </a>
          </button>
          <p className=" text-xs text-gray-500">
            DomoticMood es un proyecto IOT que consiste en un servicio de
            domotica. <br /> En este proyecto se utilizo NodeJs+Express en el
            servidor, ReactJS en el cliente, Arduino en el microcontrolador,
            SocketIO y HTTP request para la comunicacion entre ellos.
          </p>
          <button className=" rounded-xl p-2 text-xs bg-transparent  border border-gray-400 hover:bg-purple-900">
            <a href="https://github.com/jotaerrec/DomoticMood/">
              {" "}
              Ver codigo fuente{" "}
            </a>
          </button>
        </div>
        <figure className="flex items-center justify-center">
          <img
            className=" rounded-2xl"
            src={process.env.PUBLIC_URL + "/img/domoticmood.png"}
            alt=""
            srcset=""
          />
        </figure>
      </article>
    </section>
  );
};

export default Projects;
