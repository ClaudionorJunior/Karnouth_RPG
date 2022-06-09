import React from 'react';
import { CloseButton, CloseButtonProps } from '../../Elements';
import { Container } from './styles';

const CloseModalContainer = ({
  containerStyles,
  ...rest
}: CloseButtonProps) => {
  return (
    <Container>
      <CloseButton containerStyles={containerStyles} {...rest} />
    </Container>
  );
};

export default CloseModalContainer;
