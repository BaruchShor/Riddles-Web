import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router";
import LogIn from "./components/LogIn";
import Guest from "./components/Guest";
import Home from "./pages/Home";
import "./index.css";
import App from "./App.tsx";
import GamePage from "./pages/GamePage.tsx";
import Menu from "./pages/Menu.tsx";
import Game from "./components/Game.tsx";
import CreateNewRiddle from "./context/AddedRiddles.context.tsx";
import SignUp from "./components/SignUp.tsx";
import LeaderBoard from "./pages/LeaderBoard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CreateNewRiddle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="guest" element={<Guest />} />
          <Route path="menu" element={<Menu />} />
          <Route path="game" element={<GamePage />} />
          <Route path="play" element={<Game />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
        </Routes>
      </BrowserRouter>{" "}
    </CreateNewRiddle>
  </StrictMode>
);
