import React, { createContext, useCallback, useContext, useState } from 'react';
import { ModalSelectMonster } from '../../components/ModalSelectMonster';

interface ModalSelectMonsterProviderProps {
  children: React.ReactElement;
}

interface ModalSelectMonsterProps {
  showModalMonsters(): void;
  hideModalMonsters(): void;
  isVisible: boolean;
}

const ModalSelectMonsterContext = createContext<ModalSelectMonsterProps>(
  {} as ModalSelectMonsterProps,
);

const useModalSelectMonster = () => useContext(ModalSelectMonsterContext);

export const ModalSelectMonsterProvider = ({
  children,
}: ModalSelectMonsterProviderProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showModalMonsters = useCallback(() => {
    setIsVisible(true);
  }, [isVisible]);

  const hideModalMonsters = useCallback(() => {
    setIsVisible(false);
  }, [isVisible]);

  return (
    <ModalSelectMonsterContext.Provider
      value={{ hideModalMonsters, showModalMonsters, isVisible }}
    >
      {children}
      <ModalSelectMonster
        hideModalMonsters={hideModalMonsters}
        isVisible={isVisible}
      />
    </ModalSelectMonsterContext.Provider>
  );
};

export default useModalSelectMonster;
