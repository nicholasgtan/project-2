import { Link } from "react-router-dom";
import Ability from "../components/Ability";

// {agentData.map((image) => (
//   <AgentIcon
//     img={image}
//     key={image.uuid}
//     callback={setBigImage}
//     callback2={cb}
//   />
// ))}

function AgentInfo({ agent, team, addTeam }) {
  const handleSelect = (a) => () => {
    if (team.length < 5) {
      addTeam(a);
    } else {
      alert(
        "You have added 5 agents to your team, please remove an agent to add another!"
      );
    }
  };

  return (
    <main>
      <div className="agentInfo">
        <div className="info">
          <h1>{agent.displayName}</h1>
          <p>{agent.description}</p>
          <div className="ablcont">
            {agent.abilities.map((abl) => (
              <Ability abl={abl} key={abl.slot} />
            ))}
          </div>
        </div>
        <img style={{ height: "500px" }} src={agent.fullPortrait} />
      </div>
      <br />
      <Link to="/">
        <button>Back</button>
      </Link>
      <button className="rightButton" onClick={handleSelect(agent)}>
        Select
      </button>
    </main>
  );
}

export default AgentInfo;
