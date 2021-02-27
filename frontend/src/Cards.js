import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Cards() {
  return (
    <div className='cards'>
      <h2>Popular Topics</h2>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem 
                src='C:\Users\Tharushi Bhagya\Desktop\help_surpport\Stock\Capture.PNG'
            />
          </ul>
        </div>
      </div>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem 
                src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3MMAPTxUFDQlzMh9ode5Ce&ust=1610121967276000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCMCfyPGZiu4CFQAAAAAdAAAAABAD'
                text='payment'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;