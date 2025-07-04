"use client";

import { createContext, useContext, useState } from "react";

const DisclosureContext = createContext<{
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  isClosing: boolean;
} | null>(null);

export const DisclosureProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggle = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => setIsOpen(false), 500);
    } else {
      setIsOpen(true);
      setIsClosing(false);
    }
  };
  const close = () => setIsOpen(false);

  return (
    <DisclosureContext.Provider value={{ isOpen, toggle, close, isClosing }}>
      {children}
    </DisclosureContext.Provider>
  );
};

export const useDisclosure = () => {
  const context = useContext(DisclosureContext);
  if (!context) {
    throw new Error("useDisclosure must be used inside DisclosureProvider");
  }
  return context;
};
