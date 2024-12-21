import React, { useEffect, useState } from 'react'
import '../styles/components/navbar.sass'
import { CgMenuRightAlt, CgClose } from "react-icons/cg"

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#info');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (section) => {
        setActiveLink(section);
        setMenuOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
            (entries) => {
                if(entries.forEach((entry) => {
                    setActiveLink(`#${entry.target.id}`);
                }
            ));
            },
            { threshold: 0.6 }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

  return (
    <header id='navbar'>
        <div className="navbar-desktop">
           <nav className='links'>
                <ul>
                    <li>
                        <a 
                            className={activeLink === '#info' ? 'active' : ''} 
                            onClick={() => handleLinkClick('#info')} 
                            href="#info"
                        >
                            Sobre Mim
                        </a>
                    </li>
                    <li>
                        <a 
                            className={activeLink === '#carousel' ? 'active' : ''} 
                            onClick={() => handleLinkClick('#carousel')} 
                            href="#carousel"
                        >
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a 
                            className={activeLink === '#academic' ? 'active' : ''} 
                            onClick={() => handleLinkClick('#academic')} 
                            href="#academic"
                        >
                            Formação
                        </a>
                    </li>
                    <li>
                        <a 
                            className={activeLink === '#form' ? 'active' : ''} 
                            onClick={() => handleLinkClick('#form')} 
                            href="#form"
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </nav> 
        </div>

        <div className="navbar-mobile">
            <img src='/img/hmg.png' alt='logo hmg'/>
            
            <button className='menu-btn' onClick={toggleMenu}>
                {menuOpen ? <CgClose/> : <CgMenuRightAlt/>}
            </button>

            <nav className={`links-mobile ${menuOpen ? 'open' : ""}`}>
                <ul>
                    <li>
                        <a 
                            className={activeLink === '#info' ? 'active' : ''} 
                            onClick={() => handleLinkClick('#info')} 
                            href="#info"
                        >
                            Sobre Mim
                        </a>
                    </li>
                    <li>
                        <a 
                            className={activeLink === '#carousel' ? 'active' : ''} 
                            onClick={() => handleLinkClick('#carousel')} 
                            href="#carousel"
                        >
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a 
                            className={activeLink === '#academic' ? 'active' : ''} 
                            onClick={() => handleLinkClick('#academic')} 
                            href="#academic"
                        >
                            Formação
                        </a>
                    </li>
                    <li>
                        <a 
                            className={activeLink === '#form' ? 'active' : ''} 
                            onClick={() => handleLinkClick('#form')} 
                            href="#form"
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </nav> 
        </div>
        
    </header>
  )
}

export default NavBar;