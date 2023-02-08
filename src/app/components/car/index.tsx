import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";

import { ICar } from "../../../typings/car";
import { Button } from "../button";

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  width: 16.5em;
  min-height: 10em;
  max-height: 25em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw` 
    flex
    flex-col
    items-center
    p-3
    pb-4
    rounded-md
    bg-white
    m-1
    sm:m-3
  `}
`;

const CarThumnail = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CarName = styled.h3`
  ${tw` 
    text-base
    font-bold
    text-black
    mt-1
    mb-1
  `}
`;

const PriceContainer = styled.div`
  ${tw` 
    w-full
    flex
    justify-center
    mt-3
  `}
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
    inline-flex
    text-xs
    font-thin
  `}
`;

const DailyPrice = styled.h5`
  ${tw` 
   text-red-500
   font-bold
   text-sm
   mr-3
`}
`;

const MonthlyPrice = styled.h5`
  ${tw` 
   text-gray-500
   font-bold
   text-sm
`}
`;

const SmallIcon = styled.span`
  ${tw` 
   text-gray-400
   text-sm
   mr-1
`}
`;

const CarDetailContainer = styled.div`
  ${tw` 
   flex
   w-full
   justify-between
`}
`;

const CarDetail = styled.div`
  ${tw` 
   flex
   items-center
`}
`;

const CarInfo = styled.div`
  ${tw` 
   text-gray-400
   text-xs
`}
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw` 
   flex
   bg-gray-300
   mt-2
   mb-2    
`}
`;

const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `}
`;

export function Car({
  thumbnailSrc,
  name,
  dailyPrice,
  gas,
  mileage,
  gearType,
  monthlyPrice,
}: ICarProps) {
  return (
    <CarContainer>
      <CarThumnail>
        <img src={thumbnailSrc} alt="" />
      </CarThumnail>
      <CarName>{name}</CarName>
      <PriceContainer>
        <DailyPrice>
          {dailyPrice}
          <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          {monthlyPrice}
          <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PriceContainer>
      <Seperator />
      <CarDetailContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailContainer>
      <RentButton text="Rent Now" />
    </CarContainer>
  );
}
