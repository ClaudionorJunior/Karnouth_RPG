import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const ModalFeedbackItems = styled.Modal``;

export const BackgroundModal = styled.Pressable`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top-left-radius: ${normalizePixel(6)}px;
  border-top-right-radius: ${normalizePixel(6)}px;
  background-color: ${({ theme }) => theme.colors.backgroudColor};
  align-items: center;
  padding: ${normalizePixel(16)}px ${normalizePixel(24)}px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${normalizePixel(8)}px;
`;
