import React from 'react';
import './style.css';
import Logo from '../logo';
import Navbar from '../Navbar';
import Card from '../UI/Card';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
        <Card>
            <div style={{ padding: '50px 0'  }}>
            <Logo />
            </div>
            <Navbar />
        </Card>
    </div>
   )

 }

export default Hero;