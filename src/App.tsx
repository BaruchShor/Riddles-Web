import { useEffect } from "react";
import "./App.css";
import CreatePlayer from "./components/CreateRiddle";
import LogInPage from "./pages/LogInPage";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/play");
    }
  });
  return (
    <>
      <h1>Hi</h1>
      <LogInPage />
      <CreatePlayer />
    </>
  );
}

export default App;
