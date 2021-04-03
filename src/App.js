import "./styles/global.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Deals from "./pages/Deals/Deals";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/deals" exact component={Deals} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
