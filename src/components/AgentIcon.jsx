import { Link } from "react-router-dom";

function AgentIcon({ img, add, callback }) {
  const handleMouseover = () => {
    callback(img);
  };

  let style = add(img) ? { opacity: 1 } : { opacity: 0.25 };

  return (
    <Link to={`/agent/${img.uuid}`}>
      <img
        className="icon"
        style={style}
        src={img.displayIcon}
        onMouseOver={handleMouseover}
      />
    </Link>
  );
}

export default AgentIcon;
