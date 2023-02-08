import { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Calendar from "react-calendar";

import { Button } from "../button";
import { Marginer } from "../marginer";

import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
     flex
     justify-center
     items-center
     rounded-md
     bg-white
     py-1
     px-2
     mx-2
     md:px-2
     md:pl-9
     md:pr-9
  `}
`;

const ItemContainer = styled.div`
  ${tw`
     flex
     relative
  `}
`;

const Icon = styled.span`
  ${tw`
     text-red-500
     fill-current
     text-xs
     md:text-base
     mr-1
     md:mr-3
  `}
`;

const SmallIcon = styled.span`
  ${tw`
     text-gray-500
     fill-current
     text-xs
     md:text-base
     ml-1
  `}
`;

const Name = styled.span`
  ${tw`
     text-gray-600
     text-xs
     md:text-sm
     cursor-pointer
     select-none
  `}
`;

const LineSeperator = styled.span`
  height: 45%;
  width: 2px;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `}
`;

const DataCalandar = styled(Calendar)<{ offset?: boolean }>`
  position: absolute;
  top: 2em;
  left: 0em;
  max-width: none !important;
  user-select: none;

  ${({ offset }) =>
    offset &&
    css`
      left: -6em;
    `}

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
`;

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setIsStartCalendarOpen((prevState) => !prevState);
    if (isReturnCalendarOpen) {
      setIsReturnCalendarOpen(false);
    }
  };

  const toggleReturnDateCalendar = () => {
    setIsReturnCalendarOpen((prevState) => !prevState);
    if (isStartCalendarOpen) {
      setIsStartCalendarOpen(false);
    }
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DataCalandar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DataCalandar offset value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}
