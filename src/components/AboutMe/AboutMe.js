import React from 'react'

import { Button, Container } from 'react-bootstrap';
import CV from '../../downloads/CV2021.pdf';
import './AboutMe.scss';

const AboutMe = ({neon}) => {
    return (
        <Container className={ neon ? 'about-me__neon' : 'about-me'}>
            <p>
                Ingeniero informático, desarrollador fullstack con 2 años de experiencia, he gestionado equipos pequeños y 
                utilizado variedad de tecnologías, ¡nunca se para de aprender!.
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
