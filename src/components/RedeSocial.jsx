import React, { useEffect } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import '../styles/components/redesocial.sass'
import AOS from 'aos'

const RedeSocial = () => {

  useEffect(() => {
      AOS.init();
    }, []);

  return (
    <section id='social'>
        <div className="content">
            <a 
              href="https://www.linkedin.com/in/henrique-madruga-gonçalves-044a072aa" 
              target='_blank'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://www.github.com/henriquemgoncalves" 
              target='_blank'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <FaGithub/>
            </a>
            <a 
              href="https://wa.me/5511940007976" 
              target='_blank'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <FaWhatsapp/>
            </a>
        </div>
    </section>
  )
}

export default RedeSocial;