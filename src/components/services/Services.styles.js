import styled from "styled-components";



export const Section = styled.section`
  padding: 5rem 0;
  background: white;
`;



export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 0 var(--padding-x);
`;



export const Label = styled.div`
  font-size: 0.80rem;
  letter-spacing: 0.08em;
  font-weight: 400;
  color: black;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const TickIcon = styled.img`
  width: 1rem;
  margin-right: 0.5rem;

`;

export const Heading = styled.h2`
  font-family: Alata;
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
    line-height: 2.2rem;
  }
`;

export const Description = styled.p`
  width: 100%;
  color: #6b6b6b;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    font-size: 0.85rem;
    margin-bottom: 2rem;
  }
`;



export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    gap: 1.5rem;
  }
`;



export const Card = styled.div`
  background: #F2FBF7;
  border-radius: 0.6rem;
  overflow: hidden;

  box-shadow: 0px 20px 40px rgba(0,0,0,0.05);
`;



export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
`;



export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  background: #119a5d;
  color: #fff;

  padding: 1rem 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.9rem;
  letter-spacing: 0.02em;

  cursor: pointer;
  transition: background 0.25s ease;

  &:hover{
    background: #0C6553;
  }
`;


export const IconBox = styled.div`
   background: rgba(255,255,255,0.15);
  padding: 0.4rem;
  border-radius: 0.4rem;
`;

export const Profile = styled.img`
  width: 1.3rem;
  height: 1.2rem;

`;



export const Content = styled.div`
  padding: 1.6rem;
`;

export const BulletGrid = styled.div`
  column-count: 2;
  column-gap: 2.5rem;

  @media (max-width: 600px) {
    column-count: 1;
  }
`;


export const Bullet = styled.div`
  break-inside: avoid;
  margin-bottom: 0.8rem;

  display: flex;
  gap: 0.5rem;
  align-items: flex-start;

  font-size: 0.8rem;
  color: #2c2c2c;
`;


export const Tick = styled.img`
  width: 0.9rem;
  margin-top: 0.2rem;
`;



export const Button = styled.button`
  margin-top: 1.5rem;
  width: 100%;

  background: #119a5d;
  color: #fff;

  padding: 0.9rem;
  border-radius: 0.5rem;

  border: 2px solid #119a5d;

  font-size: 0.85rem;
  letter-spacing: 0.05em;

  transition: all 0.3s ease;
  cursor: pointer;

  &:hover{
    background: #ffffff;
    color: #119a5d;
    border: 2px solid #119a5d;

    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.12);
  }

  &:active{
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
`;

