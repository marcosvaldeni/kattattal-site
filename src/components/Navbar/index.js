import React from 'react'
import { FaBars } from 'react-icons/fa';

import { 
  Nav, 
  NavbarContainer, 
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './styles';

const Navbar = ({ toggleHandler }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>

          <NavLogo to="/">Kattattal</NavLogo>

          <MobileIcon onClick={toggleHandler} >
            <FaBars />
          </MobileIcon>
          <NavMenu>

            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="play">What I Play</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="channel">Channels</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="podcast">Podcast</NavLinks>
            </NavItem>

          </NavMenu>

          <NavBtn>
              <NavBtnLink to="signin">Sign In</NavBtnLink>
            </NavBtn>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
