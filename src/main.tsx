import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import Guest from "./components/Guest";
import Home from "./pages/Home";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="guest" element={<Guest />} />
      </Routes>
    </BrowserRouter>{" "}
  </StrictMode>
);
