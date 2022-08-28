import { PlayerStatusState } from './@types';

export const initialState: PlayerStatusState = {
  playerType: undefined,
  Mage: {
    intelligence: 15,
    life: 5,
    power: 0,
    precision: 5,
    defense: 5,
  },
  Warrior: {
    intelligence: 0,
    life: 9,
    power: 9,
    precision: 5,
    defense: 7,
  },
  Ranger: {
    intelligence: 0,
    life: 5,
    power: 5,
    precision: 15,
    defense: 5,
  },
  remainingPoints: 10,
  playerXPPoints: 0,
  xpToNextLevel: 150,
  level: 1,
  playerLifePoints: 150,
  currentPlayerLifePoints: 150,
  isLoading: false,
};
