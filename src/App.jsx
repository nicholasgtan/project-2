import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgentSelect from "./pages/AgentSelect";
import AgentInfo from "./pages/AgentInfo";
import Team from "./pages/Team";
import Layout from "./layout/Layout";
import { useState, useEffect } from "react";

function App() {
  const [agentData, setAgentData] = useState([]);
  const [chooseAgent, setChooseAgent] = useState([]);
  const [team, setTeam] = useState([]);

  const addTeam = (agent) => setTeam([...team, agent]);

  const delTeam = (agent) => setTeam(team.filter((t) => t.uuid != agent.uuid));

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const request = await fetch("https://valorant-api.com/v1/agents");
        const data = await request.json();
        const dataArr = data.data;
        const filterPlayable = dataArr.filter(
          (data) => data.isPlayableCharacter === true
        );
        setAgentData(filterPlayable);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAgents();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <AgentSelect agentData={agentData} cb={setChooseAgent} />
              }
            />
            <Route
              path="/agent"
              element={
                <AgentInfo agent={chooseAgent} team={team} addTeam={addTeam} />
              }
            />
            <Route
              path="/team"
              element={<Team team={team} delTeam={delTeam} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
