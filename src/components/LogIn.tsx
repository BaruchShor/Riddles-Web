import { useState } from "react";
import { useNavigate } from "react-router";
import "../style/LogIn.css";

export default function LogIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(
        "https://riddleservies.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: username,
            password: password,
          }),
          credentials: "include",
        }
      );

      if (response.status === 200) {
        console.log("Log in successfuly");

        const data = await response.json();

        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        console.log("Response from server:", data);

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
      } else {
        const errorMessage = await response.json();
        setError(errorMessage);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <article id="logIn">
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          id="userName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log in</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </article>
  );
}
