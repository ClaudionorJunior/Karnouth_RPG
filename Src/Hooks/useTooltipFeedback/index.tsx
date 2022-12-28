import React, { createContext, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '~/elements/Typography';
import { normalizePixel } from '~/helpers';
import { PlayerManagerItemsActions } from '~/store/PlayerManagerItems/slice';
import { RootState } from '~/store/@types';
import { Container } from './styles';
import { TIME_TO_RESET_TOOLTIP } from '~/global';

interface TooltipFeedbackProviderProps {
  children: React.ReactElement;
}

const TooltipFeedbackContext = createContext({});
const AnimatedContainer = Animated.createAnimatedComponent(Container);

export const TooltipFeedbackProvider = ({
  children,
}: TooltipFeedbackProviderProps) => {
  const tooltipPosition = useSharedValue(normalizePixel(-280));
  const { playerManagerItemsError } = useSelector(
    (state: RootState) => state.PlayerManagerItemsState,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (playerManagerItemsError) {
      tooltipPosition.value = withTiming(0, {
        duration: 700,
      });
      setTimeout(() => {
        dispatch(PlayerManagerItemsActions.resetError());
      }, TIME_TO_RESET_TOOLTIP);
    } else if (!tooltipPosition.value) {
      tooltipPosition.value = withTiming(normalizePixel(-280), {
        duration: 700,
        easing: Easing.circle,
      });
    }
  }, [playerManagerItemsError]);

  const tooltipStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tooltipPosition.value }],
    };
  });

  return (
    <TooltipFeedbackContext.Provider value={{}}>
      {children}
      <AnimatedContainer style={tooltipStyle}>
        <Typography
          text={playerManagerItemsError}
          textSize="paragraphy"
          numberOfLines={3}
        />
      </AnimatedContainer>
    </TooltipFeedbackContext.Provider>
  );
};
