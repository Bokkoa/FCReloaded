import * as React from "react";
import './projects.scss';
import BasicLayout from '../layouts/BasicLayout';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import projects from '../utils/projects';

export default function Index(){
  return (
    <BasicLayout menuColor="#141321">
        <Container className="projects">
            <h1>Proyectos</h1>
            <hr/>
            <Row>
              {projects.map( (project, index) => (
                <Col key={index} xs={12} sm={4} className="project">
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
                        <Card.Footer>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <Button variant="primary"> 
                                    Ver proyecto
                                </Button>
                            </a>
                        </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
                
            </Row>
        </Container>
    </BasicLayout>
    )
}

