import { useEffect, useState } from "react";
import { useInputEvent } from "./useInputEvent";

export const useSecretCode = (secretCode) => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const key = useInputEvent();
  
  useEffect(() => {
    if (key == null) return;
    if (key !== secretCode[count]) {
      setCount(0);
      return;
    }
    
    setCount((state) => state + 1);
    if (count + 1 === secretCode.length) {
      setSuccess(true);
    }
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps
  
  return success;
};