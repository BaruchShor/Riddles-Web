import { useNavigate } from "react-router";

export default function Guest() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Hi from guest</h2>
      <button
        onClick={() => {
          navigate("/play");
        }}
      >
        Click here to play a game
      </button>{" "}
    </>
  );
}
