import React, { useState, createContext } from 'react';

type WalletButtonContext = {
  isOpen: any;
  handleClickOpen: () => void;
  handleClickClose: () => void;
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const WalletButtonContext = createContext<WalletButtonContext>(
  {} as WalletButtonContext
);

export const WalletButtonProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <WalletButtonContext.Provider
      value={{
        isOpen,
        handleClickOpen,
        handleClickClose
      }}
    >
      {children}
    </WalletButtonContext.Provider>
  );
};
