import { useState } from "react";

export const useEasterEgg = () => {
  const [show, setShow] = useState(false);

  const trigger = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  return { show, trigger, close };
};
