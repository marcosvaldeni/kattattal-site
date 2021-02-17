import React from 'react';

import { 
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitch,
 } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialIcons,
  SocialIconLink,
  FooterContant
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContant>
        <SocialIcons>
          <SocialIconLink href="https://www.youtube.com/channel/UC-nydveka-aOH8AsA08HWQA" target="_blank" aria-label="YouTube">
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink href="https://www.twitch.tv/kattattal" target="_blank" aria-label="Twitch">
            <FaTwitch />
          </SocialIconLink>
          <SocialIconLink href="" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
        </SocialIcons>
        <FooterWrap>
          <h2>Kattattal</h2>
          <p>
            Kattattal 2021 🖖 Designed and Developed By 
            <a href="https://github.com/marcosvaldeni" target="_blank" rel="noreferrer" >
              <strong> Marcos Valdeni Lucas</strong>
            </a>
          </p>
        </FooterWrap>
      </FooterContant>
    </FooterContainer>
  )
}

export default Footer;
