import { Link } from "react-router-dom";
import logoIcon from "../assets/V_Logomark_Off-White.png";
import logoText from "../assets/V_Logotype_Off-White.png";
import { Button, ButtonGroup } from "react-bootstrap";

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div>
          <img className="nav-image" src={logoIcon} />
          <img className="nav-image" src={logoText} />
        </div>
        <ButtonGroup>
          <Link to="/">
            <Button className="navButton" variant="outline-light" size="sm">
              Main
            </Button>
          </Link>
          <Link to="/team">
            <Button className="navButton" variant="outline-light" size="sm">
              Team
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    </nav>
  );
}

export default NavBar;
