import React, { useState } from 'react';

import Video from '../../assets/videos/video.mp4';
import { Button } from '../Button/styles';
import {
  LandingContainer,
  LandingBg,
  VideoBg,
  LandingContent,
  BtnWrapper,
  ArrowForward,
  ArrowRight,
} from './styles';

const Landing = () => {
  const [hover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover(!hover);
  }

  return (
    <LandingContainer>
      <LandingBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </LandingBg>

      <LandingContent>
        <h1>Kattattal Gamer...</h1>
        <p>
          Two videos a week on my YouTube channel and streaming on Twitch 
          almost every day, stay tuned!
        </p>
        <BtnWrapper>
          <Button 
            to="signup" 
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
            color={'#9147FF'}
            dark={false}
          >
            Twitch {hover ? <ArrowForward /> : <ArrowRight/> }
          </Button>

          <Button 
            to="signup" 
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
            color={'#FF0000'}
            dark={false}
          >
            YouTube {hover ? <ArrowForward /> : <ArrowRight/> }
          </Button>
        </BtnWrapper>
      </LandingContent>

    </LandingContainer>
  )
}

export default Landing;
