import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const HeroSection = styled.section`
  width: 100%;
  position: relative;
  background: linear-gradient(275.22deg, #FFFFFF 26.95%, rgba(190, 213, 187, 0.5) 86.45%, #BED5BB 103.23%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 80vh;
  padding: 3rem 0;

  @media ${device.mobile} {
    min-height: auto;
    padding: 2rem 0;
  }
`;

export const HeroContainer = styled.div`
  max-width: 90%;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem var(--padding-x);
  position: relative;
  z-index: 2;
  gap: 2rem;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  @media ${device.mobile} {
    padding: 1rem var(--padding-x);
    align-items: flex-start;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 55%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1023px) {
    max-width: 100%;
    align-items: flex-start;
  }

  @media ${device.mobile} {
    align-items: flex-start;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 75%;
  width: auto;
  max-width: 45%;
  object-fit: contain;
  object-position: bottom right;
  z-index: 1;

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 55%;
    max-width: 40%;
    object-position: bottom right;
  }

  @media (max-width: 767px) {
    position: absolute;
    right: 0;
    bottom: 0;
    height: auto;
    max-width: 50%;
    max-height: 45%;
    object-fit: contain;
    object-position: bottom right;
  }
`;

export const WhatsappWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  @media ${device.mobile} {
    top: 1rem;
    right: 0;
  }
`;

export const WhatsappText = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-family: 'Alata', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: black;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);

  opacity: 0;
  visibility: hidden;
  transform: translateX(10px);
  transition: all 0.3s ease;

  ${WhatsappWrapper}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
  
  @media ${device.mobile} {
    display: none;
  }
`;

export const WhatsappIcon = styled.img`
  width: 3.5rem;
  
  @media ${device.mobile} {
    width: 2.5rem;
  }
`;


export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #eef7f2;
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.7rem;

  @media ${device.mobile} {
    font-size: 0.65rem;
    padding: 0.3rem 0.7rem;
  }
`;

export const Heading = styled.h1`
  font-family: 'Alata', sans-serif;
  font-weight: 400;
  font-size: 3.125rem;
  line-height: 4rem;
  text-transform: uppercase;
  margin-top: 1rem;

  @media ${device.desktop} {
    font-size: 3rem;
    line-height: 3.8rem;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 2.1rem;
    line-height: 2.8rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 2rem;
    line-height: 2.6rem;
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.15rem;
    line-height: 1.6rem;
  }
`;

export const GreenText = styled.span`
  color: #1ca36f;
  font-weight: 400;
`;

export const Description = styled.p`
  max-width: 90%;
  margin-top: 1rem;
  font-family: 'Alata', sans-serif;
  font-weight: 400;
  font-size: clamp(0.8rem, 1.2vw, 0.9375rem);
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  color: #6b6b6b;

  @media ${device.mobile} {
    font-size: 0.8rem;
    line-height: 1.3rem;
    max-width: 100%;
  }
`;

export const QuoteCard = styled.div`
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  padding: 1.2rem;
  border-radius: 0.6rem;
  max-width: 28rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (min-width: 1440px) {
    width: 85%;
    max-width: none;
    padding: 2rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 30rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
  }

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 0;
    background: transparent;
    backdrop-filter: none;
    box-shadow: none;
  }
`;

export const InputRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
`;

export const InputBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
  gap: 0.5rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid #bdbdbd;
  font-family: 'Alata', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  color: #2b2b2b;
  cursor: text;

  @media (max-width: 767px) {
    font-size: 0.7rem;
    padding-bottom: 0.5rem;
  }
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`;

export const Arrow = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  object-fit: contain;
`;

export const QuoteButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin-top: 0.5rem;
  background: #119a5d;
  color: white;
  border: 2px solid #119a5d;
  border-radius: 0.6rem;
  font-size: 0.85rem;
  letter-spacing: 0.03rem;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: white;
    color: #119a5d;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 767px) {
    padding: 0.65rem;
    font-size: 0.8rem;
  }
`;

export const HelperText = styled.p`
  text-align: center;
  font-size: 0.65rem;
  color: #777;
  margin-top: 0.5rem;

  @media (max-width: 767px) {
    display: none;
  }
`;
export const DropdownWrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background: white;
  border-radius: 0.6rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
`;

export const Option = styled.div`
  padding: 0.8rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;
