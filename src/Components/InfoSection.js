import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

///////////////////////////////   PROPSING  SECTION     ///////////////////////////

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <InfoMain>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/homes" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </InfoMain>
  );
};

export default InfoSection;

///////////////////////////////////   STYLED COMPONENTS ///////////////////////////////////////

const InfoMain = styled.section`
  height: 100%;
  width: 100%;
  padding: 1rem 0rem;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      height: 90%;
      width: 90%;
    }
  }
`;
