import * as React from "react";

import './index.scss';

import BasicLayout from '../layouts/BasicLayout';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { useNeon } from '../hooks/useNeon';

export default function Index(){


  const [ neon, setNeon] = React.useState(false)
  useNeon(neon);

  const handler = () => {
    localStorage.setItem('neon', !neon);
    setNeon( !neon );
  }

  return (
    <BasicLayout neon={neon} menuColor="rgb(20 19 33 / 78%)" handler={handler} >
      <Profile neon={neon} />
      <AboutMe neon={neon} className="animate__animated animate__fadeInDown" />
      <Projects />
      <Skills />
      
    </BasicLayout>
    )
}

