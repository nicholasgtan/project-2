import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>Valorant</h1>{" "}
      <Link to="/">
        <button>Agent Select</button>
      </Link>{" "}
      <Link to="/team">
        <button>Team</button>
      </Link>
    </nav>
  );
}

export default NavBar;
