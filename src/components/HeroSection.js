import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                     GET STARTED
                 </Button>
                 <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                     WATCH TRAILER <i className='far fa-play-circle' /> 
                     
                 </Button>
            </div>
        </div>
    );
}  

export default HeroSection;

// The HeroSection component is a functional component that returns a JSX template. The template contains a div with a class of hero-container, an h1 element with the text ADVENTURE AWAITS, a p element with the text What are you waiting for?, and two buttons with the text GET STARTED and WATCH TRAILER. The WATCH TRAILER button also contains an icon element with the class far fa-play-circle.
