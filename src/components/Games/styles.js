import styled from 'styled-components';



export const GamesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333;

  h1 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const GamesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const GameCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 3px rgba(255,255,255,1);
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  }
`;

export const Icon = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: top;
`;
