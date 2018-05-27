
import React from 'react';
import one from '../assets/avatars/avatar1.png';
import two from '../assets/avatars/avatar2.png';
import three from '../assets/avatars/avatar3.png';
import four from '../assets/avatars/avatar4.png';
import five from '../assets/avatars/avatar5.png';

const first = <img src={one} className="default-avatars" alt="Avatar" /> 
const second = <img src={two} className="default-avatars" alt="Avatar" /> 
const third = <img src={three} className="default-avatars" alt="Avatar" /> 
const fourth = <img src={four} className="default-avatars" alt="Avatar" /> 
const fifth = <img src={five} className="default-avatars" alt="Avatar" /> 

const avatars = [first,second,third,fourth,fifth]

export default avatars;