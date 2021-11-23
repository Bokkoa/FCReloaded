import * as React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import projects from '../../utils/projects';
import ModalProject from '../ModalProject';
import 'animate.css';
import './Projects.scss';

const Projects = () => {
    return (
            <Container id="projects" className="projects">
                <h1>Proyectos</h1>
                <hr/>
                <Row>
                    {projects.map( (project, index) => (
                    <Col key={index} xs={12} sm={6} md={6} lg={4} xl={4} className="project">
                        <Card>
                            <div className="image" style={{backgroundImage: `url("${project.image}")`}}>
                                
                            </div>

                            <Card.Body>
                                <Card.Title>
                                    {project.title}
                                </Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <hr />
                                <Card.Subtitle>
                                    Heramientas utilizadas
                                </Card.Subtitle>
                                <Card.Text className="tools">
                                    {project.tools.map( tool => (

                                        <span className="chip">
                                            {tool}
                                        </span>
                                        
                                    ))}
                                </Card.Text>
                                <Card.Footer>
                                    {project.url.length > 0 &&
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <Button > 
                                            Ver proyecto
                                        </Button>
                                    </a>
                                    }
                                    <ModalProject name={project.name} album={project.album} />
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                    
                </Row>
            </Container>
    )
}

export default Projects
