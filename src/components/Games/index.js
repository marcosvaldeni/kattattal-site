import React from 'react';



import {
  GamesContainer,
  GamesWrapper,
  GameCard,
  Icon,
} from './styles';

const Games = () => {
  return (
    <GamesContainer id="play">
      <h1>What I Play</h1>
      <GamesWrapper>
        <GameCard>
          <Icon src="https://theludaverse.com/wp-content/uploads/2020/04/Games_Subnav_Minecraft-300x465-1.jpg" />
          <h2>Minecraft</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </GameCard>
        <GameCard>
          <Icon src="https://www.4netplayers.com/wp-content/uploads/2020/05/344_astroneer.jpg" />
          <h2>Astroneer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </GameCard>
        <GameCard>
          <Icon src="https://www.gameforest.de/wp-content/uploads/2019/12/5b23c398ae653adfaa06cfa9.jpeg" />
          <h2>Raft</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </GameCard>
      </GamesWrapper>
    </GamesContainer>
  )
}

export default Games;
