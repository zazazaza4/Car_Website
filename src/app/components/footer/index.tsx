import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

import data from "../../data.json";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    min-w-full
    pt-10
    md:pt-16
    pb-1
   `};
`;

const InnerContainer = styled.div`
  ${tw`
      flex
      flex-wrap
      flex-col
      min-w-full
      h-full
      max-w-screen-2xl
      justify-center
    `}
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    md:justify-start
    mt-7
    md:mt-1
  `}
`;

const CopyrightText = styled.span`
  font-size: 12px;
  ${tw`
    text-gray-300
  `};
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    px-10
    md:px-3
 `};
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
 `};
`;

const SectionContiner = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    px-10
    md:px-3
    mt-7
    md:mt-0
   `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
   `};
`;

const ListItem = styled.li`
  ${tw`
     mb-3
   `};

  & > a {
    ${tw`    
     text-sm
     text-white
     transition-all
     hover:text-gray-200
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
   `};
`;

const HorizontalContianer = styled.div`
  ${tw`
    flex
    items-center
   `};
`;

const RedIcon = styled.span`
  ${tw`
    w-8
    h-8
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
   `};
`;

const SmallText = styled.span`
  ${tw`
    text-white
    text-sm
 `};
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
        </AboutContainer>
        <AboutText>
          Your car is a Car renting and selling company located in many
          countries across the world which has high quality cars and top rated
          service
        </AboutText>
        <SectionContiner>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            {data.ourLinks.map(({ id, name, route }) => (
              <ListItem key={id}>
                <Link to={route}>{name}</Link>
              </ListItem>
            ))}
          </LinksList>
        </SectionContiner>
        <SectionContiner>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            {data.otherLinks.map(({ id, name, route }) => (
              <ListItem key={id}>
                <Link to={route}>{name}</Link>
              </ListItem>
            ))}
          </LinksList>
        </SectionContiner>
        <SectionContiner>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContianer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+380667502022</SmallText>
          </HorizontalContianer>
        </SectionContiner>
        <SectionContiner>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContianer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.com</SmallText>
          </HorizontalContianer>
        </SectionContiner>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy;{new Date().getFullYear()} Yourcar. All rights
          reserved
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
