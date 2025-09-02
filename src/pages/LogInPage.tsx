import { useNavigate } from "react-router";

export default function LogInPage() {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </button>
        <button
          type="submit"
          onClick={() => {
            navigate("/signIn");
          }}
        >
          Sign in
        </button>
        <button
          type="submit"
          onClick={() => {
            navigate("/guest");
          }}
        >
          Guest
        </button>
      </section>
    </>
  );
}
