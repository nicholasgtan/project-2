import { Link } from "react-router-dom";
import logoIcon from "../assets/V_Logomark_Off-White.png";
import logoText from "../assets/V_Logotype_Off-White.png";

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <img className="nav-image" src={logoIcon} />
        <img className="nav-image" src={logoText} />{" "}
        <Link to="/team">
          <button className="rightButton">Team</button>
        </Link>
        <Link to="/">
          <button className="rightButton">Main</button>
        </Link>{" "}
      </div>
    </nav>
  );
}

export default NavBar;
