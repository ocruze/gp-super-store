import "./styles/global.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./components/Navbar/Routes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {Routes.map((route, i) => (
            <Route key={i} path={route.url} exact component={route.component} />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
