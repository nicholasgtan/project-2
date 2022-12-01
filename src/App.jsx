import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgentSelect from "./pages/AgentSelect";
import AgentInfo from "./pages/AgentInfo";
import Team from "./pages/Team";
import Layout from "./layout/Layout";

function App() {
  const [agentData, setAgentData] = useState([]);
  const [team, setTeam] = useState([]);

  const teamMembers = team.length;
  const addTeam = (agent) => setTeam([...team, agent]);
  const delTeam = (agent) => setTeam(team.filter((t) => t.uuid != agent.uuid));
  const resetTeam = () => setTeam([]);
  const add = (agent) => team.findIndex((t) => t.uuid === agent.uuid) === -1;
  const notAdd = (agent) => team.findIndex((t) => t.uuid === agent.uuid) !== -1;

  useEffect(() => {
    let controller = new AbortController();
    const signal = controller.signal;

    const fetchAgents = async () => {
      try {
        const request = await fetch("https://valorant-api.com/v1/agents", {
          signal,
        });
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
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <AgentSelect
                  agentData={agentData}
                  teamMembers={teamMembers}
                  add={add}
                />
              }
            />
            <Route
              path="/agent/:id"
              element={
                <AgentInfo
                  teamMembers={teamMembers}
                  addTeam={addTeam}
                  delTeam={delTeam}
                  add={add}
                  notAdd={notAdd}
                />
              }
            />
            <Route
              path="/team"
              element={
                <Team team={team} delTeam={delTeam} resetTeam={resetTeam} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
