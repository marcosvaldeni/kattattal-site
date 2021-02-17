import React, { useState, useEffect } from 'react'
import { FaBars, FaWhatsapp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

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
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }
 
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>

          <NavLogo to='/' onClick={toggleHome} >Kattattal</NavLogo>

          <MobileIcon onClick={toggleHandler} >
            <FaBars />
          </MobileIcon>
          <NavMenu>

            <NavItem>
              <NavLinks to="about"
                smooth={true} duration={500} spy={true} exact='true' offset={+50}
              >About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="podcast"
                smooth={true} duration={500} spy={true} exact='true' offset={+50}
              >Podcast</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="channels"
                smooth={true} duration={500} spy={true} exact='true' offset={+50}
              >Channels</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="play"
                smooth={true} duration={500} spy={true} exact='true' offset={+50}
              >What I Play</NavLinks>
            </NavItem>

          </NavMenu>

          <NavBtn>
            
            <NavBtnLink 
              href="https://chat.whatsapp.com/I3D3dxVa91nAoo3UMTNikh"
              target="_blank"
            ><FaWhatsapp size={30} />Contact Me</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
