import { useLocation, useNavigate } from "react-router";
import MenuCard from "../components/MenuCard";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  const { menu } = location.state || { menu: [] };
  return (
    <>
      <section>
        {menu.map((menuMessage: string) => {
          return <MenuCard message={menuMessage} />;
        })}
      </section>
      <button
        onClick={() => {
          navigate("/leaderboard");
        }}
      >
        Click here to the leaderboard
      </button>
    </>
  );
}
