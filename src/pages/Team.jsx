function Team({ team, delTeam }) {
  const handleRemove = (a) => () => {
    delTeam(a);
  };

  return (
    <div className="container" style={{ flexDirection: "column" }}>
      <h2 style={{ textAlign: "center" }}> Choose your dream team!</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
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
