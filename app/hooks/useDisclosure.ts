import { useState } from "react";
export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [opening, setOpening] = useState(true);

  const onToggle = () => {
    if (isOpen) {
      setOpening(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 400);

      return;
    }
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    onToggle,
    opening,
  };
};
