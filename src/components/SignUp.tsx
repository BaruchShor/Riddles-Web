import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUp() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // איפוס הודעת השגיאה

    try {
      const response = await fetch("http://localhost:5000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userId,
          name: username,
          password: password,
        }),
      });

      // בדיקה אם התגובה היא 200 (OK)
      if (response.status === 200) {
        console.log("Log in successfuly");

        // עכשיו מבצעים ניווט לאחר התחברות מוצלחת
        navigate("logIn");
      } else {
        // אם הסטטוס אינו 200, קורא את הודעת השגיאה מהתגובה
        const errorMessage = await response.json();
        setError(errorMessage);
      }
    } catch (err) {
      // שגיאה כללית, כמו חוסר חיבור לשרת
      setError(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">User Id</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
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
        <button type="submit">Sign up</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
