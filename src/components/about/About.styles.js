import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Section = styled.section`
 background-color: white;
  padding: 4rem 0 0 0;
  position: relative;
  overflow: hidden;

  @media ${device.mobile} {
    padding-bottom: 2rem;
  }
`;



export const Container = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
  gap: 2rem;
  height: 100%;
  padding: 0 var(--padding-x);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;


export const Content = styled.div`
  width: 90%;
  padding-bottom: 5rem; 

  @media (max-width: 1024px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`;



export const Label = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.80rem;
  color: black;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Tick = styled.img`
  width: 1rem;
  
`;



export const Heading = styled.h2`
  width:120%;
  font-size: 1.9rem;
  font-weight: 400;
  line-height: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.19rem;
    line-height: 1.9rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.65rem;
    margin-bottom: 0.75rem;
  }
`;

export const Green = styled.span`
  color: #119a5d;
`;



export const Description = styled.p`
  color: #6b6b6b;
  margin-bottom: 2.5rem;

  font-family: 'Alata', sans-serif;
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  width: 160%;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    text-align: justify;
    padding-right: 0.5rem;
  }
`;



export const Block = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const BlockIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const BlockTitle = styled.h4`
  margin-bottom: 0.3rem;
  font-weight: 500;
`;

export const BlockText = styled.p`
  color: #777;

  font-family: 'Alata', sans-serif;
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 1.625rem;
  letter-spacing: 0.01em;
`;



export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 500px;
    display: block;
    margin-top: 3rem;
  }
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    height: auto;
    justify-items: center;
  }
`;


export const HeroImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: auto;
  height: 80%;
  max-height: 100%;
  display: block;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 75%;
    height: auto;
    right: -3rem;
  }

  @media (max-width: 767px) {
    position: relative;
    order: 2;
    grid-column: 1 / -1;
    width: 100%;
    height: auto;
    max-width: 400px;
     right: -3rem;
  }
`;




export const FloatCard = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  width: max-content;

  background: #ffffff;
  padding: 0.7rem 1rem;
  border-radius: 0.8rem;

  box-shadow:
    0px 10px 25px rgba(0,0,0,0.07),
    0px 4px 10px rgba(0,0,0,0.04);

  flex-shrink: 0;

  @media (min-width: 768px) and (max-width: 1024px) {
    position: absolute !important;
    transform: none !important;
    padding: 0.5rem 0.8rem;
    gap: 0.5rem;
    &:nth-of-type(1) {
       top: 20% !important;
       left: 35% !important; 
       bottom: auto !important;
       right: auto !important;
    }
    &:nth-of-type(2) {
       top: 5% !important;
       right: 5% !important;
       left: auto !important;
       bottom: auto !important;
    }
    &:nth-of-type(3) {
       top: 0% !important;
       left: 0% !important;
       right: auto !important;
       bottom: auto !important;
    }
    &:nth-of-type(4) {
       bottom: 55% !important; 
       left: 0% !important;
       top: auto !important;
       right: auto !important;
    }
  }

  @media (max-width: 767px) {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    transform: none !important;
    order: 1;
    width: 100%; 
    max-width: none;
    flex-direction: row;
    align-items: center;
    text-align: left;
    justify-content: flex-start;
    padding: 0.8rem 0.6rem;
    gap: 0.5rem;
    margin-bottom: 0;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.05);
  }
`;

export const FloatIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`;

export const FloatText = styled.span`
  font-size: 0.75rem; 
  font-weight: 400;
  line-height: 1.4;
  color: #2b2b2b;
  text-align: left;
  letter-spacing: 0.02em;
  white-space: pre-line;
`;
