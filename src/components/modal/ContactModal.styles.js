import styled from "styled-components";
import { device, breakpoint } from "../../styles/breakpoints";

const colors = {
  green: "#176B5C",
  lightBg: "#F6F7F8",
  textLight: "#ffffff",
  textDark: "#2b2b2b",
};


export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0,0,0,0.45);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
  padding: 1rem;

  animation: fadeIn .25s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;


export const ModalWrapper = styled.div`
  width: 70rem;
  max-width: 95%;
  height: 38rem;
  background: white;
  border-radius: 0.8rem;
  overflow: hidden;
  display: flex;
  position: relative;

  animation: scaleUp .25s ease;

  @keyframes scaleUp {
    from {
      transform: scale(.96);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media ${device.laptop} {
    width: 58rem;
    height: 34rem;
    max-width: 95%;
  }

  @media ${device.tabletLarge} {
    width: 95%;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;
  }

  @media ${breakpoint.mobileAll} {
    flex-direction: column;
    width: 100%;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 0.6rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;

  border: none;
  background: white;

  font-size: 1.2rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: .2s;
  z-index: 10;

  &:hover {
    transform: rotate(90deg);
    background: #f3f3f3;
  }
`;


export const LeftPanel = styled.div`
  flex: 0.9;
  background: ${colors.green};
  color: white;
  padding: 3rem 0rem 0rem 3rem;
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    padding: 2.5rem 0 0 2.5rem;
    flex: 0.85;
  }

  @media ${device.tabletLarge} {
    padding: 2rem 0 0 2rem;
    flex: 1;
  }

  @media ${breakpoint.mobileAll} {
    padding: 2rem;
    flex: none;
  }
`;

export const ModalImage = styled.img`
  width: 73%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: block;

  @media ${device.laptop} {
    width: 65%;
  }

  @media ${device.tabletLarge} {
    width: 60%;
  }

  @media ${breakpoint.mobileAll} {
    display: none;
  }
`;


export const RightPanel = styled.div`
  flex: 1.1;
  background: ${colors.lightBg};
  padding: 3rem;
  position: relative;

  @media ${device.laptop} {
    padding: 2.5rem;
    flex: 1.15;
  }

  @media ${device.tabletLarge} {
    padding: 2rem;
    flex: 1;
  }

  @media ${breakpoint.mobileAll} {
    padding: 1.5rem;
    flex: none;
  }
`;


export const Logo = styled.img`
  width: 11rem;
  margin-bottom: 2rem;

  @media ${device.tabletLarge} {
    width: 9rem;
    margin-bottom: 1.5rem;
  }

  @media ${breakpoint.mobileAll} {
    width: 8rem;
    margin-bottom: 1rem;
  }
`;


export const Heading = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.6rem;

  @media ${device.tabletLarge} {
    font-size: 1.1rem;
  }

  @media ${breakpoint.mobileAll} {
    font-size: 1rem;
  }
`;

export const SubText = styled.p`
  font-size: 0.85rem;
  opacity: 0.85;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media ${device.laptop} {
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }

  @media ${device.tabletLarge} {
    margin-bottom: 0.8rem;
    font-size: 0.78rem;
  }

  @media ${breakpoint.mobileAll} {
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
`;


export const InfoItem = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
  align-items: flex-start;
  font-weight: 400;

  @media ${device.laptop} {
    margin-bottom: 0.7rem;
  }

  @media ${device.tabletLarge} {
    margin-bottom: 0.6rem;
  }

  @media ${breakpoint.mobileAll} {
    margin-bottom: 0.7rem;
  }
`;

export const InfoIcon = styled.img`
  width: 1.1rem;
`;

export const InfoText = styled.div`
  font-size: 0.85rem;
  line-height: 1.5;
  font-weight: 100;
`;

export const PhonesGrid = styled.div`
  display: flex;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    font-size: 0.85rem;
    line-height: 1.5;
    font-weight: 100;
  }

  span {
    font-size: 0.85rem;
    white-space: nowrap;
    opacity: 0.9;
  }

  @media ${device.laptop} {
    gap: 1rem;

    div {
      font-size: 0.78rem;
    }

    span {
      font-size: 0.78rem;
    }
  }

  @media ${device.tabletLarge} {
    gap: 0.8rem;

    div {
      font-size: 0.75rem;
    }

    span {
      font-size: 0.75rem;
    }
  }

  @media ${breakpoint.mobileAll} {
    gap: 1rem;
    flex-wrap: wrap;

    div {
      font-size: 0.78rem;
    }

    span {
      font-size: 0.78rem;
    }
  }
`;


export const SocialColumn = styled.div`
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${device.laptop} {
    top: auto;
    bottom: 23%;
   
  }

  @media ${device.tabletLarge} {
    top: auto;
    bottom: 23%;
    
  }

  @media ${breakpoint.mobileAll} {
    display: none;
  }
`;

export const SocialIcon = styled.img`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
`;


export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media ${device.laptop} {
    gap: 1.5rem;
  }

  @media ${device.tabletLarge} {
    gap: 1.5rem;
  }

  @media ${breakpoint.mobileAll} {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;


export const FullField = styled.div`
  grid-column: span 2;

  @media ${breakpoint.mobileAll} {
    grid-column: span 1;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  color: #888;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background: transparent;
  padding: 0.5rem 0;
  outline: none;
  font-size: 0.9rem;
  color: #333;

  &:focus {
    border-bottom: 1px solid ${colors.green};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background: transparent;
  padding: 0.5rem 0;
  outline: none;
  resize: none;
  font-weight: 400;
  font-size: 0.9rem;
  color: #333;
  font-family: inherit;

  &:focus {
    border-bottom: 1px solid ${colors.green};
  }
`;


export const SendButton = styled.button`
  margin-top: 2rem;
  background: #119a5d;
  color: white;
  border: none;
  padding: 0.9rem 2.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  float: right;
  transition: .25s;

  @media ${device.laptop} {
    margin-top: 0.3rem;
    padding: 0.75rem 2rem;
    font-size: 0.85rem;
  }

  @media ${device.tabletLarge} {
    margin-top: 0.8rem;
    padding: 0.7rem 1.8rem;
    font-size: 0.82rem;
  }

  @media ${breakpoint.mobileAll} {
    width: 100%;
    float: none;
    padding: 0.75rem;
    margin-top: 1.5rem;
  }

  &:hover {
    background: white;
    color: #119a5d;
    border: 2px solid #119a5d;
  }
`;
