/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '../../../../elements/Typography';
import { RootState } from '../../../../store/state';
import { Container, Scroll } from './styles';

export const ScrollTurns = () => {
  const historyBattle = useSelector(
    (state: RootState) => state.BattleHistoryState.history,
  );

  const reversedHistoryBattle = useMemo(() => {
    return [...historyBattle].reverse();
  }, [historyBattle]);

  return (
    <Container>
      <Typography text="battle history" textSize="small" />
      <Scroll>
        {reversedHistoryBattle.map((it, index) => {
          return (
            <Typography
              key={`${it}+${index}`}
              text={it}
              textSize="paragraphy"
            />
          );
        })}
      </Scroll>
    </Container>
  );
};
