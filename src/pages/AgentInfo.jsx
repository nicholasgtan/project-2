import { Link } from "react-router-dom";
import Ability from "../components/Ability";

function AgentInfo({ agent, team, addTeam }) {
  const handleSelect = (a) => () => {
    if (team.length < 5) {
      if (team.includes(a) === false) {
        addTeam(a);
      } else {
        alert(
          "You have added this agent already, please select another agent!"
        );
      }
    } else {
      if (team.includes(a) === true) {
        alert(
          "You have already chosen this agent and have 5 agents in your team, please remove an agent to add another!"
        );
      } else
        alert(
          "You have chosen 5 agents for your team, please remove an agent to add another!"
        );
    }
  };

  const selectText = team.includes(agent) ? "Added" : "Add";

  return (
    <main>
      <div className="agentInfo">
        <div style={{ maxWidth: "1000px", display: "flex" }}>
          <div className="info">
            <h1>{agent.displayName}</h1>
            <p>{agent.description}</p>
            <div className="ablcont">
              {agent.abilities.map((abl) => (
                <Ability abl={abl} key={abl.slot} />
              ))}
            </div>
          </div>
          <img style={{ height: "400px" }} src={agent.fullPortrait} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "1000px",
          }}
        >
          <Link to="/">
            <button>Back</button>
          </Link>
          <button className="rightButton" onClick={handleSelect(agent)}>
            {selectText}
          </button>
        </div>
      </div>
    </main>
  );
}

export default AgentInfo;
