import React from 'react';

import { Button } from './Button';
import photo from '../../images/bg.jpg';

import Jumbotron from './Jumbotron';

function HeroSection() {
  
  return (
    <div className='hero-container'>
      <img src={photo} alt="FightStop" />
      <div className='slider_text'>
        <Jumbotron text={['FightStop', 'Yolculuğa hazır mısın ?', 'Seni bekliyoruz.', 'Sınırlarına meydan oku!']} />
      </div>

      <div className='button_position'>
        <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            İLETİŞİM
          </Button>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >
            ÇOK YAKINDA... <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
