import { useNavigate } from "react-router";
import "../style/LogInPage.css";

export default function LogInPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Riddles game log page</h1>
      <section id="logPage">
        <button
          className="logBtn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </button>
        <button
          className="logBtn"
          type="submit"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign in
        </button>
        <button
          className="logBtn"
          type="submit"
          onClick={() => {
            navigate("/guest");
          }}
        >
          Play as a guest
        </button>
      </section>
    </>
  );
}
