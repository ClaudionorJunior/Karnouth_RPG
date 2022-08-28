import React from 'react';
import { CloseButton, CloseButtonProps } from '~/elements/CloseButton';
import { Container } from './styles';

export const CloseModalContainer = ({
  containerStyles,
  ...rest
}: CloseButtonProps) => {
  return (
    <Container>
      <CloseButton containerStyles={containerStyles} {...rest} />
    </Container>
  );
};
