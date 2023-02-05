import { useCallback, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";

import { SCREENS } from "../responsive";
import data from "../../data.json";
import { MenuStyles } from "./menuStyles";
import { IMenu } from "../../../typings/menu";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

const NavItem = styled.li<{ burger?: any; active?: any }>`
  ${tw`
    text-xs
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    md:hover:text-red-400
  `}

  ${({ active }) =>
    active &&
    css`
      ${tw`
      text-red-400
    `}
    `}

  ${({ burger }) =>
    burger &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `}
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const { pathname } = useLocation();

  const renderMenuItems = useCallback(
    (menu: IMenu[]) => {
      return menu.map(({ id, name, route }) => (
        <NavItem active={pathname === route} burger={isMobile} key={id}>
          <NavLink to={route}>{name}</NavLink>
        </NavItem>
      ));
    },
    [isMobile, pathname]
  );

  const MenuItems = useMemo(
    () => renderMenuItems(data.menu),
    [renderMenuItems]
  );

  if (isMobile) {
    return (
      <Menu right styles={MenuStyles}>
        <ListContainer>{MenuItems}</ListContainer>
      </Menu>
    );
  }

  return <ListContainer>{MenuItems}</ListContainer>;
}
