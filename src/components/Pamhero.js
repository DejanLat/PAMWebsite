import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './Pamhero.css';



function HeroSection() {
    return (
        <div className='pamhero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>PrecisionArc Microscope</h1>
            <p>*Insert Phrase*</p>
            <div className='hero-btns'>
            </div>
        </div>
    )
}  

export default HeroSection

// The HeroSection component is a functional component that returns a JSX template. The template contains a div with a class of hero-container, an h1 element with the text ADVENTURE AWAITS, a p element with the text What are you waiting for?, and two buttons with the text GET STARTED and WATCH TRAILER. The WATCH TRAILER button also contains an icon element with the class far fa-play-circle.
