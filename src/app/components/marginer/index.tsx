import styled from "styled-components";

type MarginType = number | string;

export interface IMarginerProps {
  margin: MarginType;
  direction?: "horizontal" | "vertical";
}

const HorizontalMarginer = styled.span<{ margin: MarginType }>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMarginer = styled.span<{ margin: MarginType }>`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

export function Marginer({ margin, direction }: IMarginerProps) {
  if (direction === "horizontal") {
    return <HorizontalMarginer margin={margin} />;
  }
  return <VerticalMarginer margin={margin} />;
}
