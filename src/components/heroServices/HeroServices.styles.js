import styled from "styled-components";
import { device } from "../../styles/breakpoints";


export const Strip = styled.section`
  width: 100%;
  background: #119a5d;
  border-bottom-right-radius: 5rem;

  display: flex;
  justify-content: center;
  
  @media (max-width: 767px) {
    border-bottom-right-radius: 3rem;
  }
`;



export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 0 var(--padding-x);

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 1.5rem;
  }
`;



export const Card = styled.div`
  padding: 2.5rem 2rem;
  color: white;

  border-right: 1px dashed rgba(255,255,255,0.35);

  &:last-child {
    border-right: none;
  }

  @media (max-width: 1024px) {
    border-right: 1px dashed rgba(255,255,255,0.35);
    
    &:nth-child(2n) {
      border-right: none;
    }

    &:nth-child(-n+2) {
      border-bottom: 1px dashed rgba(255,255,255,0.35);
    }
  }

  @media (max-width: 767px) {
    padding: 2rem 1rem;
    border-right: none;
    border-bottom: 1px dashed rgba(255,255,255,0.35);

    &:last-child {
      border-bottom: none;
    }
    
    &:nth-child(2n) {
        border-right: none;
    }
    
    border-right: none !important;
  }
`;



export const Icon = styled.img`
  width: 2.2rem;
  margin-bottom: 1rem;
`;



export const Title = styled.h3`
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin-bottom: 0.6rem;
`;



export const Description = styled.p`
  font-size: 0.78rem;
  font-weight: 400;
  line-height: 1.45;
  opacity: 0.9;
`;
