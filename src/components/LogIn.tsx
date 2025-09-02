import { useNavigate } from "react-router";

export default function LogIn() {
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
            navigate("/menu", {
              state: {
                menu: [
                  "press here to play a game.",
                  "press here to update your account",
                  "press here to see the liderboard.",
                  "press here to exit",
                ],
              },
            });
          }}
        >
          Log In
        </button>
      </form>
    </>
  );
}
