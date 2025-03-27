import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Go Ahead! Check It Out!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-24.png'
              text='The all in one solution to scanning any inaccessible sample'
              label='PreciscionArc Microscope'
              path='/pam'
            />
            <CardItem
              src='images/img-25.png'
              text='All my smaller projects in the lab.'
              label='Institute for Quantum Computing'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-20.png'
              text='Visualizing reverse engineered NV diamond nano strucutres'
              label='Blender'
              path='/projects'
            />
            <CardItem
              src='images/img-26.png'
              text='Understanding the difference between simulation and reality'
              label='Machining'
              path='/projects'
            />
            <CardItem
              src='images/img-14.png'
              text='Check out the my project car!'
              label='Hands On'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
