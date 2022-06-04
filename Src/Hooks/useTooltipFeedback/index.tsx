import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '../../Elements';
import { normalizePixel } from '../../Helpers';
import { PlayerManagerItemsActions } from '../../Store/PlayerManagerItemsSlice';
import { RootState } from '../../Store/state';
import { Container } from './styles';

const TooltipFeedbackContext = createContext({});

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const useTooltipFeedback = () => useContext(TooltipFeedbackContext);

export const TooltipFeedbackProvider: React.FC = ({ children }) => {
  const { playerManagerItemsError } = useSelector(
    (state: RootState) => state.PlayerManagerItemsState,
  );
  const dispatch = useDispatch();
  const tooltipPosition = useSharedValue(normalizePixel(-280));
  const tooltipOpacity = useSharedValue(1);

  useEffect(() => {
    if (playerManagerItemsError) {
      tooltipPosition.value = withTiming(0, {
        duration: 700,
        easing: Easing.bounce,
      });
      setTimeout(() => {
        dispatch(PlayerManagerItemsActions.resetError());
      }, 3000);
    } else {
      tooltipPosition.value = withTiming(normalizePixel(-280), {
        duration: 700,
        easing: Easing.cubic,
      });

      tooltipOpacity.value = withTiming(0, {
        duration: 1000,
      });
    }
  }, [playerManagerItemsError]);

  const tooltipStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tooltipPosition.value }],
      opacity: tooltipOpacity.value,
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

export default useTooltipFeedback;
