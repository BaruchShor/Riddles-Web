import "./App.css";
import Game from "./components/Game";
import CreateNewRiddle from "./context/AddedRiddles.context";
import LogInPage from "./pages/LogInPage";

function App() {
  return (
    <>
      <h1>Hi</h1>
      <CreateNewRiddle>
        <LogInPage />
        <Game />
      </CreateNewRiddle>
    </>
  );
}

export default App;
