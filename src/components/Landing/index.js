import React from 'react';

import Video from '../../assets/videos/video.mp4';
import {
  LandingContainer,
  LandingBg,
  VideoBg,
  LandingContent,
} from './styles';

const Landing = () => {
  return (
    <LandingContainer>
      <LandingBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </LandingBg>

      <LandingContent>
        <h1>Kattattal Gamer...</h1>
        <p>
          Three videos a week on my YouTube channel and streaming on Twitch 
          almost every day, stay tuned!
        </p>
      </LandingContent>

    </LandingContainer>
  )
}

export default Landing;
