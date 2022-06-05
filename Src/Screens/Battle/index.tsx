import React, { useState } from 'react';
import { PlayerStatus, MonsterStatus } from '../../Components';
import { ButtonBattle, LineWrapper, Typography } from '../../Elements';
import {
  Container,
  ContainerBtnBattle,
  ScrollTurns,
  ContainerTurns,
} from './styles';

const Battle = () => {
  const [isDisabled, setIsDisbled] = useState<boolean>(false);
  return (
    <Container>
      <PlayerStatus />
      <ContainerBtnBattle>
        <Typography text="Attack" textSize="small" />
        <ButtonBattle disabled={!isDisabled} onPress={() => {}} />
        {!isDisabled && (
          <Typography text="waiting your turn" textSize="paragraphy" />
        )}
      </ContainerBtnBattle>
      <LineWrapper />
      <ContainerTurns>
        <ScrollTurns>
          <Typography
            text="you deal 200 hitpoints to spider"
            textSize="paragraphy"
          />
        </ScrollTurns>
      </ContainerTurns>
      <LineWrapper />
      <MonsterStatus />
    </Container>
  );
};

export default Battle;
