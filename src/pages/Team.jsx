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
            <button className="teamButton" onClick={handleRemove(agent)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <br />
      <button className="teamButton" onClick={handleReset} style={hideButton}>
        Remove All
      </button>
    </div>
  );
}

export default Team;
