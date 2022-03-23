import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
  background: #191816;
  height: 30px;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`

export const NavLink = styled(Link)`
  color: #E2E2E2;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #0082c8;
  }
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
    
  }
`