function Team({ team, delTeam }) {
  const handleRemove = (a) => () => {
    delTeam(a);
  };

  return (
    <div className="teamBody">
      <h2> Choose your dream team!</h2>
      <div className="teamMap">
        {team.map((agent) => (
          <div key={agent.uuid}>
            <img className="icon" src={agent.displayIcon} />
            <p>{agent.displayName}</p>
            <button onClick={handleRemove(agent)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
