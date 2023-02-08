import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
  flex
  items-center
  `}
`;

const LogoText = styled.div<{ color?: "white" | "dark" }>`
  ${tw`
  text-xl
  md:text-2xl
  font-bold
  text-black
  m-1
  `}
  ${({ color }) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  width: auto;
  ${tw`
  h-6
  md:h-9
  `}

  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo({ color = "dark", bgColor = "white" }: ILogoProps) {
  return (
    <LogoContainer>
      <Image>
        <img src={bgColor === "white" ? CarLogoImg : CarLogoDarkImg} alt="" />
      </Image>
      <LogoText color={color}>Yourcar.</LogoText>
    </LogoContainer>
  );
}
