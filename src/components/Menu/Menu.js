import React from 'react';
import { Link } from 'gatsby';
import { Button, Container, Image } from 'react-bootstrap';
import Neon from '../../images/neon.png';
import './Menu.scss';

const Menu = ({menuColor, neon, handler}) => {
    return (
        <header className={neon ? 'menu__neon' : 'menu'} style={{ backgroundColor: menuColor || "transparent"}}>
            <Container>
                <ul>
                    <li>
                        <Link  to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link  to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link  to="/projects">Projects</Link>
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
