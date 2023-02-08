import styled from "styled-components";
import tw from "twin.macro";

import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";

import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { TopCars } from "./topCars";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
  flex 
  flex-col 
  h-full 
  w-full 
  items-center 
  overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="2em" />
      <BookCard />
      <Marginer direction="vertical" margin="7em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="4em" />
      <AboutUs />
      <Marginer direction="vertical" margin="7em" />
      <TopCars />
      <Marginer direction="vertical" margin="4em" />
      <Footer />
    </PageContainer>
  );
}
