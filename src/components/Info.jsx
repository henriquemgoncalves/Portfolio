import React, { useEffect } from 'react'
import '../styles/components/info.sass'
import AOS from 'aos'

const Info = () => {

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <section id='info'>
        <div className="container">
            <div 
                className="perfil"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                <img src='/img/eu.png' alt='minha foto'/>
                <h2>Henrique M. Gonçalves</h2>
            </div>
            <div 
                className="text"
                data-aos="fade-left"
                data-aos-duration="2000"
                // data-aos-delay="1000"
            >
                <p>
                    "Atuar como Desenvolvedor Front-End, contribuindo com minha 
                    paixão por tecnologia e minhas habilidades técnicas para criar 
                    interfaces de usuário modernas e responsivas. Estou determinado 
                    a crescer na área, aprender com novos desafios e colaborar em 
                    projetos inovadores que proporcionem experiências digitais impactantes."
                </p>
            </div>
        </div>  
    </section>
  )
}

export default Info;