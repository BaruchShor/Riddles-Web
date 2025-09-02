import { useLocation } from "react-router";
import MenuCard from "../components/MenuCard";

export default function Menu() {
  const location = useLocation();
  const { menu } = location.state || { menu: [] };
  return (
    <>
      <section>
        {menu.map((menuMessage: string) => {
          return <MenuCard message={menuMessage} />;
        })}
      </section>
    </>
  );
}
