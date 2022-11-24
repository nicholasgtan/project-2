import { Link } from "react-router-dom";

function AgentIcon({ img, callback, callback2 }) {
  const handleMouseover = () => {
    callback(img);
  };

  const handleClick = () => {
    console.log("click");
    callback2(img);
  };

  return (
    <Link to="/agent">
      <img
        className="icon"
        style={{ opacity: 1 }}
        src={img.displayIcon}
        onMouseOver={handleMouseover}
        onClick={handleClick}
      />
    </Link>
  );
}

export default AgentIcon;
