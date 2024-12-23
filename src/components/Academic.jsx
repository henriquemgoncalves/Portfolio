import React, { useEffect } from 'react'
import '../styles/components/academic.sass'
import AOS from 'aos'

const cursos = [
    {id: 1, img: "/img/ada.png", title: "ADA Tech + Santander", description: "Santander Tech+ - Front End"},
    {id: 2, img: "/img/fmu.png", title: "FMU", description: "Análise e Desenvolvimento de Sistemas"},
    {id: 3, img: "/img/ifrs.png", title: "IFRS - Instituto Federal Rio Grande do Sul", description: "Programador Web"},
    {id: 4, img: "/img/one.png", title: "Alura + Oracle", description: "ONE - Oracle Next Education"},
]

const Academic = () => {

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <section id='academic'>
        <h1>Formação</h1>
        <div 
            className="container"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            {/* <h2>Formação</h2> */}
            <div className="content-cards">
                {cursos.map((card) => (
                    <div className="card" key={card.id}>
                        <img src={card.img} alt={card.title}/>
                        <h3>{card.description}</h3>
                        <h4>{card.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Academic;