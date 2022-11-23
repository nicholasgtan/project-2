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

function AgentInfo({ agent }) {
  // console.log(agent);

  return (
    <main className="agentInfo">
      <Link to="/">
        <button>Back</button>
      </Link>
      <button className="rightButton">Select</button>
      <div className="container">
        <div className="info">
          <h1>{agent.displayName}</h1>
          <p>{agent.description}</p>
          <div className="ablcont">
            {agent.abilities.map((abl) => (
              <Ability abl={abl} key={abl.slot} />
            ))}
          </div>
        </div>
        <img src={agent.fullPortrait} />
      </div>
      <br />
    </main>
  );
}

export default AgentInfo;
