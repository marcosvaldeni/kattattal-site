import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import {
  SidebarContainer, 
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute
} from './styles';

const Sidebar = ({ isOpen, toggleHandler }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggleHandler}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            smooth={true} duration={500} spy={true} exact='true' offset={+50}
            onClick={toggleHandler} to='about'>About</SidebarLink>
          <SidebarLink 
            smooth={true} duration={500} spy={true} exact='true' offset={+50}
            onClick={toggleHandler} to='podcast'>Podcast</SidebarLink>
          <SidebarLink 
            smooth={true} duration={500} spy={true} exact='true' offset={+50}
            onClick={toggleHandler} to='channels'>Channels</SidebarLink>
          <SidebarLink 
            smooth={true} duration={500} spy={true} exact='true' offset={+50}
            onClick={toggleHandler} to='play'>What I Play</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute
            onClick={toggleHandler} 
            to='/signin'
            href="https://chat.whatsapp.com/I3D3dxVa91nAoo3UMTNikh"
            target="_blank"
          >
            <FaWhatsapp size={30} />
            Contact Me
          </SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>

      
    </SidebarContainer>
  )
}

export default Sidebar;
