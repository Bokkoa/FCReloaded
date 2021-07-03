import React from 'react';
import { Link } from 'gatsby';
// import { Link, animateScroll as scroll } from "react-scroll";
import { Button, Container, Image } from 'react-bootstrap';
import Neon from '../../images/neon.png';
import './Menu.scss';

const Menu = ({menuColor, neon, handler}) => {
    
    return (
        <header className={neon ? 'menu__neon animate__animated animate__fadeIn' 
                                : 'menu animate__animated animate__fadeIn'} style={{ backgroundColor: menuColor || "transparent"}}>
            <Container>
                <ul>
                    <li>
                        <Link   spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} 
                                activeClass="active" to="/#start">Inicio</Link>
                    </li>
                    <li>
                        <Link  to="/#projects">Proyectos</Link>
                    </li>
                    <li>
                        <Link  to="/#skills">Skills</Link>
                    </li>
                    <li>
                        <Button onClick={handler} >
                            <Image  
                                src={Neon} 
                                className="neon-button animate__animated animate__pulse animate__infinite" />
                        </Button>
                    </li>
                  
                </ul>
            </Container>
        </header>
    )
}

export default Menu
