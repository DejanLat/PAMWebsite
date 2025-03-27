import React from 'react';
import './Aboutmecards.css';
import CardItem from './CardItem';

function Aboutmecards() {
  return (
    <div className='aboutmecards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='aboutmecards__container'>
        <div className='aboutmecards__wrapper'>
          <ul className='aboutmecards__items'>
            <CardItem
              src='images/img-11.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
            />
            <CardItem
              src='images/img-12.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Aboutmecards;
