import React from 'react';
import { PlayerSelect } from '../../Components';
import { Container } from './styles';

const CreatePlayer = () => {
  return (
    <Container>
      <PlayerSelect />
      <PlayerSelect />
      <PlayerSelect />
    </Container>
  );
};

export default CreatePlayer;
