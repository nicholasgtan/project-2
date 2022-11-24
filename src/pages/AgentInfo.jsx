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
      <button className="rightButton">Select</button>
    </main>
  );
}

export default AgentInfo;
