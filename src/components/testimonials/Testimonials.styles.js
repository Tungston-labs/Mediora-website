import styled from "styled-components";



export const Section = styled.section`
  background: #176b5c;
  padding: 8rem 0 6rem 0;
  border-top-left-radius: 5% 1.5rem;
  border-top-right-radius: 5% 1.5rem;

  @media (max-width: 1024px) {
    padding: 6rem 0 4rem 0;
  }

  @media (max-width: 600px) {
    padding: 4rem 0 3rem 0;
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
  gap: 0.5rem;

  color: white;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  margin-bottom: 1rem;
`;

export const Tick = styled.img`
width: 0.9rem;
`;



export const Heading = styled.h2`
  font-family: 'Alata';
  color: #ffffff;
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 400;

  max-width: 42rem;
  margin: 0 auto;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`;



export const SubText = styled.p`
  color:#FFFFFF85;
  margin-top: 0.7rem;
  margin-bottom: 3.5rem;
  font-size: 0.9rem;
  line-height: 1.6;
  font-weight: 400;
  text-align: center;
`;



export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    display: flex;
    overflow-x: auto;
    gap: 1.5rem;
    padding-bottom: 2rem;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }
`;



export const Card = styled.div`
  border: 1px solid #FFFFFF4D;
  border-radius: 0.8rem;

  padding: 1.6rem;
  text-align: left;

  background: transparent;

  @media (max-width: 1024px) {
    flex: 0 0 calc(50% - 0.75rem);
    scroll-snap-align: start;
  }

  @media (max-width: 600px) {
    flex: 0 0 90%;
  }
`;



export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;



export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #ffffff;
  padding: 0.4rem;
`;



export const Name = styled.div`
  color: #ffffff;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
`;



export const Stars = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-bottom: 0.2rem;
`;

export const Star = styled.img`
width: 0.9rem;
`;



export const Divider = styled.div`
height: 1px;
background: #EAEEFF1A;
margin: 1rem 0;
`;



export const Text = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  line-height: 1.7;
  width: 100%;
`;
