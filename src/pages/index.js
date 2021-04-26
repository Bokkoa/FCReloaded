import * as React from "react";

import './index.scss';

import BasicLayout from '../layouts/BasicLayout';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import { useNeon } from '../hooks/useNeon';

export default function Index(){

  const isStored = JSON.parse( localStorage.getItem('neon') );
  const [ neon, setNeon] = React.useState(isStored)
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

