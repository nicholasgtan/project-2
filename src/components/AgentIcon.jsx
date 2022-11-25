import { Link } from "react-router-dom";

function AgentIcon({ img, team, callback, callback2 }) {
  const handleMouseover = () => {
    callback(img);
  };

  const handleClick = () => {
    callback2(img);
  };

  let style = team.includes(img) ? { opacity: 0.25 } : { opacity: 1 };

  return (
    <Link to="/agent">
      <img
        className="icon"
        style={style}
        src={img.displayIcon}
        onMouseOver={handleMouseover}
        onClick={handleClick}
      />
    </Link>
  );
}

export default AgentIcon;
