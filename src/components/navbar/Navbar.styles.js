import styled from "styled-components";
import { Link } from "react-scroll";
import { device, breakpoint } from "../../styles/breakpoints";

const colors = {
  primary: "#126456",
  secondary: "#00A651",
  textDark: "#333333",
  textLight: "#FFFFFF",
};


export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  position: sticky;
  top: 0;
  z-index: 1100;
`;

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  width: 100%;

  @media ${device.desktopXL} {
    max-width: 1650px;
  }

  @media ${device.ultraWide} {
    max-width: 1800px;
  }


  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding: 0 2rem;
    max-width: none;
    box-sizing: border-box;
  }
`;

export const TopBar = styled.div`
  height: 6.5rem;
  background-color: ${colors.textLight};
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    height: 6rem;
  }


  @media (min-width: 768px) and (max-width: 1023px) {
    height: 5.5rem;
  }


  @media (max-width: 767px) {
    height: 5rem;
  }
`;

export const TopContent = styled(Container)`
  justify-content: flex-end;


  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 15.7%;
  height: 5.3rem;
  object-fit: contain;
  margin-right: auto;

  @media ${device.laptop} {
    width: 14%;
    height: 5rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 12rem;
    height: 4rem;
  }

  @media (max-width: 767px) {
    width: 8rem;
    height: 3.5rem;
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-left: 2rem;

  @media ${device.laptop} {
    gap: 1.8rem;
    margin-left: 1.5rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 1.2rem;
    margin-left: 1rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const InfoBlockContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const IconBox = styled.div`
  width: 2.75rem;
  height: 2.75rem;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 2.2rem;
    height: 2.2rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.span`
  color: ${colors.textDark};
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;

  @media ${device.laptop} {
    font-size: 0.7rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.6rem;
  }
`;

export const InfoSubtitle = styled.span`
  color: ${colors.textDark};
  font-size: 0.75rem;

  @media ${device.laptop} {
    font-size: 0.7rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.6rem;
  }
`;

export const Button = styled.button`
  background: ${colors.secondary};
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 6px;
  border: 2px solid ${colors.secondary};
  margin-left: 2rem;
  cursor: pointer;
  transition: 0.25s;
  white-space: nowrap;

  &:hover {
    background: white;
    color: ${colors.secondary};
  }

  @media ${device.laptop} {
    padding: 0.75rem 1.8rem;
    margin-left: 1.5rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0.65rem 1.3rem;
    font-size: 0.85rem;
    margin-left: 1rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const BottomBar = styled.div`
  height: 3.5rem;
  background: ${colors.primary};
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    height: 3rem;
  }
`;

export const BottomContent = styled(Container)`
  justify-content: space-between;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 5rem;

  @media ${device.desktop} {
    gap: 4rem;
  }

  @media ${device.laptop} {
    gap: 3rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 2rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 0.94rem;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: inherit;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.laptop} {
    font-size: 0.88rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.8rem;
  }
`;

export const SocialGroup = styled.div`
  display: flex;
  gap: 1.5rem;


  @media (max-width: 767px) {
    margin-left: auto;
  }
`;

export const SocialIcon = styled.img`
  height: 1rem;
  filter: brightness(0) invert(1);
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: none;
  cursor: pointer;


  @media (max-width: 767px) {
    display: block;
    color: ${colors.primary};
  }
`;
