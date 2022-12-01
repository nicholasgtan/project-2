import { useState, useEffect } from "react";
import AgentIcon from "../components/AgentIcon";
import BigImage from "../components/BigImage";
import roleArr from "../assets/roleArr";
import { Button } from "react-bootstrap";

function AgentSelect({ agentData, teamMembers, add }) {
  const [bigImage, setBigImage] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (agentData) {
      setFilter(agentData);
    }
  }, [agentData]);

  const handleFilter = (e) => {
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

  let agentNo = 5 - teamMembers;

  return (
    <main>
      <BigImage image={bigImage} />
      <br />
      <div className="charSelect">
        <div className="charSelect-interact">
          Your Team needs 5 agents, choose wisely! <br />
          Choices left: {agentNo}
          <div>
            <Button
              className="filterButton"
              variant="outline-light"
              size="sm"
              onClick={handleFilter}
            >
              All Roles
            </Button>
            <div className="role">
              {roleArr.map((role) => (
                <div
                  className="roleMap"
                  key={role.uuid}
                  title={role.description}
                >
                  <img className="smallIcon" src={role.displayIcon} />
                  <Button
                    className="filterButton"
                    variant="outline-light"
                    size="sm"
                    value={role.displayName}
                    onClick={handleFilter}
                  >
                    {role.displayName}
                  </Button>
                </div>
              ))}
            </div>
            <div id="grad">
              ⚔️Attack<div></div>Defence🛡️
            </div>
          </div>
        </div>
        <br />
        <div className="agentMap">
          {filter.map((image) => (
            <AgentIcon
              img={image}
              key={image.uuid}
              add={add}
              callback={setBigImage}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default AgentSelect;
