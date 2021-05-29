import * as React from "react";

import './index.scss';

import BasicLayout from '../layouts/BasicLayout';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import { useNeon } from '../hooks/useNeon';

export default function Index(){
  // let isStored = false;

  // if(typeof window !== 'undefined'){

  //   isStored = JSON.parse( localStorage.getItem('neon') );
    
  // }

  const [ neon, setNeon] = React.useState(false)
  useNeon(neon);

  const handler = () => {
    localStorage.setItem('neon', !neon);
    setNeon( !neon );
  }

  return (
    <BasicLayout neon={neon} handler={handler} >
      <Profile neon={neon} />
      <AboutMe neon={neon} className="animate__animated animate__fadeInDown" />
    </BasicLayout>
    )
}

