import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItems";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
  max-w-screen-2xl 
  w-full 
  flex
  flex-row
  items-center
  pl-3
  pr-3
  lg:pl-12
  lg:pr-12
  justify-between
  `}
`;

const LogoContainer = styled.div``;

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}
