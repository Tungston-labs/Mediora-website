import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  background: #0C6553;
  padding: 1rem 0;
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 0 var(--padding-x);

  display: grid;
  grid-template-columns: 0.85fr auto 1.15fr;
  grid-template-areas: "left center right";
  align-items: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 150px;
    grid-template-areas:
      "left center"
      "right center";
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    width: 90%;
    padding: 0;
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right"
      "center";
    text-align: center;
    gap: 2rem;
  }
`;


export const Left = styled.div`
  grid-area: left;
  color: #ffffff;
`;

export const Heading = styled.h2`
  font-family: 'Alata', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5rem;
  line-height: 2.5rem;
  letter-spacing: 0;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
    line-height: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.05rem;
    line-height: 1.6rem;
    margin-bottom: 0.75rem;
  }
`;

export const Description = styled.p`
  font-family: 'Alata', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.9rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.43);
  width: 110%;
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    width: 110%;
    font-size: 0.85rem;
    line-height: 1.4rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;



export const StatsRow = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatNumber = styled.span`
  font-family: 'Alata', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.25rem;
  line-height: 2.125rem;
  letter-spacing: 0;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
`;

export const StatLabel = styled.span`
  font-size: 0.8rem;
  white-space: nowrap;

  opacity: 0.85;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    white-space: normal;
  }
`;



export const Center = styled.div`
  grid-area: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  position: absolute;
  height: 160%;
  width: 4px;
  border-right: 2px dashed rgba(255,255,255,0.25);

  @media (max-width: 1024px) {
    display: none;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Flower = styled.img`
  width: 90%;
  z-index: 2;

  animation: ${rotate} 8s linear infinite;
  will-change: transform;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 220px;
    align-self: center;
  }

  @media (max-width: 600px) {
    width: 60%;
    max-width: 200px;
  }
`;


export const Right = styled.div`
  grid-area: right;
  color: #ffffff;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;

  font-family: 'Alata', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.9rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  white-space: normal;

  @media (max-width: 600px) {
    white-space: normal;
    text-align: left;
  
  }

  text-transform: capitalize;
`;



export const Check = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;

  border: 2px solid #7be0b4;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.7rem;
  flex-shrink: 0;
`;
