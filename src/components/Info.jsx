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
                    "Desenvolvedor Front-End apaixonado por tecnologia e interfaces modernas, 
                    com formação sólida e experiência acadêmica em HTML, CSS, JavaScript, ReactJS e SASS.
                    Em transição de carreira, busco transformar desafios em soluções criativas, contribuindo 
                    para projetos inovadores e experiências digitais impactantes."
                </p>
            </div>
        </div>  
    </section>
  )
}

export default Info;