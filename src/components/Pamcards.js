import React from 'react';
import './Pamcards.css';
import CardItem from './CardItem';

function Pamcards() {
  return (
    <div className='pamcards'>
      <h1>Check out these EPIC Destinations!</h1>
        <p>efw</p>
        <p>efw</p>
        <p>efw</p>
        <p>efw</p>
        <p>efw</p>
      <div className='pamcards__container'>
        <div className='pamcards__wrapper'>
          <ul className='pamcards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pamcards;
