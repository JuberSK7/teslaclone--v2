import React from "react";
import styled from "styled-components";
import SPic1 from "..//Images/ser-1.jpg";
import SPic2 from "..//Images/ser-2.jpg";
import SPic3 from "..//Images/ser-3.jpg";

///////////////////////    SERVICE COMPONENTYS /////////////////////////////////////

const Service = () => {
  return (
    <ServiceContainer>
      <ServiceH1>Our Services</ServiceH1>
      <ServiceWrapper>
        <ServiceCart>
          <ServiceIcon src={SPic1} />
          <ServiceH2>Tesla Charging Point</ServiceH2>
          <ServiceP>
            {" "}
            Tesla, Inc. is an American automotive and clean energy company based
            in Austin
          </ServiceP>
        </ServiceCart>

        <ServiceCart>
          <ServiceIcon src={SPic2} />
          <ServiceH2>Vehicle Loan</ServiceH2>
          <ServiceP>
            Tesla, Inc. is an American automotive and clean energy company based
            in Austin
          </ServiceP>
        </ServiceCart>

        <ServiceCart>
          <ServiceIcon src={SPic3} />
          <ServiceH2>Tesla Charging Stations</ServiceH2>
          <ServiceP>
            Tesla, Inc. is an American automotive and clean energy company based
            in Austin
          </ServiceP>
        </ServiceCart>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Service;

///////////////////////////////////////  STYLED COMPONERNT //////////////////////////////

const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 800px;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

const ServiceH1 = styled.h1`
  color: #fff;
  font-size: 2.4rem;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const ServiceCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  max-height: 380px;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursore: pointer;
  }
`;

const ServiceIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const ServiceH2 = styled.h2`
  margin-bottom: 10px;
  font-size: 1rem;
`;
const ServiceP = styled.p`
  font-size: 1rem;
  align-items: center;
`;
