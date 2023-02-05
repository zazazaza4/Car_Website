import styled from "styled-components";
import tw from "twin.macro";
import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "./app/containers/HomePage";

const AppContainer = styled.div`
  ${tw`
  w-full 
  h-full 
  flex 
  flex-col
  `}
`;

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
