import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Saved from './pages/Saved'
import Search from './pages/Search'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/saved">
          <Saved />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
