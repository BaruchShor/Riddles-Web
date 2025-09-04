import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        Logged off
      </button>
      <h1>Welcome to riddles game</h1>
    </>
  );
}
