import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav>
        <NavLink to="/login" end>
          login
        </NavLink>
        <NavLink to="/signup" end>
          signUp
        </NavLink>
        <NavLink to="/guest" end>
          guest
        </NavLink>
      </nav>
    </>
  );
}
