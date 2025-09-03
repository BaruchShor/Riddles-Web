import { useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          name="userName"
          placeholder="Enter your name"
          required
        />
        <label htmlFor="password">password</label>
        <input type="password" name="password" required />
        <button
          type="submit"
          onClick={() => {
            navigate("/");
          }}
        >
          Sign in
        </button>
      </form>
    </div>
    
  );
}
