import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { Menudata } from "../Data/Menudata";
import { Button } from "./Button";
import BarLogo from "../Images/menu.png";

/////////////////////////////////////////   nAVBAR  SECTION   .////////////////////////////////

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">TESLA</Logo>
      <MenuBar onClick={toggle} />
      <NavMenu>
        {Menudata.map((item, index) => (
          <NavMenuLink to={item.link} key={index}>
            {item.title}
          </NavMenuLink>
        ))}
      </NavMenu>

      <NavBtn>
        <Button to="/contact" primary="false">
          Order Now{" "}
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;

///////////////////////////    STYLED   COMPONENTS  ///////////////////////////////

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 1rem 2rem;
  background: #808b96;
  width: 100%;
  z-index: 100;
  height: 60px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #17202a;
  padding: 0 1rem;
  height: 100%;
  cursore: pointer;
  font-size: 1.2rem;
  font-weight: 800;
`;
const NavLink = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  padding: 0 2rem;
  height: 100%;
  cursore: pointer;
`;
const MenuBar = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${BarLogo});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLink = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
