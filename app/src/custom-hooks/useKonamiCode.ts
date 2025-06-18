import { useSecretCode } from "./useSecretCode";

const konamiCode = [ "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA",];

export const useKonamiCode = () => {
  const success = useSecretCode(konamiCode);
  return success;
};