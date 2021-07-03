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
            <div className="skills__block">
              <h2>Frontend</h2>
              <ListSkills   data-sal="slide-up"
                            data-sal-duration="2000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            skills={frontendSkills} 
                            colors={frontendColors} />
            </div>
            <div className="skills__block">
              <h2>Backend</h2>
              <ListSkills skills={backendSkills} 
                          colors={backendColors} />
            </div>
        
            <div className="skills__block">
              <h2>Devops</h2>
              <ListSkills skills={devopsSkills} 
                          colors={devopsColors} />
            </div>

            <div className="skills__block">
              <h2>Extras</h2>
              <ListSkills skills={extraSkills} 
                          colors={extraColors} />
            </div>
      </Container>
    )
}

export default Skills;