import styled from "styled-components";



export const Section = styled.footer`
  background: #eef4f2;
  padding: 5rem 0 2rem;
`;



export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 0 var(--padding-x);
`;



export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.8fr 1.2fr 1fr;
  grid-template-areas: "brand links contact image";
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "links contact"
      "brand image";
    gap: 2rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "links"
      "contact"
      "brand";
    gap: 2.5rem;
    text-align: left;
  }
`;

export const BrandColumn = styled.div`
  grid-area: brand;
`;

export const LinksColumn = styled.div`
  grid-area: links;
  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;

export const ContactColumn = styled.div`
  grid-area: contact;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;



export const Logo = styled.img`
  width: 11rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    margin: 0 0 1rem 0;
    display: block;
  }
`;

export const Description = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.7;
  color: #909090;
;
  margin-bottom: 1.5rem;
`;



export const SocialRow = styled.div`
  display: flex;
  width: 84.32px;
  height: 16.11px;
  gap: 22px;
  
  box-sizing: border-box; 
  align-items: center; 

  @media (max-width: 600px) {
    margin: 0;
    justify-content: flex-start;
  }
`;

export const SocialIcon = styled.img`
  width: 1rem;
  cursor: pointer;
`;



export const Title = styled.h4`
  font-family: 'Alata';
  font-size: 0.9rem; 
  font-weight: 400;
 
  

  text-transform: uppercase;
  margin-bottom: 1.2rem;
`;



export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  color: #9F9F9F;
`;

export const Link = styled.a`
  font-size: 0.85rem;
  color: #6b6b6b;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #119a5d;
  }
`;



export const ContactItem = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.9rem;
`;

export const Icon = styled.img`
  width: 0.9rem;
  margin-top: 0.2rem;
`;

export const ContactText = styled.p`
  font-size: 0.85rem;
  color: #9F9F9F;
  line-height: 1.6;
  font-weight: 400;
`;



export const RightColumn = styled.div`
  grid-area: image;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 13rem;
`;

export const Button = styled.button`
  margin-top: 1rem;
  

  border: 1px solid #119a5d;
  background: transparent;
  color: #119a5d;

  padding: 0.6rem 1rem;
  border-radius: 0.4rem;

  cursor: pointer;
  font-size: 0.8rem;

  transition: 0.2s;

  &:hover {
    background: #119a5d;
    color: white;
  }
`;



export const Bottom = styled.div`
  margin-top: 3rem;
  padding-top: 1.2rem;

  border-top: 1px solid #d6e2df;

  text-align: center;
  font-size: 0.75rem;
  color: #6b6b6b;
`;
