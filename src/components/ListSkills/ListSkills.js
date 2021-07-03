import React from 'react'
import './ListSkills.scss';

import Image from '../Image';
import { Container, Col, Row } from 'react-bootstrap';


const ListSkills = ({skills}) => {

    return (
        <Container className="list-skills">
            <Row>
                    {skills.map( (skill, index) => {
                        return(
                                    <Col className="skill" xs={3} 
                                                           md={3}  
                                                           lg={2} 
                                                           xl={1} key={index+skill.src}> 
                                        <Image fileName={skill.src} alt="skill" 
                                            classStyle="skill-img" />
                                    </Col>
                        )
                    })}
                            </Row>
        </Container>
    )
}


export default ListSkills
