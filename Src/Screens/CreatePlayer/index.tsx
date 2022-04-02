import React from 'react';
import { PlayerSelect } from '../../Components';
import { PlayerTypies } from '../../@types';
import { Container } from './styles';

const PLAYERS_TYPE: PlayerTypies[] = ['Warrior', 'Mage', 'Ranger'];

const CreatePlayer = () => {
  return (
    <Container>
      {PLAYERS_TYPE.map(player => (
        <PlayerSelect playerType={player} />
      ))}
    </Container>
  );
};

export default CreatePlayer;
