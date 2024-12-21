import React, { useEffect } from 'react'
import '../styles/components/banner.sass'
import AOS from 'aos'

const Banner = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section 
      id='banner'
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
    >
        <div 
          className="container"
          data-aos="fade"
          data-aos-delay="1000"
          data-aos-duration="3000"
        >
            <h1>Bem vindo ao meu mundo digital!</h1>
            <p>
                "Aqui você embarca na jornada onde minhas criações ganham vida 
                e minha paixão por tecnologia se traduz em projetos."
            </p>
        </div>
    </section>
  )
}

export default Banner;