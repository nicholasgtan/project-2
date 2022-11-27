import { Link } from "react-router-dom";
import logoIcon from "../assets/V_Logomark_Off-White.png";
import logoText from "../assets/V_Logotype_Off-White.png";

function NavBar() {
  return (
    <nav className="nav">
      <div style={{ width: "1000px" }}>
        <img src={logoIcon} style={{ maxHeight: "70px" }} />
        <img src={logoText} style={{ maxHeight: "70px" }} />{" "}
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
