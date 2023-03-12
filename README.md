# Developing a React Application - Project 2

# Valorant Agent Select

<!-- DEMO -->

<a href="https://valorant-agents-q6528r8ux-nicholasgtan.vercel.app/">View Demo</a>
<br />

## Technical Requirements

- **Build a web application using create-react-app / vite or next.js**. Must be
  your own work.
- **Use React framework** to build your application with _at least_
  - 3 components
  - 4 props
  - 2 state properties
  - 2 setState
  - 2 routes
- **Use 3rd party API and/or Firestore**
  - API call with Axios and display the data for the user. You may use any API
    of your choosing.
- **Craft a `README.md` file that explains your app** to the world.
- **Create wireframes** for your app and include it in your repo/readme.

## Timeframe

1 week

## Technologies & tools used

- Vite
- React
- Fetch for API
- Bootstrap React
- Cypress for E2E testing

## Wireframes

I utilized Lucidchart to draft the pages and elements as below:

![Wireframe](https://github.com/nicholasgtan/valorant-agents-p2/blob/main/src/assets/p2-wireframe.png?raw=true)

## User Stories

- **Main requirements:**
  - User is be able to load into the app and see an agent selection page as main. E.g. see a number of agent icons representing the choice of agents.
  - User is be able to mouse over each agent icon and view a introduction to each agent.
  - User is be able to click each agent icon and view more detailed information for each agent on a separate agent info page. E.g. agent abilities.
  - User is be able to add the agent to their team and/or go back to main page from agent info page.
  - User is able to view their team selection by navigating to team page via navigation bar.
  - User is limited to 5 max agents for their team and they cannot select the same agent more than once.
- **Additional:**
  - User is able to filter agent by role on selection page. E.g. Attacker/Duelist, Defender/Sentinel, etc.

## Development

1. Created React app template using Vite, installed all starting plugins:
   - eslint and eslint plugin react hooks
   - react router dom
2. Chose API and tested in app using fetch.
3. Deployed project on Vercel to confirm API works.
4. Wireframe planning
5. Coding proper (in order):
   - Created components for 3 pages
   - Created Navbar component
   - Created Layout component to display Navbar + output
   - Set up paths for each page using react router dom (E.g BrowserRoute, Route, Routes)
   - Coded Main (Agent select) page - useState, useEffect, get props from App.jsx, map for agent icons and role filter icons.
   - Coded Agent info page - useState, useEffect, Link, useParams, taking props from App.jsx
   - Coded Team page - taking props from App.jsx
6. Cleaned up code and css
   - Consolidated similar logics and states to respective parent.
   - Cleaned up css from in-line styles to css file.
   - (Bonus!) Installed Bootstrap to soup up all the buttons!
7. Tried Cypress IO E2E testing for the first time.
8. Finalize README.
9. Complete.

## API and References

- [Valorant-API](https://valorant-api.com/)
- This project was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
