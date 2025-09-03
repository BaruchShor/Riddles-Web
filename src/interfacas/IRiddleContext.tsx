import type IRiddle from "./IRiddle";

export default interface IRiddleContext {
  riddlesList: IRiddle[];
  setRiddles: (obj: IRiddle[]) => void;
}
