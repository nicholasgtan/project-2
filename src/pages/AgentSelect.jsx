import { useState, useEffect } from "react";
import AgentIcon from "../components/AgentIcon";
import BigImage from "../components/BigImage";
import roleArr from "../assets/roleArr";

function AgentSelect({ agentData, team, cb }) {
  const [bigImage, setBigImage] = useState([]);
  const [filter, setFilter] = useState(agentData);

  useEffect(() => {
    if (agentData) {
      setFilter(agentData);
    }
  }, [agentData]);

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

  let agentNo = 5 - team.length;

  return (
    <main className="charSelect">
      <BigImage image={bigImage} />
      <br />
      <div>
        <span>
          Your Team needs 5 agents, choose wisely! <br />
          Choices left: {agentNo}
        </span>
        <br />
        <br />
        <button onClick={handleClick} style={{ width: "70px", height: "23px" }}>
          All Roles
        </button>
        <div className="role">
          {roleArr.map((role) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "70px",
                height: "70px",
              }}
              key={role.uuid}
              title={role.description}
            >
              <img className="smallIcon" src={role.displayIcon} />
              <button value={role.displayName} onClick={handleClick}>
                {role.displayName}
              </button>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "1100px",
            justifyContent: "center",
          }}
        >
          {filter.map((image) => (
            <AgentIcon
              img={image}
              key={image.uuid}
              team={team}
              callback={setBigImage}
              callback2={cb}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default AgentSelect;
