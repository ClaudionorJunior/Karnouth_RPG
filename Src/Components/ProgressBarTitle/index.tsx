import React, { useEffect, useState } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Typography } from '~/elements/Typography';
import { Container, LevelBar, Row } from './styles';

interface ProgressBarTitleProps {
  currentValue: number;
  totalValue: number;
  title: string;
  progressColor: 'life' | 'XP';
  textColor?: 'light' | 'dark';
}

export const ProgressBarTitle = ({
  currentValue,
  totalValue,
  title,
  textColor = 'dark',
  progressColor,
}: ProgressBarTitleProps) => {
  const [translateX] = useState(new Animated.Value(0));
  const { colors } = useTheme();

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: -150 + (150 * currentValue) / totalValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [currentValue, totalValue]);

  const levelStyles: Animated.WithAnimatedObject<ViewStyle> = {
    height: '100%',
    transform: [
      {
        translateX,
      },
    ],
    backgroundColor:
      progressColor === 'life' ? colors.blood : colors.secondary1,
    borderRadius: 8,
  };

  return (
    <Container>
      <Typography
        text={title}
        textSize="paragraphy"
        color={textColor === 'dark' ? colors.textColor : colors.white}
      />
      <Row>
        <LevelBar>
          <Animated.View style={levelStyles} />
        </LevelBar>
        <Typography
          text={`${currentValue}/${totalValue}`}
          color={textColor === 'dark' ? colors.textColor : colors.white}
          textSize="paragraphy"
        />
      </Row>
    </Container>
  );
};
