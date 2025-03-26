import React, { useEffect, useState } from 'react'
import '../styles/components/projects.sass'
import AOS from 'aos'
import { FaGithub } from "react-icons/fa6";

const projectsData = [
    {
      img: "/projects/argon.png",
      name: "Argon Ar Condicionado",
      link: "https://argon-beryl.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/Argon",
    },
    {
      img: "/projects/doce-expresso.png",
      name: "Doce Expresso",
      link: "https://doce-expresso-ten.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/Doce_Expresso",
    },
    {
      img: "/projects/krafters.png",
      name: "Krafters",
      link: "https://krafters-alpha.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/Krafters",
    },
    {
      img: "/projects/fashion.png",
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
      img: "/projects/cadastro.png",
      name: "Login/Cadastro",
      link: "https://login-cadastro-eight.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/Login-Cadastro",
    },
    {
      img: "/projects/uscs.png",
      name: "Odontologia",
      link: "https://projeto-uscs.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/projeto__uscs",
    },
    {
      img: "/projects/todo-app.png",
      name: "To Do App",
      link: "https://todo-app-black-six-11.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/Todo",
    },
    {
      img: "/projects/travel-website.png",
      name: "Travel Website",
      link: "https://travel-website-woad-beta.vercel.app/",
      repo: "https://github.com/henriquemgoncalves/website-travel",
      
    },
    {
      img: "/projects/trip.png",
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