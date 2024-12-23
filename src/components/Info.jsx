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
                    "Desenvolvedor Front-End em transição de carreira, com recente formação no programa 
                    Oracle Next Education (ONE) como Desenvolvedor Front-End, Programador Web no 
                    Instituto Federal do Rio Grande do Sul e cursando Análise e Desenvolvimento de 
                    Sistemas pela FMU e Santander Tech+ (Front End) pela ADA Tech. Possuo forte conhecimento em HTML, 
                    CSS, JavaScript, ReactJS e SASS, adquirido por meio de projetos acadêmicos. 
                    Busco uma oportunidade para aplicar e expandir minhas habilidades em um ambiente 
                    profissional.""
                </p>
            </div>
        </div>  
    </section>
  )
}

export default Info;