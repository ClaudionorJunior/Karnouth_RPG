import React, { createContext, useCallback, useContext, useState } from 'react';
import ModalSelectMonster from '../../Components/ModalSelectMonster';

interface ModalItemDetailProps {
  showModalMonsters(): void;
  hideModalMonsters(): void;
  isVisible: boolean;
}

const ModalItemDetailContext = createContext<ModalItemDetailProps>(
  {} as ModalItemDetailProps,
);

const useModalSelectMonster = () => useContext(ModalItemDetailContext);

export const ModalItemDetailProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showModalMonsters = useCallback(() => {
    setIsVisible(true);
  }, [isVisible]);

  const hideModalMonsters = useCallback(() => {
    setIsVisible(false);
  }, [isVisible]);

  return (
    <ModalItemDetailContext.Provider
      value={{ hideModalMonsters, showModalMonsters, isVisible }}
    >
      {children}
      <ModalSelectMonster
        hideModalMonsters={hideModalMonsters}
        isVisible={isVisible}
      />
    </ModalItemDetailContext.Provider>
  );
};

export default useModalSelectMonster;
