import React from 'react'

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
          <SidebarLink onClick={toggleHandler} to='about'>About</SidebarLink>
          <SidebarLink onClick={toggleHandler} to='about'>What I Play</SidebarLink>
          <SidebarLink onClick={toggleHandler} to='about'>Channels</SidebarLink>
          <SidebarLink onClick={toggleHandler} to='about'>Podcast</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute onClick={toggleHandler} to='/signin'>Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>

      
    </SidebarContainer>
  )
}

export default Sidebar;
