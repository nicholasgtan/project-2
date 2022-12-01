import { Button } from "react-bootstrap";

function Team({ team, delTeam, resetTeam }) {
  const handleRemove = (a) => () => {
    delTeam(a);
  };

  const handleReset = () => {
    resetTeam();
  };

  const hideButton = team.length > 1 ? { opacity: 1 } : { opacity: 0 };

  return (
    <div className="teamBody">
      <h2> Choose your dream team!</h2>
      <div className="teamMap">
        {team.map((agent) => (
          <div className="teamDiv" key={agent.uuid}>
            {agent.displayName}
            <img className="icon" src={agent.displayIcon} />
            <Button
              className="teamButton"
              variant="outline-light"
              size="sm"
              onClick={handleRemove(agent)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      <br />
      <Button
        className="teamButton"
        variant="outline-light"
        size="sm"
        onClick={handleReset}
        style={hideButton}
      >
        Remove All
      </Button>
    </div>
  );
}

export default Team;
