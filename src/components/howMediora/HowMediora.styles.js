import styled from "styled-components";
import { device } from "../../styles/breakpoints";



export const Section = styled.section`
  background: #F2FBF7;
  padding: 6rem 0 10rem 0;

  @media ${device.mobile} {
    padding: 4rem 0 6rem 0;
  }
`;



export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 0 var(--padding-x);
  text-align: center;
`;



export const Label = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: black;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 500;
`;

export const VerifiedIcon = styled.img`
  width: 1rem;
`;



export const Heading = styled.h2`
  font-size: 1.9rem;
  font-weight: 400;
  margin-bottom: 0.5rem;

  @media ${device.mobile} {
    font-size: 1.5rem;
  }
`;



export const SubText = styled.p`
  color: #6b6b6b;
  font-size: 1rem;
  margin-bottom: 4rem;

  @media ${device.mobile} {
    font-size: 0.9rem;
    margin-bottom: 3rem;
  }
`;



export const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  align-items: center;
  position: relative;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 1.5rem;
    padding: 4rem 1.5rem 5rem 1.5rem;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    overflow-x: visible;
    gap: 4rem;
    padding-bottom: 0;
    padding-top: 0;
  }
`;



export const Card = styled.div`
  position: relative;
  background: #ffffff;
  color: #1a1a1a;

  padding: 2rem 1.5rem;
  border-radius: 1rem;
  text-align: left;
  min-height: 13rem;

  z-index: 1;

  transform: ${({ $align }) =>
    $align === "top"
      ? "translateY(-3rem)"
      : "translateY(4rem)"};

  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: #0C6553;
    color: #ffffff;

    transform: ${({ $align }) =>
    $align === "top"
      ? "translateY(-3.4rem)"
      : "translateY(3.4rem)"};

    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    min-width: 300px;
    scroll-snap-align: center;
  }

  @media (max-width: 767px) {
    width: 65%;
    min-width: unset;
    min-height: 12rem;
    transform: none !important;
    padding: 1.5rem 1.2rem;
    margin-bottom: 2.5rem;
    &:nth-child(odd) {
      align-self: flex-start;
      margin-left: 1.5rem;
    }
    &:nth-child(even) {
      align-self: flex-end;
      margin-right: 1.5rem;
    }
  }
`;





export const Icon = styled.img`
  width: 2rem;
  margin-bottom: 1rem;
  transition: 0.3s;
`;




export const Title = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.4rem;
`;



export const Description = styled.p`
  font-size: 0.9rem;
  color: inherit;
  opacity: 0.85;
`;




export const StepNumber = styled.div`
  position: absolute;
  left: 50%;
  width: 3rem;

  pointer-events: none;
  z-index: 5;

  ${({ $align }) =>
    $align === "bottom"
      ? `
        top: 0;
        transform: translate(-50%, -50%);
      `
      : `
        bottom: 0;
        transform: translate(-50%, 50%);
      `}

  img{
    width:100%;
    display:block;
  }

  @media (max-width: 767px) {
    top: auto;
    bottom: 0;
    transform: translate(-50%, 50%);
    width: 2.5rem;
  }
`;




export const Arrow = styled.img`
  position: absolute;
  right: 0.2rem;

  top: ${({ $align }) =>
    $align === "top" ? "120%" : "-30%"};

  width: 5rem;
  pointer-events: none;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none; 
  }

  @media (max-width: 767px) {
    display: none;
  }
`;


export const MobileArrow = styled.img`
  display: none;
  position: absolute;
  width: 5rem;
  pointer-events: none;
  z-index: -1; 
  opacity: 0.7;

  @media (max-width: 767px) {
    display: block;
    
    ${({ $align }) =>
    $align === "top"
      ? `
          left: 100%;
          top: 55%;
          transform: rotate(10deg);
        `
      : `
          right: 100%;
          top: 55%;
          transform: rotate(-15deg);
        `}
  }
`;
