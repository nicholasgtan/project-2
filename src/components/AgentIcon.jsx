import { Link } from "react-router-dom";

function AgentIcon({ img, team, callback }) {
  const handleMouseover = () => {
    callback(img);
  };

  const add = team.findIndex((t) => t.uuid === img.uuid) === -1;
  let style = add ? { opacity: 1 } : { opacity: 0.25 };

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
