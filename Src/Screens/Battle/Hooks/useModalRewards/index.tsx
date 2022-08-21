import React, { createContext, useCallback, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LootManagerActions } from '../../../../store/LootManagerSlice';
import ModalRewards from '../../components/ModalRewards';

interface ModalRewardsProps {
  showModalRewards(): void;
  hideModalRewards(): void;
  isVisible: boolean;
}

const ModalRewardsContext = createContext<ModalRewardsProps>(
  {} as ModalRewardsProps,
);

const useModalRewards = () => useContext(ModalRewardsContext);

export const ModalRewardsProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  const showModalRewards = useCallback(() => {
    setIsVisible(true);
  }, [isVisible]);

  const hideModalRewards = useCallback(() => {
    setIsVisible(false);
    dispatch(LootManagerActions.resetAllStatus());
  }, [isVisible]);

  return (
    <ModalRewardsContext.Provider
      value={{ hideModalRewards, showModalRewards, isVisible }}
    >
      {children}
      <ModalRewards hideModalRewards={hideModalRewards} isVisible={isVisible} />
    </ModalRewardsContext.Provider>
  );
};

export default useModalRewards;
