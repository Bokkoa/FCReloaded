import React from 'react'

import { Button, Container } from 'react-bootstrap';
import CV from '../../downloads/CV2021.pdf';
import './AboutMe.scss';

const AboutMe = ({neon}) => {
    return (
        <Container className={ neon ? 'about-me__neon animate__fadeInUp animate__animated' 
                                    : 'about-me animate__fadeInUp animate__animated'}>
            <p>
                Ingeniero informático, desarrollador fullstack con 2 años de experiencia, he gestionado equipos pequeños y 
                utilizado variedad de tecnologías, ¡Nunca se para de aprender!.
            </p>
            <hr />

            <a href={CV} target="_blank" rel="noopener noreferrer">
                <Button>
                    Descargar CV
                </Button>
            </a>
        </Container>
    )
}

export default AboutMe
