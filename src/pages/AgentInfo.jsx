import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Ability from "../components/Ability";

function AgentInfo({ teamMembers, addTeam, add, notAdd }) {
  const { id } = useParams();
  const [agent, setAgent] = useState([]);
  const [ability, setAbility] = useState([]);

  useEffect(() => {
    let controller = new AbortController();
    const signal = controller.signal;

    const fetchAgents = async () => {
      try {
        const request = await fetch(
          `https://valorant-api.com/v1/agents/${id}`,
          { signal }
        );
        const data = await request.json();
        const dataArr = data.data;
        setAgent(dataArr);
        setAbility(dataArr.abilities);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAgents();
    return () => {
      controller.abort();
    };
  }, [id]);

  const text = add(agent) ? "Add" : "Added";

  const handleSelect = (a) => () => {
    if (teamMembers < 5) {
      if (add(agent)) {
        addTeam(a);
      } else {
        alert(
          "You have added this agent already, please select another agent!"
        );
      }
    } else {
      if (notAdd(agent)) {
        alert(
          "You have already chosen this agent and have 5 agents in your team, please remove an agent to add another!"
        );
      } else
        alert(
          "You have chosen 5 agents for your team, please remove an agent to add another!"
        );
    }
  };

  return (
    <main>
      <div className="agentInfo-main">
        <div className="agentInfo-content">
          <div className="contentInfo">
            <h1>{agent.displayName}</h1>
            <p>{agent.description}</p>
            <div className="ablcont">
              {ability.map((abl) => (
                <Ability abl={abl} key={abl.slot} />
              ))}
            </div>
          </div>
          <img className="agentInfo-portrait" src={agent.fullPortrait} />
        </div>
      </div>
      <div className="agentInfo-bottomBar">
        <div className="agentInfo-bottomButtons">
          <Link to="/">
            <button>Back</button>
          </Link>
          <button onClick={handleSelect(agent)}>{text}</button>
        </div>
      </div>
    </main>
  );
}

export default AgentInfo;
