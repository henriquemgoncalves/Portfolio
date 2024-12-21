import React, { useEffect } from 'react'
import '../styles/components/slider.sass'
import AOS from 'aos'

const Slider = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section 
      id='slider'
      data-aos="fade"
      data-aos-duration="2000"
    >
        {/* <h3>Skills</h3> */}
        <div 
          className="list">
            <div className="item"><img src="/skills/html.png" alt="logo html" /></div>
            <div className="item"><img src="/skills/css.png" alt="logo css" /></div>
            <div className="item"><img src="/skills/js.png" alt="logo js" /></div>
            <div className="item"><img src="/skills/react.png" alt="logo reactjs" /></div>
            <div className="item"><img src="/skills/sass.png" alt="logo sass" /></div>
            <div className="item"><img src="/skills/sql.png" alt="logo mysql" /></div>
        </div>
    </section>
  )
}

export default Slider;