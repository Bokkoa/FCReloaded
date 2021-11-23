import * as React from "react";

import './Skills.scss';

import { Container } from "react-bootstrap";
import ListSkills from  '../ListSkills';
import {  frontendSkills, 
          backendSkills,
          devopsSkills,
          backendColors,
          frontendColors, 
          devopsColors,
          extraSkills,
          extraColors,
} from '../../utils/skills';

const Skills = () => {

  return (
      <Container id="skills" className="skills">
            <h2>Skills</h2>
            <hr />
            <div className="skills__block">
              <h3>Frontend</h3>
              <ListSkills   data-sal="slide-up"
                            data-sal-duration="2000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            skills={frontendSkills} 
                            colors={frontendColors} />
            </div>
            <div className="skills__block">
              <h3>Backend</h3>
              <ListSkills skills={backendSkills} 
                          colors={backendColors} />
            </div>
        
            <div className="skills__block">
              <h3>Devops</h3>
              <ListSkills skills={devopsSkills} 
                          colors={devopsColors} />
            </div>

            <div className="skills__block">
              <h3>Extras</h3>
              <ListSkills skills={extraSkills} 
                          colors={extraColors} />
            </div>
      </Container>
    )
}

export default Skills;