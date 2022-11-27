import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer style={{ textAlign: "center" }}>
        <span style={{ fontSize: "10px" }}>
          This project was created under Riot Games' "Legal Jibber Jabber"
          policy using assets owned by Riot Games. Riot Games does not endorse
          or sponsor this project.
          <br />
          API: https://valorant-api.com/
        </span>
      </footer>
    </>
  );
}

export default Layout;
