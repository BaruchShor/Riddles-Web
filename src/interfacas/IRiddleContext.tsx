export default interface IRiddleContext {
  riddlesList: object[];
  setRiddles: React.Dispatch<React.SetStateAction<object[]>>;
}
