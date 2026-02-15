import { createContext, useContext, useState } from "react";

const ScrollDirectionContext = createContext();

export const ScrollDirectionProvider = ({ children }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
  const updateScrollDirection = (value) => {
    setIsScrollingDown(value);
  };
  const setModalStatus = (status) => {
    setIsModalOpen(status);
  };
  return (
   <ScrollDirectionContext.Provider 
      value={{ 
        isScrollingDown, 
        updateScrollDirection, 
        isModalOpen, 
        setModalStatus 
      }}
    >
      {children}
    </ScrollDirectionContext.Provider>
  );
};

export const useScrollDirectionContext = () => {
  const context = useContext(ScrollDirectionContext);
  if (!context)
    throw new Error(
      "useScrollDirectionContext must be used within ScrollDirectionProvider",
    );
  return context;
};
