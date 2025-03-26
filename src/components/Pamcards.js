import React from 'react';
import './Pamcards.css';
import CardItem from './CardItem';

function Pamcards() {
  return (
    <div className='pamcards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='pamcards__container'>
        <div className='pamcards__wrapper'>
          <ul className='pamcards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/projects'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pamcards;
