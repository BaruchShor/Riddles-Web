import { useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <form>
        <label htmlFor="userName">User name</label>
        <input type="text" name="userName" required />
        <label htmlFor="password">password</label>
        <input type="password" name="password" required />
        <button
          type="submit"
          onClick={() => {
            navigate("/logIn");
          }}
        >
          Sign in
        </button>
      </form>
    </>
  );
}
