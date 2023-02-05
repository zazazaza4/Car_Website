import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme: "filled" | "outlined";
  text: string;
}

const BaseButton = styled.button`
  ${tw`
    px-5
    py-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `}
`;

const OutlineButton = styled(BaseButton)`
  ${tw`
    bg-red-500
    hover:bg-transparent
    hover: text-red-500
    hover:border-red-500
  `}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    bg-transparent
    text-red-500
    border-red-500
    hover:bg-red-500
    hover: text-white
    hover:border-transparent
  `}
`;

export function Button({ theme = "filled", text = "" }: IButtonProps) {
  if (theme === "filled") {
    return <FilledButton>{text}</FilledButton>;
  }
  return <OutlineButton>{text}</OutlineButton>;
}
