import React, { useState, useRef, useEffect } from "react";
import { Button } from "./Button";
import styled, { css } from "styled-components/macro";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

/////////////////////////////  HERO SECTION  ///////////////////////////////////////////////

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  /////////////////////////////////  IMAGES SLIDING  FUNCTONS USING USE EFFECT    /////////////////////////
  
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
    // console.log(current)
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
    //console.log(current)
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  //////////////////////////////   END SLIDING FUNCTINALITY /////////////////////////////////////////////

  return (
    <div>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImg src={slide.image} alt={slide.alt} />
                    <HeroContent>
                      <h1>{slide.title}</h1>
                      <p>{slide.price}</p>
                      <Button
                        to={slide.path}
                        primary="true"
                        css={`
                          max-width: 160px;
                        `}
                      >
                        {slide.label}
                        <Arrow />
                      </Button>
                    </HeroContent>
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}
          <SlidersButton>
            <PreArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SlidersButton>
        </HeroWrapper>
      </HeroSection>
    </div>
  );
};

export default Hero;

/////////////////////////////////////    STYLE COMPONETNS ////////////////////////////////////////

const HeroSection = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;
const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const HeroSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    height: 100vh;
    width: 100%;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradian(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const HeroImg = styled.img`
  left: 0;
  top: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% -100px);
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-left: 80px;
  }

  h1 {
    font-size: 2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    font-weight: 400;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 0.8rem;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    margin-bottom: 0.8rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scal(1.05);
  }
`;
const SlidersButton = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display; flex;
z-index: 10;
`;
const PreArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
