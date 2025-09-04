import { useEffect } from "react";
import "./App.css";
import { Outlet, useNavigate } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      console.log("check token", token);
      if (!token) return;
      try {
        const res = await fetch(
          "https://riddleservies.onrender.com/users/validate",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        console.log("check data", data);

        if (data.valid) {
          navigate("/home");
        } else {
          localStorage.removeItem("token");
        }
      } catch {
        localStorage.removeItem("token");
      }
    };
    checkToken();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
