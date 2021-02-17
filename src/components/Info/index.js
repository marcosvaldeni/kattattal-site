import React from 'react';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img
} from './styles';
import { Button } from '../Button/styles';

const Info = ({ 
  id,
  lightBg,
  imgStart,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  topLine,
  primary
}) => {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>
                  {headline}
                </Heading>
                <Subtitle darkText={darkText}>
                  {description}
                </Subtitle>
                <BtnWrap>
                  <Button 
                    to="#" 
                    color={'#01bf71'}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                  > {buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info;
