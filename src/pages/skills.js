import * as React from "react";

import './skills.scss';

import BasicLayout from '../layouts/BasicLayout';
import { Container } from "react-bootstrap";
import ListSkills from  '../components/ListSkills';
import {  frontendSkills, 
          backendSkills,
          devopsSkills,
          backendColors,
          frontendColors, 
          devopsColors,
          extraSkills,
          extraColors,
} from '../utils/skills';


export default function Index(){

  return (
    <BasicLayout>
      <Container className="skills">
        
        <div className="skills__block">
          <h2>Frontend</h2>
          <ListSkills skills={frontendSkills} 
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
    </BasicLayout>
    )
}

