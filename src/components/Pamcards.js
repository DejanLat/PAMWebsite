import React from 'react';
import './Pamcards.css';
import CardItem from './CardItem';

function Pamcards() {
  return (
    <div className='pamcards'>
      <h1>See the Full History of PAM Below!</h1>

      {/* New Section with Image on Left & Text on Right */}
      <div className="pamcards__info">
        <img src="images/img-9.jpg" alt="Example" className="pamcards__image" />
        <p className="pamcards__text">
          This is an example of how you can wrap text around an image. You can
          write a description here and add more details if needed.
        </p>
      </div>
      <div className="pamcards__info">
        <a href="pdfs/paper1.pdf" target="_blank">  
          <img src="images/img-9.jpg" alt="Example" className="pamcards__image" />
        </a>
        <p className="pamcards__text">
          This is an example of how you can wrap text around an image. You can
          write a description here and add more details if needed.
        </p>
        
      </div>
      <div className="pamcards__info">
        <img src="images/img-9.jpg" alt="Example" className="pamcards__image" />
        <p className="pamcards__text">
          This is an example of how you can wrap text around an image. You can
          write a description here and add more details if needed.
        </p>
      </div>

      {/* <div className='pamcards__container'>
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
      </div> */}
    </div>
  );
}

export default Pamcards;
