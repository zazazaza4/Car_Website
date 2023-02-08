import styled from "styled-components";
import tw from "twin.macro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";

import MclarenImg from "../../../assets/images/mclaren-orange-big.png";

import "swiper/css";
import "swiper/css/pagination";

const TopCarsContainer = styled.div`
  ${tw` 
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
  `}
`;

const Title = styled.h2`
  ${tw` 
    text-3xl
    lg:text-5xl
    text-black
    font-black
  `}
`;

const CarsContainer = styled.div`
  ${tw` 
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `}
`;

const CustomSlide = styled(SwiperSlide)`
  ${tw`
    flex
    justify-center
  `}
`;

export function TopCars() {
  const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc: MclarenImg,
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Swiper
          breakpoints={{
            1150: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <CustomSlide>
            <Car {...testCar} />
          </CustomSlide>
          <CustomSlide>
            <Car {...testCar} />
          </CustomSlide>
          <CustomSlide>
            <Car {...testCar} />
          </CustomSlide>
          <CustomSlide>
            <Car {...testCar} />
          </CustomSlide>
        </Swiper>
      </CarsContainer>
    </TopCarsContainer>
  );
}
