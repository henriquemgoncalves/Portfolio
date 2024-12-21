import React, { useEffect, useState } from 'react'
import '../styles/components/projects.sass'
import AOS from 'aos'
import { FaGithub } from "react-icons/fa6";

const projectsData = [
    {
      img: "/projects/hmg-fashion.png",
      name: "HMG Fashion Collection",
      link: "https://hmg-fashion-collection.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/HMGFashion",
    },
    {
      img: "/projects/hmg-play.png",
      name: "HMG Play",
      link: "https://hmg-play-net.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/HMG_Play-NetFlix-clone-",
    },
    {
      img: "/projects/login.png",
      name: "Login/Cadastro",
      link: "https://login-cadastro-eight.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/Login-Cadastro",
    },
    {
      img: "/projects/mario-game.png",
      name: "Mario Game",
      link: "https://mario-bros-game-two.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/MarioBros_game",
    },
    {
      img: "/projects/numero.png",
      name: "Numero Secreto",
      link: "https://secret-number-taupe.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/secret-number",
    },
    {
      img: "/projects/odonto.png",
      name: "Odontologia",
      link: "https://projeto-uscs.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/projeto__uscs",
    },
    {
      img: "/projects/petshow.png",
      name: "PetShow",
      link: "https://pet-show-mu.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/pet-show",
    },
    {
      img: "/projects/rick_and_morty.png",
      name: "Rick and Morty",
      link: "https://rick-and-morty-nine-green.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/Rick_And_Morty",
    },
    {
      img: "/projects/todo.png",
      name: "To Do App",
      link: "https://todo-app-black-six-11.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/Todo",
    },
    {
      img: "/projects/travel.png",
      name: "Travel Website",
      link: "https://travel-website-woad-beta.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/website-travel",
      
    },
    {
      img: "/projects/tripquest.png",
      name: "TripQuest",
      link: "https://tourist-web.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/tourist_react-sass",
    },
    
]

const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init();
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex === projectsData.length - 1 ? 0:prevIndex + 1);
    }, 4000);

    return() => clearInterval(interval);
  },[]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id='carousel'
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1>Projetos</h1>
      {/* <h1>Projetos</h1> */}
      <div className="carousel-images">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
          >
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                <img src={project.img} alt={`Projeto ${index}`}/>
              </a>
          </div>    
        ))}
      </div>

      <div className="project-cards">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              <img src={project.img} alt={project.name}/>
            </a>
            <div className="info">
              <h4>{project.name}</h4>
              <a 
                href={project.repo}
                target='_blank'
                rel='noopener noreferrer'
                className='repo-link'
              >
                <FaGithub/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;