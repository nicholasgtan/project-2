import { useState } from "react";
import AgentIcon from "../components/AgentIcon";
import BigImage from "../components/BigImage";

function AgentSelect({ agentData, cb }) {
  const [bigImage, setBigImage] = useState([]);
  const [filter, setFilter] = useState(agentData);

  const handleClick = (e) => {
    if (e.target.value === "Duelist") {
      setFilter(agentData.filter((d) => d.role.displayName === "Duelist"));
    } else if (e.target.value === "Initiator") {
      setFilter(agentData.filter((d) => d.role.displayName === "Initiator"));
    } else if (e.target.value === "Controller") {
      setFilter(agentData.filter((d) => d.role.displayName === "Controller"));
    } else if (e.target.value === "Sentinel") {
      setFilter(agentData.filter((d) => d.role.displayName === "Sentinel"));
    } else {
      setFilter(agentData);
    }
  };

  return (
    <main className="charSelect">
      <BigImage image={bigImage} />
      <div>
        <p>Select your Agent:</p>
        <button onClick={handleClick}>Show All</button>{" "}
        <button value="Duelist" onClick={handleClick}>
          Duelist
        </button>{" "}
        <button value="Initiator" onClick={handleClick}>
          Initiator
        </button>{" "}
        <button value="Controller" onClick={handleClick}>
          Controller
        </button>{" "}
        <button value="Sentinel" onClick={handleClick}>
          Sentinel
        </button>
        <br />
        <br />
        {filter.map((image) => (
          <AgentIcon
            img={image}
            key={image.uuid}
            callback={setBigImage}
            callback2={cb}
          />
        ))}
      </div>
    </main>
  );
}

export default AgentSelect;
