import React from 'react'
import loadable from '@loadable/component';
import './ListSkills.scss';
// import SkillBar from 'react-skills-bars';
// wait for window component

import Image from '../Extras/Image';
import { Container, Col, Row } from 'react-bootstrap';

const SkillBar = loadable( () => import("react-skills-bars") );

const ListSkills = ({skills, colors}) => {

    return (
        <Container className="list-skills animate__animated animate__fadeInLeft">
            <Row>
                    {skills.map( (skill, index) => {
                        return(
                                <>
                                    <Col xs={1} key={index}> 
                                        <Image fileName={skill.src} alt="skill" classStyle="skill-img" />
                                    </Col>
                                    <Col xs={11} lg={5}>
                                        <SkillBar key={index} skills={[{type: skill.type, level: skill.level}]} colors={colors} animationDuration={700} />
                                    </Col>
                                </>
                        )
                    })}
                            </Row>
        </Container>
    )
}


export default ListSkills
